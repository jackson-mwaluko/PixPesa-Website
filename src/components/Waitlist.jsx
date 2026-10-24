import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { getRecaptchaToken } from '../services/recaptcha';
import Icon from './Icon.jsx';
import { BUSINESS_REGISTER } from '../links.js';

// The personal app is invite-only for now; this collects people who want in.
export default function Waitlist({ onClose }) {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', userType: 'Individual User', location: '', newsletter: true });
  const [state, setState] = useState('idle'); // idle | sending | done
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setState('sending');
    try {
      const recaptcha_token = await getRecaptchaToken('waitlist');
      await api.submitWaitlist({ ...form, recaptcha_token });
      if (window.gtag) window.gtag('event', 'waitlist_join', { role: form.userType });
      setState('done');
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please try again.');
      setState('idle');
    }
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="wl-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card">
        <button className="modal-x" type="button" aria-label="Close" onClick={onClose}><Icon name="close" /></button>
        {state === 'done' ? (
          <div className="modal-done">
            <span className="done-tick"><Icon name="check" size={28} /></span>
            <h3 id="wl-title">You're on the list</h3>
            <p>Thanks {form.fullName.split(' ')[0]}. We'll email you as soon as your invite is ready.</p>
            <button className="btn btn-primary" type="button" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="eyebrow">PixPesa app</p>
            <h3 id="wl-title">Get early access</h3>
            <p className="muted">Pay any PixPesa QR, send money and pay bills from one app. Join the list for an invite.</p>
            <div className="field-grid">
              <label className="field span-2">Full name<input required value={form.fullName} onChange={set('fullName')} autoComplete="name" /></label>
              <label className="field">Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
              <label className="field">Phone<input required type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="07XX XXX XXX" /></label>
              <label className="field">I am a
                <select value={form.userType} onChange={set('userType')}>
                  <option>Individual User</option>
                  <option>Business Owner</option>
                  <option>Merchant</option>
                </select>
              </label>
              <label className="field">City<input value={form.location} onChange={set('location')} placeholder="Dar es Salaam" /></label>
            </div>
            {form.userType !== 'Individual User' && (
              <a className="modal-hint" href={BUSINESS_REGISTER}>
                Running a business? You don't need to wait: open a business account now <Icon name="arrow" size={16} />
              </a>
            )}
            <label className="check"><input type="checkbox" checked={form.newsletter} onChange={set('newsletter')} /> Send me product updates</label>
            {error && <p className="form-error">{error}</p>}
            <button className="btn btn-primary btn-block" disabled={state === 'sending'}>{state === 'sending' ? 'Joining…' : 'Join the waitlist'}</button>
          </form>
        )}
      </div>
    </div>
  );
}
