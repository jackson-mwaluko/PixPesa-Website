import React from 'react';
import Icon from './Icon.jsx';
import { BUSINESS_REGISTER, track } from '../links.js';
import { per, tzs, usePlans } from '../plans.js';

// Plans come from the backend (staff set them up in the admin dashboard >
// Plans), so a new plan shows here without a website change. No plans set
// up means no plans shown.

const EVERY_PLAN = [
  'Business portal and Business app',
  'One QR, Lipa Namba and payment links',
  'Invoices, products, stock and customers',
  'Team roles and branches',
  'Reports, reconciliation and payouts',
  'Merchant API and webhooks',
];

const millions = (n) => (n >= 1e6 ? `TZS ${Number((n / 1e6).toFixed(1)).toLocaleString('en-US')}M` : tzs(n));

export default function Pricing() {
  const plans = usePlans();
  if (plans === null) return <div className="plans-loading" aria-label="Loading plans" />;
  if (plans.length === 0) {
    return (
      <div className="plans-empty">
        <span><Icon name="spark" size={22} /></span>
        <h3>Plans are coming soon</h3>
        <p>We're finalising PixPesa Business plans. Open your account now and you'll choose a plan before you go live.</p>
        <a className="btn btn-primary" href={BUSINESS_REGISTER} onClick={() => track('business_register_click', { from: 'pricing_empty' })}>Open business account</a>
      </div>
    );
  }

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
