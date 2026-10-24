import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { matchRsvpRoute } from './rsvp/route.js';
import './index.css';

// /rsvp/<token> and /events/<code> are Events & Invitations pages, loaded
// on demand so their fonts and QR code don't weigh down the marketing site.
const RsvpPage = lazy(() => import('./rsvp/RsvpPage.jsx'));
const rsvpRoute = matchRsvpRoute(window.location.pathname);

createRoot(document.getElementById('root')).render(
  rsvpRoute ? <Suspense fallback={null}><RsvpPage route={rsvpRoute} /></Suspense> : <App />,
);
