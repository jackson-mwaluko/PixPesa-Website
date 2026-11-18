import React, { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import { Brand } from '../components/Nav.jsx';
import { PLAY_URL } from '../links.js';

// The QR on a PixPesa receipt is pixpesa.com/verify?r=<reference>&c=<code>.
// Scanned with any camera it lands here and asks PixPesa whether that
// transaction is genuine. Only what a receipt already shows comes back,
// with people's names masked.
const API_ROOT = String(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '');

const money = (amount, currency = 'TZS') =>
  `${currency} ${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const when = (iso) => new Date(iso).toLocaleString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
});

const STATUS = { completed: 'Completed', pending: 'Pending', failed: 'Failed', reversed: 'Reversed', refunded: 'Refunded' };

export default function Verify() {
  const params = new URLSearchParams(window.location.search);
  const reference = params.get('r') || '';
  const code = params.get('c') || '';
  const [state, setState] = useState(reference && code ? 'loading' : 'missing');
  const [tx, setTx] = useState(null);

  useEffect(() => {
    document.title = 'Verify a PixPesa receipt';
    if (!reference || !code) return;
    fetch(`${API_ROOT}/api/public/receipts/verify/?${new URLSearchParams({ r: reference, c: code })}`)
      .then((res) => {
        if (res.status === 404) return setState('invalid');
        if (!res.ok) return Promise.reject(res);
        return res.json().then((data) => { setTx(data); setState('valid'); });
      })
      .catch(() => setState('error'));
  }, []);

  return (
    <div className="pay-page">
      <header className="pay-top"><Brand /></header>
      <main className="pay-card verify-card">
        {state === 'loading' && <div className="pay-skeleton" aria-label="Checking" />}

        {state === 'valid' && tx && (
          <>
            <span className="verify-badge ok"><Icon name="check" size={30} /></span>
            <h1>Genuine PixPesa transaction</h1>
            <p className="muted">This receipt matches a transaction in PixPesa.</p>
            <p className="pay-amount">{money(tx.amount, tx.currency)}</p>
            <dl className="verify-rows">
              <div><dt>Status</dt><dd className={tx.status === 'completed' ? 'is-ok' : ''}>{STATUS[tx.status] || tx.status}</dd></div>
              <div><dt>Type</dt><dd>{tx.type}</dd></div>
              {tx.from && <div><dt>From</dt><dd>{tx.from}</dd></div>}
              {tx.to && <div><dt>To</dt><dd>{tx.to}</dd></div>}
              <div><dt>Date &amp; time</dt><dd>{when(tx.date)}</dd></div>
              <div><dt>Reference</dt><dd className="mono">{tx.reference}</dd></div>
            </dl>
            <p className="pay-help">Compare these with the receipt you were shown. Names are shortened to protect people's privacy.</p>
          </>
        )}

        {(state === 'invalid' || state === 'missing') && (
          <>
            <span className="verify-badge bad"><Icon name="close" size={30} /></span>
            <h1>{state === 'missing' ? 'This verification link is incomplete' : 'No matching transaction'}</h1>
            <p className="muted">
              {state === 'missing'
                ? 'Scan the QR on the receipt again.'
                : 'PixPesa has no transaction matching this receipt. It may have been edited or made up. Don\'t release goods or money on the strength of it.'}
            </p>
          </>
        )}

        {state === 'error' && (
          <>
            <h1>We couldn't check this right now</h1>
            <p className="muted">Please try again in a moment.</p>
          </>
        )}
      </main>
      <footer className="pay-foot">
        <span><Icon name="shield" size={14} /> Secured by PixPesa</span>
        <a href={PLAY_URL}>Get the PixPesa app →</a>
      </footer>
    </div>
  );
}
