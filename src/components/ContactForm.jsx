import React, { useState } from 'react';
import { api } from '../services/api';
import { getRecaptchaToken } from '../services/recaptcha';
import Icon from './Icon.jsx';

const TOPICS = ['Business account', 'Soundbox or QR stand', 'API integration', 'Partnership', 'Support', 'Something else'];
const EMPTY = { name: '', email: '', phone: '', subject: TOPICS[0], message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState('idle'); // idle | sending | done
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setState('sending');
    try {
      const recaptcha_token = await getRecaptchaToken('submit');
      await api.submitContact({ ...form, recaptcha_token });
      if (window.gtag) window.gtag('event', 'contact_submit', { topic: form.subject });
      setState('done');
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please try again.');
      setState('idle');
    }
  };

  if (state === 'done') {
    return (
      <div className="contact-form contact-done">
        <span className="done-tick"><Icon name="check" size={28} /></span>
        <h3>Message sent</h3>
        <p className="muted">Thanks {form.name.split(' ')[0]}. Our team replies within one business day.</p>
        <button className="btn btn-ghost" type="button" onClick={() => { setForm(EMPTY); setState('idle'); }}>Send another</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label className="field">Name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
        <label className="field">Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
        <label className="field">Phone <span className="opt">optional</span><input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" /></label>
        <label className="field">Topic
          <select value={form.subject} onChange={set('subject')}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <label className="field span-2">Message<textarea required rows="4" value={form.message} onChange={set('message')} placeholder="Tell us about your business and what you need." /></label>
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="btn btn-primary" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</button>
      <p className="fine">Protected by reCAPTCHA. Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms</a> apply.</p>
    </form>
  );
}
