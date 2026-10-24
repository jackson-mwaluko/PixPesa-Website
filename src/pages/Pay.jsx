import React, { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { Brand } from '../components/Nav.jsx';
import { APP_PACKAGE, BUSINESS_REGISTER, PLAY_URL } from '../links.js';

// Business QRs and payment links are pixpesa.com/pay?to=<id>[&link=][&amount=].
// Opened in a camera app (not the PixPesa app) they land here: show who is
// being paid and hand the same link to the app.
const API_ROOT = String(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '');

const isAndroid = () => /android/i.test(navigator.userAgent || '');

function appHref() {
  const { host, pathname, search } = window.location;
  return `intent://${host}${pathname}${search}#Intent;scheme=https;package=${APP_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`;
}

const money = (amount, currency = 'TZS') => `${currency} ${Number(amount).toLocaleString('en-US', { maximumFractionDigits: 2 })}`;

export default function Pay() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get('to') || '';
  const [info, setInfo] = useState(null);
  const [state, setState] = useState(to ? 'loading' : 'missing');

  useEffect(() => {
    document.title = 'Pay with PixPesa';
    if (!to) return;
    const q = new URLSearchParams({ to });
    if (params.get('link')) q.set('link', params.get('link'));
    if (params.get('amount')) q.set('amount', params.get('amount'));
    fetch(`${API_ROOT}/api/business/v1/public/pay/?${q}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((data) => { setInfo(data); setState('ready'); })
      .catch(() => setState('error'));
  }, []);

  const business = info?.kind === 'business' ? info : null;
  const link = business?.link;
  const amount = link?.amount ?? business?.amount ?? params.get('amount');
  const blocked = (link && !link.payable) || (business && !business.accepting);
  const name = business?.business_name || to;

  return (
    <div className="pay-page">
      <header className="pay-top"><Brand /></header>
      <main className="pay-card">
        {state === 'loading' && <div className="pay-skeleton" aria-label="Loading" />}

        {state === 'missing' && (
          <>
            <h1>This payment link is incomplete</h1>
            <p className="muted">Scan the QR again, or ask the business to send you a new link.</p>
          </>
        )}

        {(state === 'ready' || state === 'error') && (
          <>
            <div className="pay-merchant">
              {business?.logo_url
                ? <img src={business.logo_url} alt="" width="64" height="64" />
                : <span className="pay-avatar">{name.slice(0, 1).toUpperCase()}</span>}
              <p className="muted">You're paying</p>
              <h1>{name}</h1>
              {business?.till_number && <span className="pay-till">Till {business.till_number}</span>}
            </div>

            {link?.title && (
              <div className="pay-link">
                <strong>{link.title}</strong>
                {link.description && <p>{link.description}</p>}
              </div>
            )}

            {amount && <p className="pay-amount">{money(amount, link?.currency)}</p>}

            {blocked ? (
              <p className="pay-note">{link?.message || 'This business is not accepting payments right now.'}</p>
            ) : (
              <>
                <a className="btn btn-primary btn-block btn-lg" href={isAndroid() ? appHref() : PLAY_URL}>
                  <Icon name="phone" size={18} /> Pay in the PixPesa app
                </a>
                <p className="pay-help">Have the PixPesa app? You can also open it and scan this QR from <b>Scan &amp; Pay</b>.</p>
              </>
            )}
            {state === 'error' && <p className="pay-help">We couldn't load the business details just now. You can still pay in the app.</p>}
          </>
        )}
      </main>
      <footer className="pay-foot">
        <span><Icon name="shield" size={14} /> Secured by PixPesa</span>
        <a href={BUSINESS_REGISTER}>Accept payments like this for your business →</a>
      </footer>
    </div>
  );
}
