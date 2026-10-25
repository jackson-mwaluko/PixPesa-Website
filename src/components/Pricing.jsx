import React, { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { BUSINESS_REGISTER, track } from '../links.js';

// Plans come from the backend (staff set them up in the admin dashboard >
// Plans), so a new plan shows here without a website change. If the API
// can't be reached, the standard plan is shown.
const API_ROOT = String(import.meta.env.VITE_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '');
const FALLBACK = [{ code: 'standard', name: 'Standard', description: 'Everything you need to get paid and run your business.',
  price: 10000, period_days: 30, is_default: true, daily_receive_limit: 10000000, benefits: [], features: [] }];

const EVERY_PLAN = [
  'Business portal and Business app',
  'One QR, Lipa Namba and payment links',
  'Invoices, products, stock and customers',
  'Team roles and branches',
  'Reports, reconciliation and payouts',
  'Merchant API and webhooks',
];

const tzs = (n) => `TZS ${Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
const per = (days) => (days === 30 ? 'month' : days === 365 ? 'year' : `${days} days`);
const millions = (n) => (n >= 1e6 ? `TZS ${Number((n / 1e6).toFixed(1)).toLocaleString('en-US')}M` : tzs(n));

export default function Pricing() {
  const [plans, setPlans] = useState(FALLBACK);

  useEffect(() => {
    fetch(`${API_ROOT}/api/business/v1/public/plans/`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((data) => { if (Array.isArray(data?.plans) && data.plans.length) setPlans(data.plans); })
      .catch(() => {});
  }, []);

  const single = plans.length === 1;
  return (
    <>
      <div className={`plans${single ? ' plans-single' : ''}`}>
        {plans.map((p) => (
          <article key={p.code} className={`plan${p.is_default ? ' plan-main' : ''}`}>
            <div className="plan-head">
              <span className="price-name">{p.name}</span>
              {p.is_default && !single && <span className="plan-tag">Start here</span>}
            </div>
            <p className="price">{tzs(p.price)} <span>/ {per(p.period_days)}</span></p>
            {p.description && <p className="plan-desc">{p.description}</p>}
            <ul className="plan-points">
              <li><Icon name="check" size={17} /> Receive up to {millions(p.daily_receive_limit)} a day</li>
              {p.features.map((f) => <li key={f}><Icon name="spark" size={17} /> {f}</li>)}
              {p.benefits.map((b) => <li key={b}><Icon name="check" size={17} /> {b}</li>)}
            </ul>
            <a className={`btn btn-lg btn-block ${p.is_default ? 'btn-lime' : 'btn-primary'}`} href={BUSINESS_REGISTER}
              onClick={() => track('business_register_click', { from: 'pricing', plan: p.code })}>
              {p.is_default ? 'Open business account' : `Start with ${p.name}`}
            </a>
          </article>
        ))}
      </div>
      <div className="plans-foot">
        <div>
          <p className="plans-foot-title">Every plan includes</p>
          <ul>{EVERY_PLAN.map((t) => <li key={t}><Icon name="check" size={16} /> {t}</li>)}</ul>
        </div>
        <p className="plans-note">
          <b>Upgrade any time.</b> You only pay the difference for the days left in your current month. Renews automatically
          from your business balance, so your QR stays live. <a href="/#contact">Need higher limits? Talk to us.</a>
        </p>
      </div>
    </>
  );
}
