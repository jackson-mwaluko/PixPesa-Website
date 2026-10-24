/** Which page this URL is, or null. */
export function matchRsvpRoute(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length !== 2) return null;
  if (parts[0] === 'rsvp') return { kind: 'invitation', value: parts[1] };
  if (parts[0] === 'events' && /^[A-Za-z0-9_-]{4,16}$/.test(parts[1])) return { kind: 'event', value: parts[1] };
  return null;
}
