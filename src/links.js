export const BUSINESS_REGISTER = 'https://business.pixpesa.com/register';
export const BUSINESS_LOGIN = 'https://business.pixpesa.com/login';
export const WHATSAPP = 'https://wa.me/255764431337?text=Hi%20PixPesa%2C%20I%27d%20like%20to%20learn%20more';
export const EMAIL = 'info@pixpesa.com';
export const ADDRESS = '11104, Mirambo Street, Dar es Salaam, Tanzania';
export const APP_PACKAGE = 'com.pixpesa.app.pixpesa';
export const PLAY_URL = `https://play.google.com/store/apps/details?id=${APP_PACKAGE}`;

/** Counts sign-up intent in Analytics before the browser leaves for the portal. */
export function track(name, params = {}) {
  if (window.gtag) window.gtag('event', name, params);
}
