import React, { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Pricing from '../components/Pricing.jsx';
import { cheapest, per, tzs, usePlans } from '../plans.js';
import qrStand from '../assets/qr-stand.jpg';
import soundbox from '../assets/soundbox-pack.jpg';
import appShot from '../assets/app-dashboard.webp';
import businessApp from '../assets/business-app.webp';
import nmbLogo from '../assets/nmb-logo.webp';
import { ADDRESS, BUSINESS_LOGIN, BUSINESS_REGISTER, EMAIL, WHATSAPP, track } from '../links.js';

const NETWORKS = ['M-Pesa', 'Airtel Money', 'Mixx by Yas', 'HaloPesa', 'Bank apps', 'PixPesa ID'];

const FEATURES = [
  { icon: 'qr', title: 'Get paid any way', text: 'One QR, a Lipa Namba and shareable payment links. Customers pay from any wallet or bank.', wide: true, tags: ['QR', 'Lipa Namba', 'Payment links', 'Requests to pay'] },
  { icon: 'counter', title: 'Counter mode', text: 'Type the amount, show the QR, see it marked paid. Built for a busy till.' },
  { icon: 'invoice', title: 'Invoices', text: 'Send invoices with a pay button, and set repeat invoices for regular clients.' },
  { icon: 'box', title: 'Products & stock', text: 'Your catalogue, stock levels and purchase orders in one place.' },
  { icon: 'people', title: 'Customers & loyalty', text: 'Know your regulars and reward them for coming back.' },
  { icon: 'bank', title: 'Payouts', text: 'Move your balance to your bank or mobile wallet, with every settlement on record.' },
  { icon: 'chart', title: 'Reports & accounting', text: 'Daily sales, reconciliation and exports your accountant can use.', wide: true, tags: ['Daily reports', 'Reconciliation', 'Accounting exports'] },
  { icon: 'spark', title: 'AI mode', text: 'Ask about your sales in plain words and get the answer.' },
];

const STEPS = [
  ['Open your account', 'Sign up online with your business details and verify your email.'],
  ['Go live', 'Once your business is verified, pay your first month and your QR and till are ready.'],
  ['Get paid & settle', 'Every payment lands in one balance. Pay out when you want.'],
];

const BUSINESS_APP = [
  ['qr', 'Receive payment with your QR or an amount QR'],
  ['send', 'Request, send, refund and pay bills'],
  ['link', 'Create and share payment links'],
  ['bank', 'See your balance and the next payout to your bank'],
  ['chart', "Today's collection and the week at a glance"],
];

const PERSONAL = [
  { icon: 'qr', title: 'Scan & Pay', text: 'Pay any PixPesa QR in a shop, taxi or market.' },
  { icon: 'send', title: 'Send money', text: 'To a PixPesa ID, a phone number or a bank account.' },
  { icon: 'bank', title: 'All your accounts', text: 'Link your bank accounts and see every balance in one place.' },
  { icon: 'invoice', title: 'Bills & airtime', text: 'LUKU, water, TV, internet, government bills and airtime.' },
  { icon: 'people', title: 'Mchango & splits', text: 'Run group contributions and Upatu, or split a bill with friends.' },
  { icon: 'box', title: 'Kibubu', text: 'Put money aside for the things you are saving for.' },
];

const FAQ = [
  ['Which wallets and banks can pay my QR?', 'Customers can pay from mobile money wallets, bank apps and the PixPesa app. You see every payment in one place, whatever it was paid from.'],
  ['How do I open a business account?', 'Go to business.pixpesa.com/register, add your business details and verify your email. You can start setting up your QR straight away.'],
  ['How do I get my money out?', 'Request a payout from the Business portal to your bank account or mobile wallet. Each payout and settlement is recorded for your reports.'],
  ['Can my staff use it without seeing everything?', 'Yes. Invite team members with roles, so a cashier can take payments while owners see reports and payouts. You can run several branches from one account.'],
  ['What is the Soundbox?', 'A small speaker that announces each payment out loud the moment it arrives, so you never need to check a phone at a busy counter.'],
  ['Do you have an API?', 'Yes. Create API keys in the Business portal, request payments from a customer\'s PixPesa ID or phone number, and get webhooks when they are paid.'],
];

const goRegister = (from) => () => track('business_register_click', { from });

function HeroVisual() {
  // A gentle loop of incoming payments over the QR stand.
  const feed = [
    ['Asha J.', 'M-Pesa', '25,000'],
    ['Baraka M.', 'Bank app', '8,500'],
    ['Neema K.', 'Airtel Money', '42,000'],
    ['Juma S.', 'PixPesa ID', '15,000'],
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % feed.length), 2600);
    return () => clearInterval(t);
  }, []);
  const [name, via, amount] = feed[i];
  return (
    <div className="hero-visual">
      <div className="hero-glow" aria-hidden="true" />
      <img className="hero-stand" src={qrStand} alt="PixPesa All in One QR stand on a shop counter" width="900" height="900" />
      <div className="float-card float-paid" key={i}>
        <span className="float-ic"><Icon name="check" size={18} /></span>
        <div>
          <strong>TZS {amount} received</strong>
          <small>{name} · {via}</small>
        </div>
      </div>
      <div className="float-card float-sound">
        <Icon name="sound" size={18} />
        <span>"Umepokea shilingi {amount}"</span>
      </div>
    </div>
  );
}

