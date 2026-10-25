import { useEffect, useState } from 'react';

// Subscription plans, exactly as staff set them up in the admin dashboard
// (Plans). Nothing is assumed: no plans means nothing is shown.
const API_ROOT = String(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '');
let request = null;

function loadPlans() {
  request ??= fetch(`${API_ROOT}/api/business/v1/public/plans/`)
    .then((r) => (r.ok ? r.json() : Promise.reject(r)))
    .then((data) => (Array.isArray(data?.plans) ? data.plans : []))
    .catch(() => { request = null; return []; });
  return request;
}

/** null while loading, then the list (possibly empty). */
export function usePlans() {
  const [plans, setPlans] = useState(null);
  useEffect(() => {
    let alive = true;
    loadPlans().then((p) => { if (alive) setPlans(p); });
    return () => { alive = false; };
  }, []);
  return plans;
}

export const tzs = (n) => `TZS ${Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
export const per = (days) => (days === 30 ? 'month' : days === 365 ? 'year' : `${days} days`);
export const cheapest = (plans) => (plans?.length ? plans.reduce((a, b) => (b.price < a.price ? b : a)) : null);
