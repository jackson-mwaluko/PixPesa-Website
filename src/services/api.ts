// src/services/api.ts

// ============================
// Type Definitions
// ============================

interface ApiRequestOptions extends RequestInit {
  isFormData?: boolean;
  skipCSRF?: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  recaptcha_token?: string;
}

interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
  userType: string;
  location?: string;
  newsletter?: boolean;
  recaptcha_token?: string;
}

interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  access?: string;
  refresh?: string;
  access_token?: string;
  merchant?: any;
  success?: boolean;
}

// Determine API base URL based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  throw new Error("Missing VITE_API_URL in environment variables");
}

// Helper function to get CSRF token from cookies (if needed)
const getCSRFToken = (): string | null => {
  const name = 'csrftoken';
  let cookieValue: string | null = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

// Enhanced API request handler with better error handling
const apiRequest = async <T = any>(
  endpoint: string, 
  options: ApiRequestOptions = {}
): Promise<T> => {
  const token = localStorage.getItem('access_token');
  
  const defaultHeaders: Record<string, string> = {};
  
  // Add authorization header if token exists and not FormData
  if (token && !options.isFormData) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
    // Don't set Content-Type for FormData, but for JSON we need it
    if (!options.isFormData) {
      defaultHeaders['Content-Type'] = 'application/json';
    }
  }
  
  // Add CSRF token for non-GET requests (if using session auth)
  if (options.method && options.method !== 'GET' && !options.skipCSRF) {
    const csrfToken = getCSRFToken();
    if (csrfToken) {
      defaultHeaders['X-CSRFToken'] = csrfToken;
    }
  }
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  // If it's FormData, remove Content-Type header (browser will set it with boundary)
  if (options.body instanceof FormData) {
    delete (config.headers as Record<string, string>)['Content-Type'];
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Handle unauthorized access
    if (response.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_data');
      
      // Only redirect if not already on login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
      throw new Error('Session expired. Please login again.');
    }
    
    // Parse response as JSON
    let data: any;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError);
        throw new Error('Invalid JSON response from server');
      }
    } else {
      // For non-JSON responses, get text but don't throw automatically
      const textResponse = await response.text();
      console.warn('Non-JSON response received:', textResponse);
      
      // If response is OK but not JSON, create a success response
      if (response.ok) {
        data = { success: true, message: textResponse || 'Request successful' };
      } else {
        data = { success: false, error: textResponse || 'Server returned non-JSON response' };
      }
    }
    
    // Handle non-200 responses
    if (!response.ok) {
      const errorMessage = data.error || data.message || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }
    
    // Ensure the response always has a success field for form submissions
    // This makes it consistent for the frontend to check
    if (data && typeof data.success === 'undefined') {
      // If success field is missing but response is OK, consider it successful
      data.success = true;
    }
    
    return data as T;
    
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    
    // Rethrow with user-friendly message
    if (error instanceof Error) {
      if (error.message === 'Failed to fetch') {
        throw new Error('Network error. Please check your internet connection.');
      }
      throw error;
    }
    
    throw new Error('An unexpected error occurred');
  }
};

// API Service Object
export const api = {
  // ============================
  // Contact Form
  // ============================
  submitContact: async (formData: ContactFormData): Promise<ApiResponse> => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone || '');
    data.append('subject', formData.subject || '');
    data.append('message', formData.message);
    data.append('recaptcha_token', formData.recaptcha_token || '');
    data.append('form_submit_time', Date.now().toString());
    
    // Add honeypot field for spam protection
    data.append('website', ''); // Empty honeypot
    data.append('confirm_email', ''); // Empty honeypot
    
    return apiRequest('/contact/submit/', {
      method: 'POST',
      body: data,
      isFormData: true,
    });
  },
  
  // ============================
  // Waitlist Form
  // ============================
  submitWaitlist: async (formData: WaitlistFormData): Promise<ApiResponse> => {
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('userType', formData.userType);
    data.append('location', formData.location || '');
    data.append('newsletter', formData.newsletter ? 'on' : 'off');
    data.append('recaptcha_token', formData.recaptcha_token || '');
    data.append('form_submit_time', Date.now().toString());
    
    // Add honeypot field for spam protection
    data.append('website', '');
    data.append('confirm_email', '');
    
    return apiRequest('/waitlist/', {
      method: 'POST',
      body: data,
      isFormData: true,
    });
  },
  
 


};

// Export API base URL for other uses
export { API_BASE_URL };

// Export a custom hook for API status
export const getApiStatus = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health/`);
    return response.ok;
  } catch {
    return false;
  }
};
