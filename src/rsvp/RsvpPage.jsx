import React, { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode';
import './rsvp.css';

/*
 * Web invitation pages for PixPesa Events & Invitations.
 *
 *   /rsvp/<token>   a guest's personal invitation - view, accept / decline,
 *                   then the door-ticket QR. No PixPesa account needed.
 *   /events/<code>  an event's own QR page - the card only.
 *
 * Talks to the public endpoints (/api/public/events/...), which return only
 * what the invitation is meant to show: never the guest list.
 */

const API_ROOT = String(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '');
const APP_PACKAGE = 'com.pixpesa.app.pixpesa';
const PLAY_URL = `https://play.google.com/store/apps/details?id=${APP_PACKAGE}`;

const KICKER = {
  elegant: 'You are invited',
  formal: 'Invitation',
  faith: 'Join us',
  memorial: 'In loving memory',
};

function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
}

function fmtTime(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

async function api(path, options) {
  const res = await fetch(`${API_ROOT}/api/public/events/${path}`, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    ...options,
  });
  let body = {};
  try {
    body = await res.json();
  } catch {
    /* empty body */
  }
  if (!res.ok) throw new Error(body.error || 'Something went wrong. Please try again.');
  return body;
}

function openInAppHref() {
  // Android: hand the same link to the app if installed, else the store.
  const { host, pathname } = window.location;
  return `intent://${host}${pathname}#Intent;scheme=https;package=${APP_PACKAGE};S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`;
}

const isAndroid = () => /android/i.test(navigator.userAgent || '');

function Card({ event, guestName }) {
  const t = KICKER[event.template] ? event.template : 'elegant';
  return (
    <article className={`rsvp-card tpl-${t}`}>
      <div className="rsvp-frame" />
      {event.cover_image ? <img className="rsvp-cover" src={event.cover_image} alt="" /> : <div className="rsvp-ornament" aria-hidden>✦</div>}
      {guestName ? <p className="rsvp-dear">Dear {guestName},</p> : null}
      <p className="rsvp-kicker">{KICKER[t]}</p>
      <h1 className="rsvp-title">{event.title}</h1>
      {event.host_name ? <p className="rsvp-host">Hosted by {event.host_name}</p> : null}
      <div className="rsvp-rule"><span /><i /><span /></div>
      <ul className="rsvp-info">
        <li>📅 {fmtDate(event.starts_at)}</li>
        <li>🕒 {fmtTime(event.starts_at)}</li>
        <li>📍 {event.venue}</li>
        {event.address ? <li className="rsvp-address">{event.address}</li> : null}
      </ul>
      {event.message ? <p className="rsvp-message">“{event.message}”</p> : null}
      {event.rsvp_deadline ? <p className="rsvp-deadline">Kindly respond by {fmtDate(event.rsvp_deadline)}</p> : null}
      {(event.contact_name || event.contact_phone) ? (
        <p className="rsvp-contact">{event.contact_name} {event.contact_phone}</p>
      ) : null}
    </article>
  );
}

function Ticket({ code }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    QRCode.toDataURL(code, { margin: 1, width: 440, color: { dark: '#1A1740', light: '#FFFFFF' } })
      .then(setSrc)
      .catch(() => setSrc(''));
  }, [code]);
  return (
    <section className="rsvp-panel rsvp-ticket">
      <h2>Your entry ticket</h2>
      <p>Show this QR at the entrance. It is personal — please don't share it.</p>
      {src ? <img src={src} alt="Entry ticket QR code" width="220" height="220" /> : null}
    </section>
  );
}