export default function Home({ onWaitlist }) {
  const from = cheapest(usePlans());
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pill"><span className="dot" /> Recognized by the Bank of Tanzania</span>
            <h1>One QR.<br />Every way to <em>pay you.</em></h1>
            <p className="lead">PixPesa lets your business accept mobile money, bank and PixPesa payments in one place, then run sales, invoices, stock and payouts from one simple portal.</p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href={BUSINESS_REGISTER} onClick={goRegister('hero')}>
                Open a business account <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-ghost btn-lg" href={BUSINESS_LOGIN} onClick={() => track('business_login_click', { from: 'hero' })}>Sign in</a>
            </div>
            <ul className="hero-ticks">
              {from && <li><Icon name="check" size={16} /> From {tzs(from.price)} a {per(from.period_days)}</li>}
              <li><Icon name="check" size={16} /> Works with every wallet</li>
              <li><Icon name="check" size={16} /> Real-time alerts</li>
            </ul>
          </div>
          <HeroVisual />
        </div>
        <div className="wrap networks">
          <span className="networks-label">Your customers pay with</span>
          <div className="networks-row">{NETWORKS.map((n) => <span key={n}>{n}</span>)}</div>
        </div>
      </section>

      <section className="section" id="business">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">PixPesa Business</p>
            <h2>Everything your shop needs to get paid and grow.</h2>
            <p className="muted">One portal for the till, the back office and the books. Use what you need today and switch on more as you grow.</p>
          </div>
          <div className="bento">
            {FEATURES.map((f) => (
              <article key={f.title} className={`tile${f.wide ? ' tile-wide' : ''}`}>
                <span className="tile-ic"><Icon name={f.icon} size={22} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                {f.tags && <div className="tags">{f.tags.map((t) => <span key={t}>{t}</span>)}</div>}
              </article>
            ))}
          </div>
          <div className="also">
            <span>Also included</span>
            {['Team roles', 'Multiple branches', 'Purchasing', 'Scan & Pay', 'Promotions', 'Webhooks'].map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </section>

      <section className="section biz-app">
        <div className="wrap split split-app">
          <div className="app-shot app-shot-biz">
            <img src={businessApp} alt="The PixPesa Business app home screen" width="523" height="1000" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">PixPesa Business app</p>
            <h2>Your shop, in your pocket.</h2>
            <p className="muted">The same account on your phone. See today's collection live, take a payment in seconds and know when your next payout lands.</p>
            <ul className="list">
              {BUSINESS_APP.map(([icon, text]) => <li key={text}><Icon name={icon} size={18} /> {text}</li>)}
            </ul>
            <a className="btn btn-primary" href={BUSINESS_REGISTER} onClick={goRegister('business_app')}>Open business account <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap steps-wrap">
          <div className="section-head">
            <p className="eyebrow">Get started</p>
            <h2>Live in three steps.</h2>
          </div>
          <ol className="steps">
            {STEPS.map(([title, text], n) => (
              <li key={title}>
                <span className="step-n">{n + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <a className="btn btn-primary" href={BUSINESS_REGISTER} onClick={goRegister('steps')}>Start now <Icon name="arrow" size={18} /></a>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="wrap pricing">
          <div className="section-head">
            <p className="eyebrow">Pricing</p>
            <h2>Simple plans. Grow when you're ready.</h2>
            <p className="muted">Everything your business needs to get paid, in one monthly price. No hardware needed to begin: your QR works from day one.</p>
          </div>
          <Pricing />
        </div>
      </section>

      <section className="section section-dark" id="soundbox">
        <div className="wrap split">
          <div>
            <p className="eyebrow eyebrow-lime">Soundbox</p>
            <h2>Hear every payment.</h2>
            <p className="lead-dark">The PixPesa Soundbox announces each payment out loud as it lands. Your cashier keeps serving, and you know it's real money, not a fake SMS.</p>
            <ul className="list-dark">
              <li><Icon name="sound" size={18} /> Voice alerts in Kiswahili or English</li>
              <li><Icon name="qr" size={18} /> Pairs with your shop QR and till</li>
              <li><Icon name="shield" size={18} /> Confirmed by PixPesa, not by screenshots</li>
            </ul>
            <a className="btn btn-lime" href="/#contact" onClick={() => track('soundbox_interest')}>Order a Soundbox <Icon name="arrow" size={18} /></a>
          </div>
          <div className="split-media">
            <img src={soundbox} alt="PixPesa Soundbox and its box" width="1100" height="733" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section" id="developers">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Merchant API</p>
            <h2>Take PixPesa payments in your own app.</h2>
            <p className="muted">Send a payment request to a customer's PixPesa ID or phone number. They approve it in their app, and your server gets a webhook. Keys live in your Business portal.</p>
            <ul className="list">
              <li><Icon name="check" size={18} /> Simple REST API with idempotency keys</li>
              <li><Icon name="check" size={18} /> Signed webhooks when a request is paid, declined or expires</li>
              <li><Icon name="check" size={18} /> Same balance and reports as your shop</li>
            </ul>
            <a className="btn btn-primary" href={BUSINESS_REGISTER} onClick={goRegister('developers')}>Get API keys <Icon name="arrow" size={18} /></a>
          </div>
          <pre className="code" aria-label="Example API request"><code>
<span className="c-dim">// Ask a customer to pay TZS 25,000</span>{'\n'}
<span className="c-key">POST</span> /api/merchant/v1/payment-requests{'\n'}
<span className="c-dim">Authorization: Bearer pk_live_…</span>{'\n'}
<span className="c-dim">Idempotency-Key: order-1042</span>{'\n\n'}
{'{'}{'\n'}
{'  '}<span className="c-prop">"pixpesa_id"</span>: <span className="c-str">"asha@pixpesa"</span>,{'\n'}
{'  '}<span className="c-prop">"amount"</span>: <span className="c-num">25000</span>,{'\n'}
{'  '}<span className="c-prop">"reference"</span>: <span className="c-str">"order-1042"</span>,{'\n'}
{'  '}<span className="c-prop">"note"</span>: <span className="c-str">"2x Chips mayai"</span>{'\n'}
{'}'}{'\n\n'}
<span className="c-ok">201 Created</span>  <span className="c-dim">→ status: "pending"</span>
          </code></pre>
        </div>
      </section>

      <section className="section section-tint" id="personal">
        <div className="wrap">
          <div className="split split-app personal-head">
            <div className="app-shot">
              <img src={appShot} alt="The PixPesa personal app home screen" width="593" height="1200" loading="lazy" />
            </div>
            <div>
              <p className="eyebrow">PixPesa Personal</p>
              <h2>Your money, all in one app.</h2>
              <p className="muted">PixPesa Personal brings your bank accounts, payments and bills together. Your PixPesa ID, like <b>asha@pixpesa</b>, is all anyone needs to pay you.</p>
              <div className="personal-grid">
                {PERSONAL.map((f) => (
                  <div key={f.title} className="mini">
                    <span className="mini-ic"><Icon name={f.icon} size={18} /></span>
                    <div><strong>{f.title}</strong><p>{f.text}</p></div>
                  </div>
                ))}
              </div>
              <div className="hero-ctas">
                <button className="btn btn-dark" type="button" onClick={onWaitlist}><Icon name="phone" size={18} /> Get early access</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="wrap trust-row">
          <div className="trust-item">
            <Icon name="shield" size={26} />
            <div><strong>Recognized by the Bank of Tanzania</strong><span>For our work on interoperable payments.</span></div>
          </div>
          <div className="trust-item">
            <img src={nmbLogo} alt="NMB Bank" width="84" height="50" loading="lazy" />
            <div><strong>Partnered with NMB Bank</strong><span>Building the future of payments together.</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-wrap">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Questions, answered.</h2>
          </div>
          <div className="faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<Icon name="plus" size={18} /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band-wrap">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Start getting paid with PixPesa today.</h2>
              <p>Open your business account online in minutes.</p>
            </div>
            <div className="cta-band-btns">
              <a className="btn btn-lime btn-lg" href={BUSINESS_REGISTER} onClick={goRegister('band')}>Open business account</a>
              <a className="btn btn-outline-light btn-lg" href={BUSINESS_LOGIN} onClick={() => track('business_login_click', { from: 'band' })}>Sign in</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap split contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Talk to a person.</h2>
            <p className="muted">Questions about accounts, Soundbox orders, the API or partnerships. We reply within one business day.</p>
            <div className="contact-ways">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><Icon name="chat" /> <span><strong>WhatsApp</strong>+255 764 431 337</span></a>
              <a href={`mailto:${EMAIL}`}><Icon name="mail" /> <span><strong>Email</strong>{EMAIL}</span></a>
              <div><Icon name="pin" /> <span><strong>Office</strong>{ADDRESS}</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
