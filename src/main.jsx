import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import RsvpPage, { matchRsvpRoute } from './rsvp/RsvpPage.jsx';

// /rsvp/<token> and /events/<code> are Events & Invitations pages; every
// other path is the marketing site as before.
const rsvpRoute = matchRsvpRoute(window.location.pathname);

createRoot(document.getElementById('root')).render(rsvpRoute ? <RsvpPage route={rsvpRoute} /> : <App />);
