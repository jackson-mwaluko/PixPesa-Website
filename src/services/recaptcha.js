// src/services/recaptcha.js
// reCAPTCHA v3 helper.
// Loads Google's reCAPTCHA v3 script (idempotently) using your
// VITE_RECAPTCHA_SITE_KEY, then mints an action-scoped token that you send
// to the Django backend as `recaptcha_token` for server-side verification.

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
let scriptPromise = null;

function ready() {
  return !!(window.grecaptcha && typeof window.grecaptcha.execute === 'function');
}

// Ensure the grecaptcha script is present and ready. Reuses the tag already
// injected from index.html if it exists; otherwise injects one.
function loadScript() {
  if (!SITE_KEY) return Promise.resolve(false);
  if (ready()) return Promise.resolve(true);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    let s =
      document.querySelector('script[data-recaptcha]') ||
      document.querySelector('script[src*="recaptcha/api.js"]');
    if (!s) {
      s = document.createElement('script');
      s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      s.async = true;
      s.defer = true;
      s.setAttribute('data-recaptcha', '');
      document.head.appendChild(s);
    }
    const start = Date.now();
    (function poll() {
      if (ready()) return resolve(true);
      if (Date.now() - start > 8000) return resolve(false); // give up after 8s
      setTimeout(poll, 120);
    })();
  });
  return scriptPromise;
}

export function getRecaptchaToken(action) {
  return loadScript().then((ok) => {
    if (!ok) return ''; // key missing or script blocked: let backend decide
    return new Promise((resolve) => {
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(SITE_KEY, { action })
            .then((token) => resolve(token || ''))
            .catch(() => resolve(''));
        });
      } catch (e) {
        resolve('');
      }
    });
  });
}

// Warm up the script as soon as this module is imported.
loadScript();