export default function RsvpPage({ route }) {
  const [state, setState] = useState({ loading: true, error: '', data: null });
  const [busy, setBusy] = useState(false);
  const [declining, setDeclining] = useState(false);
  const [note, setNote] = useState('');
  const [notice, setNotice] = useState('');

  const path = useMemo(
    () => (route.kind === 'invitation' ? `invitations/${encodeURIComponent(route.value)}/` : `${encodeURIComponent(route.value)}/`),
    [route],
  );

  useEffect(() => {
    document.title = 'PixPesa Invitation';
    api(path)
      .then((data) => setState({ loading: false, error: '', data }))
      .catch((e) => setState({ loading: false, error: e.message, data: null }));
  }, [path]);

  async function respond(response) {
    setBusy(true);
    setNotice('');
    try {
      const data = await api(`${path}respond/`, { method: 'POST', body: JSON.stringify({ response, note: response === 'declined' ? note : '' }) });
      setState({ loading: false, error: '', data });
      setDeclining(false);
      setNotice(response === 'accepted' ? 'Thank you! Your attendance is confirmed.' : 'Your reply has been sent to the host.');
    } catch (e) {
      setNotice(e.message);
    } finally {
      setBusy(false);
    }
  }

  const { loading, error, data } = state;
  const isInvitation = route.kind === 'invitation';
  const event = data ? (isInvitation ? data.event : data) : null;

  return (
    <div className="rsvp-page">
      <header className="rsvp-top">
        <a className="rsvp-brand" href="/">PixPesa</a>
        {isAndroid() ? <a className="rsvp-open-app" href={openInAppHref()}>Open in PixPesa app</a> : null}
      </header>

      <main className="rsvp-main">
        {loading ? <div className="rsvp-skeleton" aria-busy="true" /> : null}

        {!loading && error ? (
          <section className="rsvp-panel rsvp-error">
            <h2>Invitation unavailable</h2>
            <p>{error}</p>
          </section>
        ) : null}

        {event ? <Card event={event} guestName={isInvitation ? data.guest_name : null} /> : null}

        {event && event.status === 'cancelled' ? (
          <section className="rsvp-panel rsvp-error"><p>This event has been cancelled by the organizer.</p></section>
        ) : null}

        {event && isInvitation && event.status !== 'cancelled' ? (
          <section className="rsvp-panel">
            <div className="rsvp-status">
              <h2>{data.rsvp_status === 'pending' ? 'Will you attend?' : 'Your answer'}</h2>
              <span className={`rsvp-chip is-${data.rsvp_status}`}>
                {data.rsvp_status === 'accepted' ? 'Accepted' : data.rsvp_status === 'declined' ? 'Declined' : 'Pending'}
              </span>
            </div>
            {data.party_size > 1 ? <p className="rsvp-muted">Admits {data.party_size}</p> : null}
            {data.attendance_status === 'checked_in' ? (
              <p className="rsvp-muted">You have checked in. Enjoy the event!</p>
            ) : data.can_respond ? (
              declining ? (
                <div className="rsvp-decline">
                  <label htmlFor="rsvp-note">Message to the host (optional)</label>
                  <textarea id="rsvp-note" maxLength={300} rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
                  <div className="rsvp-actions">
                    <button type="button" className="rsvp-btn ghost" onClick={() => setDeclining(false)} disabled={busy}>Back</button>
                    <button type="button" className="rsvp-btn danger" onClick={() => respond('declined')} disabled={busy}>Send decline</button>
                  </div>
                </div>
              ) : (
                <div className="rsvp-actions">
                  <button
                    type="button"
                    className="rsvp-btn outline-danger"
                    onClick={() => setDeclining(true)}
                    disabled={busy || data.rsvp_status === 'declined'}
                  >
                    Decline
                  </button>
                  <button
                    type="button"
                    className="rsvp-btn accept"
                    onClick={() => respond('accepted')}
                    disabled={busy || data.rsvp_status === 'accepted'}
                  >
                    {data.rsvp_status === 'accepted' ? 'Accepted' : 'Accept invitation'}
                  </button>
                </div>
              )
            ) : (
              <p className="rsvp-muted">Responses for this event are closed.</p>
            )}
            {notice ? <p className="rsvp-notice" role="status">{notice}</p> : null}
          </section>
        ) : null}

        {event && isInvitation && data.ticket && data.attendance_status !== 'checked_in' ? <Ticket code={data.ticket} /> : null}

        {event && !isInvitation && event.status !== 'cancelled' ? (
          <section className="rsvp-panel">
            <h2>{data.allow_open_rsvp ? 'Respond in the PixPesa app' : 'By invitation only'}</h2>
            <p className="rsvp-muted">
              {data.allow_open_rsvp
                ? 'Open this event in PixPesa to accept or decline.'
                : 'Ask the organizer to send you your personal invitation link.'}
            </p>
          </section>
        ) : null}

        {event && event.map_url ? (
          <a className="rsvp-btn outline rsvp-wide" href={event.map_url} target="_blank" rel="noopener noreferrer">Get directions</a>
        ) : null}
      </main>

      <footer className="rsvp-foot">Invitations by <a href="/">PixPesa</a></footer>
    </div>
  );
}
