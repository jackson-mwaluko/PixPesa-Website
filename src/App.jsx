import { useEffect } from 'react';
import logo from './assets/logo.png';
import pack from './assets/soundbox-pack.jpg';
import qr from './assets/qr-stand.jpg';
import appShot from './assets/app-dashboard.png';
import nmbLogo from './assets/nmb-logo.png';
import Footer from './components/Footer.jsx';
import initSite from './site.js';
import './index.css';

export default function App() {
  useEffect(() => { initSite(); }, []);
  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <div className="brand" data-nav="home">
            <img className="brand-logo" src={logo} alt="PixPesa logo" />
            Pix<b>Pesa</b>
          </div>
          <div className="nav-links">
            <a data-nav="solutions" style={{ cursor: 'pointer' }}>Solutions</a>
            <a data-nav="products" style={{ cursor: 'pointer' }}>Products</a>
            <a data-nav="pricing" style={{ cursor: 'pointer' }}>Pricing</a>
            <a data-nav="developers" style={{ cursor: 'pointer' }}>Developers</a>
            <a data-nav="contact" style={{ cursor: 'pointer' }}>Contact</a>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" id="themeBtn" aria-label="Toggle theme">
              <svg id="iconMoon" viewBox="0 0 24 24" fill="none"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <a className="btn btn-ghost sm business-portal-link" href="https://business.pixpesa.com/login" target="_blank" rel="noopener noreferrer">Business Portal</a>
            <button className="btn btn-primary sm nav-cta" data-waitlist>Join Waitlist</button>
            <button className="hamburger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>
      <div className="mobile-menu" id="mobileMenu">
        <a data-nav="home" className="active">Home</a>
        <a data-nav="solutions">Solutions</a>
        <a data-nav="products">Products</a>
        <a data-nav="pricing">Pricing</a>
        <a data-nav="developers">Developers</a>
        <a data-nav="security">Security</a>
        <a data-nav="about">About</a>
        <a data-nav="blog">Blog</a>
        <a data-nav="contact">Contact</a>
        <a href="https://business.pixpesa.com/login" target="_blank" rel="noopener noreferrer">Business Portal Login</a>
        <button className="btn btn-primary lg" data-waitlist style={{"marginTop": "12px"}}>Join Waitlist</button>
      </div>
      
      <main id="app">
      
      
      <section className="page active" id="page-home">
      
        <div className="hero">
          <div className="hero-bg"><div className="orb orb-1"></div><div className="orb orb-2"></div></div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal">Payment Interoperability Platform</span>
              <h1 className="reveal d1">Connect Once.<br /><span className="grad-text">Reach Every</span><br />Payment Network.</h1>
              <p className="sub reveal d2">PixPesa enables banks, fintechs, merchants, and institutions to connect to multiple payment networks through a single integration — mobile money, banks, TIPS, government systems and digital wallets.</p>
              <div className="hero-cta reveal d3">
                <button className="btn btn-primary lg" data-waitlist>Join Waitlist
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="btn btn-ghost lg" data-nav="contact">Request Demo</button>
              </div>
              <div className="trust-row reveal d4">
                <span className="lbl">Built for</span>
                <span className="chip"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>TIPS Ready</span>
                <span className="chip"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>PCI-DSS Aligned</span>
                <span className="chip"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>ISO 27001</span>
              </div>
            </div>
      
            <div className="hero-visual reveal d2">
              <div className="switchboard">
                <svg viewBox="0 0 400 400" aria-label="PixPesa interoperability network">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6C63FF"/><stop offset="1" stopColor="#9B8FFF"/></linearGradient>
                    <radialGradient id="core" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#9B8FFF"/><stop offset="1" stopColor="#6C63FF"/></radialGradient>
                  </defs>
                  
                  <g stroke="url(#g1)" strokeWidth="1.6" opacity=".55" fill="none">
                    <path id="l1" d="M200 200 L80 70"/>
                    <path id="l2" d="M200 200 L330 80"/>
                    <path id="l3" d="M200 200 L350 210"/>
                    <path id="l4" d="M200 200 L320 330"/>
                    <path id="l5" d="M200 200 L120 340"/>
                    <path id="l6" d="M200 200 L55 200"/>
                  </g>
                  <g className="dash" stroke="#6C63FF" strokeWidth="1.6" opacity=".9" fill="none">
                    <path d="M200 200 L80 70"/><path d="M200 200 L330 80"/><path d="M200 200 L350 210"/>
                    <path d="M200 200 L320 330"/><path d="M200 200 L120 340"/><path d="M200 200 L55 200"/>
                  </g>
                  
                  <circle r="4" fill="#FF7A5C"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#l1"/></animateMotion></circle>
                  <circle r="4" fill="#22C55E"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#l2"/></animateMotion></circle>
                  <circle r="4" fill="#FFB347"><animateMotion dur="2.7s" repeatCount="indefinite"><mpath href="#l3"/></animateMotion></circle>
                  <circle r="4" fill="#6C63FF"><animateMotion dur="3.3s" repeatCount="indefinite"><mpath href="#l4"/></animateMotion></circle>
                  <circle r="4" fill="#9B8FFF"><animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#l5"/></animateMotion></circle>
                  <circle r="4" fill="#FF7A5C"><animateMotion dur="2.9s" repeatCount="indefinite"><mpath href="#l6"/></animateMotion></circle>
                  
                  <g className="sb-node" font-family="Inter" font-size="9" font-weight="600">
                    <g transform="translate(80,70)"><circle r="26" fill="#161B26" stroke="#252D3D"/><text text-anchor="middle" y="-1" fill="#fff">Banks</text><text text-anchor="middle" y="11" fill="#8892A4" font-size="7">30+</text></g>
                    <g transform="translate(330,80)"><circle r="26" fill="#161B26" stroke="#252D3D"/><text text-anchor="middle" y="-1" fill="#fff">Mobile</text><text text-anchor="middle" y="11" fill="#8892A4" font-size="7">Money</text></g>
                    <g transform="translate(350,210)"><circle r="26" fill="#161B26" stroke="#252D3D"/><text text-anchor="middle" y="2" fill="#fff">TIPS</text></g>
                    <g transform="translate(320,330)"><circle r="26" fill="#161B26" stroke="#252D3D"/><text text-anchor="middle" y="2" fill="#fff">Wallets</text></g>
                    <g transform="translate(120,340)"><circle r="26" fill="#161B26" stroke="#252D3D"/><text text-anchor="middle" y="-1" fill="#fff">Gov't</text><text text-anchor="middle" y="11" fill="#8892A4" font-size="7">GePG</text></g>
                    <g transform="translate(55,200)"><circle r="26" fill="#161B26" stroke="#252D3D"/><text text-anchor="middle" y="2" fill="#fff">Merchants</text></g>
                  </g>
                  
                  <g className="sb-core">
                    <circle cx="200" cy="200" r="46" fill="url(#core)"/>
                    <circle cx="200" cy="200" r="46" fill="none" stroke="#9B8FFF" strokeWidth="1" opacity=".6"><animate attributeName="r" values="46;62;46" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;0;.6" dur="3s" repeatCount="indefinite"/></circle>
                    <path d="M188 200h10m0 0 6-6m-6 6 6 6M202 200h10" transform="translate(-5,0)" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <text x="200" y="232" text-anchor="middle" fill="#fff" font-family="Sora" font-size="11" font-weight="700">PixPesa</text>
                  </g>
                </svg>
                <div className="live-card">
                  <div className="top"><span>LIVE TRANSACTIONS</span><span className="live-dot"></span></div>
                  <div id="txFeed"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="strip">
          <div className="wrap">
            <div className="lbl">One platform across Tanzania's payment ecosystem</div>
            <div style={{"overflow": "hidden"}}>
              <div className="marquee">
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Commercial Banks</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>Mobile Money</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>TIPS</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M2 10h20M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/></svg>Card Networks</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Government (GePG)</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>Digital Wallets</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>SACCOs &amp; MFIs</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v15H6V2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Merchants</span>
                
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Commercial Banks</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/></svg>Mobile Money</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>TIPS</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M2 10h20M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/></svg>Card Networks</span>
                <span className="rail"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Government (GePG)</span>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section tight">
          <div className="wrap">
            <div className="stats">
              <div className="stat reveal"><span className="ico"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><div className="num" data-count="6" data-suffix="+">0</div><div className="lbl">Mobile Money Networks</div></div>
              <div className="stat reveal d1"><span className="ico"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></span><div className="num" data-count="30" data-suffix="+">0</div><div className="lbl">Banks Connected</div></div>
              <div className="stat reveal d2"><span className="ico"><svg viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div className="num" data-count="50" data-suffix="M+">0</div><div className="lbl">Transactions Processed</div></div>
              <div className="stat reveal d3"><span className="ico"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div className="num" data-count="99.99" data-suffix="%">0</div><div className="lbl">System Availability</div></div>
            </div>
            <p style={{"textAlign": "center", "color": "var(--subtext)", "fontSize": "12.5px", "marginTop": "18px", "fontFamily": "'JetBrains Mono',monospace"}}>* Indicative platform capacity figures</p>
          </div>
        </div>

        {/* PixPesa ID — pay by simple address */}
        <div className="section">
          <div className="wrap">
            <div className="pid-grid">
              <div>
                <span className="eyebrow" data-i18n="pid_eyebrow">Pay by PixPesa ID</span>
                <h2 style={{"margin": "14px 0"}} data-i18n="pid_title">One simple ID. <span className="grad-text">No account numbers.</span></h2>
                <p className="lead" data-i18n="pid_lead">Forget long account numbers and switching between apps. Every PixPesa user and merchant gets a memorable ID like <b style={{"color": "var(--text)"}}>mamagrace@pixpesa</b> — send, request and receive across any bank or wallet with just that.</p>
                <div className="pid-feats">
                  <div className="pf"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><div><b data-i18n="pid_f1t">Send to anyone, instantly</b><span data-i18n="pid_f1d">Pay any PixPesa ID over TIPS in real time — bank to wallet, wallet to bank, it just works.</span></div></div>
                  <div className="pf"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><div><b data-i18n="pid_f2t">Request-to-pay</b><span data-i18n="pid_f2d">Send a collect request to a customer's ID; they approve and funds settle to you automatically.</span></div></div>
                  <div className="pf"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><div><b data-i18n="pid_f3t">AutoPay mandates</b><span data-i18n="pid_f3d">Approve recurring mandates once for rent, bills or subscriptions — no re-entering details each month.</span></div></div>
                </div>
              </div>
              <div className="pid-demo reveal">
                <div className="pid-row"><span className="at">@</span><span className="v">mamagrace@pixpesa</span><span className="tag">Merchant</span></div>
                <div className="pid-row"><span className="at">@</span><span className="v">clintony@pixpesa</span><span className="tag">Personal</span></div>
                <div className="pid-row"><span className="at">@</span><span className="v">dukapay@pixpesa</span><span className="tag">Business</span></div>
                <button className="btn btn-primary lg" data-waitlist style={{"width": "100%", "marginTop": "6px"}}>Claim your PixPesa ID</button>
                <p style={{"textAlign": "center", "color": "var(--subtext)", "fontSize": "12px", "marginTop": "12px"}}>Works across every bank, wallet and mobile money network.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inclusion — built for all of Tanzania */}
        <div className="section" style={{"background": "var(--surface)"}}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow" data-i18n="incl_eyebrow">Built for all of Tanzania</span>
              <h2 data-i18n="incl_title">Payments that reach <span className="grad-text">everyone</span></h2>
              <p data-i18n="incl_lead">From smartphones in Dar es Salaam to feature phones up-country — financial inclusion is built into the platform, not bolted on.</p>
            </div>
            <div className="incl-grid">
              <div className="incl reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3 data-i18n="incl_1t">Feature-phone USSD</h3><p data-i18n="incl_1d">No smartphone needed. Pay and get paid on any phone with a simple <code>*150*88#</code> menu.</p></div>
              <div className="incl reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 5h18M3 12h18M3 19h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3 data-i18n="incl_2t">English &amp; Swahili</h3><p data-i18n="incl_2d">Every screen, receipt and Soundbox announcement works in Kiswahili and English out of the box.</p></div>
              <div className="incl reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3 data-i18n="incl_3t">Agent network</h3><p data-i18n="incl_3d">Cash-in and cash-out through a growing network of PixPesa agents in every region.</p></div>
              <div className="incl reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h6m0 0 4-4m-4 4 4 4M13 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3 data-i18n="incl_4t">Offline-tolerant</h3><p data-i18n="incl_4d">Payments queue and confirm reliably even on patchy connectivity, so a sale is never lost.</p></div>
              <div className="incl reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3 data-i18n="incl_5t">Low, transparent fees</h3><p data-i18n="incl_5d">Built on TIPS for low-cost transfers, with pricing that works for small merchants and SACCOs.</p></div>
              <div className="incl reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3 data-i18n="incl_6t">SACCOs &amp; cooperatives</h3><p data-i18n="incl_6d">Bring savings groups and microfinance into the digital economy with shared, auditable rails.</p></div>
            </div>
          </div>
        </div>
      
        
        <div className="section">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Platform Capabilities</span>
              <h2>Everything you need to move money <span className="grad-text">anywhere</span></h2>
              <p>One integration unlocks an entire ecosystem of rails, with the security and reliability enterprises require.</p>
            </div>
            <div className="fgrid">
              <div className="fcard reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3M9 9l6 6m0-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Single API Integration</h3><p>Integrate once and reach every connected network. No more building and maintaining dozens of point-to-point links.</p></div>
              <div className="fcard reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Mobile Money Interoperability</h3><p>Send and receive across all major mobile money operators in real time, with unified status and reconciliation.</p></div>
              <div className="fcard reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3>Bank Connectivity</h3><p>Direct rails to commercial banks for collections, payouts, and account-to-account transfers at scale.</p></div>
              <div className="fcard reveal d3"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>TIPS Integration</h3><p>Native readiness for the Tanzania Instant Payment System for instant, low-cost interbank settlement.</p></div>
              <div className="fcard reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3>Real-Time Transactions</h3><p>Sub-second processing with live status callbacks so your customers are never left waiting.</p></div>
              <div className="fcard reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Secure Infrastructure</h3><p>Bank-grade encryption, tokenization, and isolated environments protect every transaction end to end.</p></div>
              <div className="fcard reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M11 8v3l2 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Fraud Monitoring</h3><p>Real-time risk scoring and anomaly detection flag suspicious activity before money moves.</p></div>
              <div className="fcard reveal d3"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="m8 17-5-5 5-5m8 0 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Developer-Friendly APIs</h3><p>Clean REST APIs, SDKs, webhooks, and a full sandbox so your team ships in days, not months.</p></div>
            </div>
          </div>
        </div>
      
        
        <div className="section" style={{"background": "var(--surface)"}}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">How It Works</span>
              <h2>From integration to <span className="grad-text">settlement</span> in three steps</h2>
            </div>
            <div className="steps">
              <div className="step reveal"><span className="n">CONNECT</span><h3>Integrate the PixPesa API</h3><p>Drop in one set of credentials and connect your application to the full network through a single, well-documented API.</p></div>
              <div className="step reveal d1"><span className="n">ROUTE</span><h3>We route intelligently</h3><p>PixPesa selects the optimal rail for every transaction — bank, mobile money, TIPS or wallet — and handles the protocols.</p></div>
              <div className="step reveal d2"><span className="n">SETTLE</span><h3>Reconcile &amp; settle</h3><p>Funds settle in real time, with automated reconciliation and a unified ledger across every network you touch.</p></div>
            </div>
          </div>
        </div>

        {/* App showcase */}
        <div className="section appshow">
          <div className="wrap">
            <div className="app-grid">
              <div className="app-frame reveal">
                <img src={appShot} alt="PixPesa mobile app home screen showing balance, payments and bills" loading="lazy" />
              </div>
              <div>
                <span className="eyebrow" data-i18n="app_eyebrow">The PixPesa App</span>
                <h2 style={{"margin": "14px 0"}} data-i18n="app_title">Your whole money life, <span className="grad-text">in one app</span></h2>
                <p className="lead" data-i18n="app_lead">Scan to pay, send money, pay bills and manage balances across every linked account — banks and wallets together. Built for everyday Tanzania, in Swahili and English.</p>
                <div className="app-feats">
                  <div className="af"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><path d="M14 14h6v6h-6z" stroke="currentColor" strokeWidth="2"/></svg><div><b data-i18n="app_f1t">Scan &amp; Pay</b><span data-i18n="app_f1d">Any QR, any network</span></div></div>
                  <div className="af"><svg viewBox="0 0 24 24" fill="none"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><div><b data-i18n="app_f2t">Send Money</b><span data-i18n="app_f2d">To any ID or number</span></div></div>
                  <div className="af"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><div><b data-i18n="app_f3t">Bank Transfer</b><span data-i18n="app_f3d">Account to account</span></div></div>
                  <div className="af"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg><div><b data-i18n="app_f4t">Bills &amp; Airtime</b><span data-i18n="app_f4d">Pay in seconds</span></div></div>
                </div>
                <div className="stores">
                  <a className="store-badge" data-waitlist><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.9 13 11.3l2.6-2.6L5.2 1.3a1.3 1.3 0 0 0-1.6.6Zm-.7 1.3a1.3 1.3 0 0 0-.1.5v16.6c0 .2 0 .4.1.5L11.5 12 2.9 3.2Zm14 6.3 2.9 1.7c1 .6 1 1.9 0 2.5l-2.9 1.7-2.9-2.9 2.9-3Zm-2 3.8L5.2 22.7a1.3 1.3 0 0 0 1.6.6l8.7-5-2.6-2.7Z"/></svg><span><small>Get it on</small><b>Google Play</b></span></a>
                  <a className="store-badge" data-waitlist><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 1.6c.1 1-.3 2-1 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.7-.8 1.8-1.4 2.7-1.4ZM19 17c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.6 3.1-1.3 0-1.7-.8-3.5-.8s-2.2.8-3.5.9c-1.5 0-2.6-1.5-3.5-2.9-2.5-3.9-2.7-8.4-1.2-10.8 1-1.7 2.7-2.7 4.3-2.7 1.5 0 2.5.9 3.7.9 1.2 0 1.9-.9 3.7-.9 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4.9 7.3Z"/></svg><span><small>Download on the</small><b>App Store</b></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Customer Benefits</span>
              <h2>Why teams build on PixPesa</h2>
            </div>
            <div className="benefits">
              <div className="benefit reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h4>Reduced Integration Costs</h4><p>One build replaces many.</p></div>
              <div className="benefit reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Faster Market Entry</h4><p>Launch in days.</p></div>
              <div className="benefit reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h4>Higher Transaction Volumes</h4><p>Reach every customer.</p></div>
              <div className="benefit reveal d3"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Better Experience</h4><p>Seamless for users.</p></div>
              <div className="benefit reveal d4"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Real-Time Settlement</h4><p>Money moves instantly.</p></div>
            </div>
          </div>
        </div>
      
        
        {/* Partnership — NMB Bank + Bank of Tanzania */}
        <div className="partner-band">
          <div className="wrap">
            <div className="partner-inner">
              <span className="pl" data-i18n="partner_label">In partnership with</span>
              <span className="nmb-logo"><img src={nmbLogo} alt="NMB Bank — Close to You" /></span>
              <span className="bot-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Recognized by the Bank of Tanzania</span>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="wrap">
            <div className="partner-feature">
              <div>
                <span className="eyebrow" data-i18n="nmb_eyebrow">Banking Partner</span>
                <h2 style={{"margin": "14px 0"}} data-i18n="nmb_title">Building the future of payments with <span className="grad-text">NMB Bank</span></h2>
                <p className="lead" data-i18n="nmb_lead">PixPesa partners with NMB Bank — one of Tanzania's largest banks — to power secure, bank-grade settlement and reach customers and merchants in every region. Together we're advancing truly interoperable payments for the whole country.</p>
                <div className="hero-cta" style={{"marginTop": "8px"}}><button className="btn btn-primary" data-nav="contact">Become a partner</button><button className="btn btn-ghost" data-nav="about">Our story</button></div>
              </div>
              <div className="partner-card reveal">
                <div className="partner-lockup">
                  <img className="brand-logo" src={logo} alt="PixPesa" style={{"height": "44px"}} />
                  <span className="x">×</span>
                  <span className="big-nmb">NMB</span>
                </div>
                <p style={{"color": "var(--subtext)", "fontSize": "13.5px", "marginTop": "16px"}}>One connection, backed by a bank Tanzania trusts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section" style={{"background": "var(--surface)"}}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Trusted by Builders</span>
              <h2>What partners say about PixPesa</h2>
            </div>
            <div className="tcards">
              <div className="tcard reveal">
                <div className="stars">★★★★★</div>
                <blockquote>"We replaced four separate payment integrations with a single PixPesa connection. Our settlement times dropped from days to seconds, and engineering hours fell with them."</blockquote>
                <div className="who"><div className="avatar" style={{"background": "linear-gradient(135deg,#6C63FF,#9B8FFF)"}}>AB</div><div><div className="nm">Asha Bakari</div><div className="rl">Head of Payments, Azimio Bank</div></div></div>
              </div>
              <div className="tcard reveal d1">
                <div className="stars">★★★★★</div>
                <blockquote>"PixPesa's sandbox and SDKs got us live in under two weeks. The interoperability layer just works — across every mobile money operator we needed."</blockquote>
                <div className="who"><div className="avatar" style={{"background": "linear-gradient(135deg,#FF7A5C,#FFB347)"}}>JM</div><div><div className="nm">Juma Mushi</div><div className="rl">CTO, DukaPay Fintech</div></div></div>
              </div>
              <div className="tcard reveal d2">
                <div className="stars">★★★★★</div>
                <blockquote>"Collections used to be our biggest headache. Now customers pay us from any bank or wallet, and reconciliation is automatic. Game changer for our shops."</blockquote>
                <div className="who"><div className="avatar" style={{"background": "linear-gradient(135deg,#22C55E,#6C63FF)"}}>NK</div><div><div className="nm">Neema Kileo</div><div className="rl">Founder, Tembo Retail Group</div></div></div>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section">
          <div className="wrap">
            <div className="faq-layout">
              <div className="faq-aside reveal">
                <span className="eyebrow">FAQ</span>
                <h2>Questions, answered</h2>
                <p className="lead">Everything you need to know about connecting to PixPesa. Can't find your answer? Our team is one message away.</p>
                <div className="faq-help">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M21 12a8 8 0 0 1-8 8H7l-4 3v-7a8 8 0 0 1 8-9h2a8 8 0 0 1 8 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div>
                  <h4>Still have questions?</h4>
                  <p>Talk to our team about integration, partnerships or pricing — we usually reply within a business day.</p>
                  <button className="btn btn-primary sm" data-nav="contact">Contact us</button>
                </div>
              </div>
              <div className="faq" id="faqHome"></div>
            </div>
          </div>
        </div>
      
        
        <div className="section tight">
          <div className="wrap">
            <div className="cta-band reveal">
              <h2>One connection. Every payment.</h2>
              <p>See how PixPesa can simplify your payment infrastructure. Book a personalized demo with our team.</p>
              <div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}>
                <button className="btn btn-primary lg" data-nav="contact">Request Demo</button>
                <button className="btn btn-line lg" data-nav="contact">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      
      </section>
      
      <section className="page" id="page-solutions">
        <div className="hero" style={{"paddingBottom": "40px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".35"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "760px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Solutions</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Built for every player in the <span className="grad-text">payment chain</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Whether you move money, accept it, or govern it — PixPesa gives you one connection to the entire ecosystem.</p>
          </div>
        </div>
      
        <div className="section" style={{"paddingTop": "30px"}}>
          <div className="wrap" style={{"display": "flex", "flexDirection": "column", "gap": "90px"}}>
      
            
            <div className="split reveal">
              <div className="split-media"><img loading="lazy" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop" alt="Banking team reviewing transactions" /><span className="tag"><span className="live-dot"></span>Bank rails • live</span></div>
              <div>
                <span className="eyebrow">For Banks</span>
                <h2>Extend your reach beyond your branches</h2>
                <p className="lead">Plug your core banking system into mobile money, TIPS, wallets and merchant networks without building each integration from scratch.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Account-to-wallet transfers</b> — let customers move funds to any mobile money account instantly.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Real-time collections</b> — receive payments from every channel into one settlement view.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>TIPS-ready settlement</b> — instant interbank transfers with automated reconciliation.</span></div>
                </div>
                <button className="btn btn-line" data-nav="contact">Talk to our bank team</button>
              </div>
            </div>
      
            
            <div className="split rev reveal">
              <div className="split-media"><img loading="lazy" src="https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1200&auto=format&fit=crop" alt="Customer using mobile money" /><span className="tag"><span className="live-dot"></span>Wallet network</span></div>
              <div>
                <span className="eyebrow">For Mobile Money Operators</span>
                <h2>Interoperate with everyone, effortlessly</h2>
                <p className="lead">Open your wallet to banks, merchants, other operators and government systems through a single connection that handles every protocol.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Cross-operator transfers</b> — wallet-to-wallet across networks in real time.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Bank cash-in / cash-out</b> — frictionless funding straight from any bank account.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Merchant acceptance</b> — push your wallet into thousands of checkout points.</span></div>
                </div>
                <button className="btn btn-line" data-nav="contact">Partner with us</button>
              </div>
            </div>
      
            
            <div className="split reveal">
              <div className="split-media"><img loading="lazy" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=1200&auto=format&fit=crop" alt="Fintech developer building on PixPesa" /><span className="tag"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" style={{"color": "var(--accent)"}}><path d="m8 17-5-5 5-5m8 0 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>API-first</span></div>
              <div>
                <span className="eyebrow">For Fintech Companies</span>
                <h2>Ship products, not plumbing</h2>
                <p className="lead">Focus on your product while PixPesa handles the rails. Clean APIs, SDKs and webhooks mean you launch payment features in days.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Embedded payments</b> — collect and disburse from inside your app.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Multi-rail payouts</b> — pay suppliers, agents and customers anywhere.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Wallet infrastructure</b> — issue and manage balances without a banking license burden.</span></div>
                </div>
                <button className="btn btn-line" data-nav="developers">Explore developer tools</button>
              </div>
            </div>
      
            
            <div className="split rev reveal">
              <div className="split-media"><img loading="lazy" src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1200&auto=format&fit=crop" alt="Merchant accepting payments" /><span className="tag"><span className="live-dot"></span>Accepting payments</span></div>
              <div>
                <span className="eyebrow">For Merchants</span>
                <h2>Get paid however your customers want</h2>
                <p className="lead">Accept mobile money, bank transfers, cards and wallets through one checkout, with money settling straight to your account.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Unified checkout</b> — one payment page for every method.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Instant settlement</b> — funds reach your account in real time.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Auto-reconciliation</b> — every payment matched to every order, automatically.</span></div>
                </div>
                <div className="hero-cta">
                  <a className="btn btn-primary" href="https://business.pixpesa.com/login" target="_blank" rel="noopener noreferrer">Open Business Portal</a>
                  <button className="btn btn-line" data-nav="contact">Talk to Sales</button>
                </div>
              </div>
            </div>
      
            
            <div className="reveal" style={{"margin": "18px 0 6px"}}>
              <span className="eyebrow">Merchant Hardware</span>
              <h2 style={{"margin": "14px 0 10px", "maxWidth": "660px"}}>Hear every sale with the PixPesa <span className="grad-text">Sound Box</span> &amp; All-in-One QR</h2>
              <p className="lead" style={{"maxWidth": "700px"}}>Give every counter a Sound Box that announces each payment out loud, and a single All-in-One QR that accepts M-Pesa, Airtel Money, Tigo, Halo and bank — so no customer is ever turned away and no sale is ever missed.</p>
              <div className="showcase">
                <div className="shot"><img loading="lazy" src={pack} alt="PixPesa Sound Box packaging" /><div className="cap"><b>PixPesa Sound Box</b><span>Real-time voice confirmations · interoperable · secure</span></div></div>
                <div className="shot"><img loading="lazy" src={qr} alt="PixPesa All-in-One QR stand for Mama Grace Restaurant" /><div className="cap"><b>All-in-One QR Stand</b><span>One QR for every wallet &amp; bank · Scan to Pay</span></div></div>
              </div>
              <div className="hero-cta" style={{"marginTop": "24px"}}><button className="btn btn-primary" data-nav="pricing">See Sound Box plans</button><button className="btn btn-ghost" data-nav="products">Try the live demo</button></div>
            </div>
      
            
            <div className="split reveal">
              <div className="split-media"><img loading="lazy" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" alt="Government and institutional partnership" /><span className="tag"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" style={{"color": "var(--accent)"}}><path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Compliant by design</span></div>
              <div>
                <span className="eyebrow">For Government Institutions</span>
                <h2>Collect and disburse public funds at scale</h2>
                <p className="lead">Connect government payment systems to every citizen channel — for tax, fees, levies, subsidies and salaries — with full auditability.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>GePG-aligned collections</b> — accept payments from any bank or wallet.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Mass disbursements</b> — pay subsidies and salaries to millions reliably.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Full audit trail</b> — every transaction logged for transparency and compliance.</span></div>
                </div>
                <button className="btn btn-line" data-nav="contact">Engage our public-sector team</button>
              </div>
            </div>
      
            
            <div className="split rev reveal">
              <div className="split-media"><img loading="lazy" src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?q=80&w=1200&auto=format&fit=crop" alt="SACCO and microfinance members" /><span className="tag"><span className="live-dot"></span>Financial inclusion</span></div>
              <div>
                <span className="eyebrow">For SACCOs &amp; Microfinance</span>
                <h2>Modern rails for community finance</h2>
                <p className="lead">Bring digital payments to savings groups, SACCOs and microfinance institutions — so members can deposit, repay and withdraw from any channel.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Digital deposits &amp; repayments</b> — members pay in from mobile money or bank.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Loan disbursement</b> — send funds directly to member wallets.</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><b>Affordable rails</b> — low-cost infrastructure built for inclusion.</span></div>
                </div>
                <button className="btn btn-line" data-nav="contact">Bring your community online</button>
              </div>
            </div>
      
          </div>
        </div>
      
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Find your fit</h2><p>Tell us about your organization and we'll show you exactly how PixPesa connects you to the networks you need.</p><button className="btn btn-primary lg" data-nav="contact">Request a tailored demo</button></div></div></div>
      </section>
      
      <section className="page" id="page-products">
        <div className="hero" style={{"paddingBottom": "30px"}}>
          <div className="hero-bg"><div className="orb orb-2" style={{"opacity": ".35", "right": "-100px", "left": "auto"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "760px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Products</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>A complete <span className="grad-text">payments stack</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Modular products that work together — or on their own — to power collections, payouts, wallets and settlement.</p>
          </div>
        </div>
      
        
        <div className="section tight">
          <div className="wrap">
            <div className="soundbox-wrap reveal">
              <div className="device-stage" id="sbStage">
                <div className="waves"><span className="wave"></span><span className="wave"></span><span className="wave"></span></div>
                <div className="device">
                  <div className="brandrow">
                    <img className="dev-logo" src={logo} alt="P" />
                    PixPesa
                    <span className="led"></span>
                  </div>
                  <div className="screen">
                    <div className="lbl">Payment received</div>
                    <div className="amt" id="sbAmount">TZS 5,000</div>
                    <div className="st"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg> Confirmed &amp; settled</div>
                  </div>
                  <div className="grille">
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                  </div>
                </div>
              </div>
              <div>
                <span className="eyebrow">New · Merchant Hardware</span>
                <h2 style={{"margin": "14px 0"}}>PixPesa Soundbox — <span className="grad-text">hear every payment</span>, instantly</h2>
                <p className="lead">A compact speaker that announces each payment out loud the moment it lands — by mobile money, bank or wallet. No more squinting at a phone or asking customers to show a screenshot. The duka owner just hears “Payment received, five thousand shillings” and keeps serving.</p>
      
                <div style={{"fontSize": "13px", "color": "var(--subtext)", "fontWeight": "600", "marginBottom": "8px"}}>Try it — pick an amount and press play:</div>
                <div className="sb-amounts" id="sbAmounts">
                  <button className="amt-chip" data-amt="TZS 1,000" data-en="one thousand shillings" data-sw="shilingi elfu moja">TZS 1,000</button>
                  <button className="amt-chip sel" data-amt="TZS 5,000" data-en="five thousand shillings" data-sw="shilingi elfu tano">TZS 5,000</button>
                  <button className="amt-chip" data-amt="TZS 25,000" data-en="twenty five thousand shillings" data-sw="shilingi elfu ishirini na tano">TZS 25,000</button>
                  <button className="amt-chip" data-amt="TZS 100,000" data-en="one hundred thousand shillings" data-sw="shilingi laki moja">TZS 100,000</button>
                </div>
                <div className="sb-langs" id="sbLangs">
                  <button className="sb-lang sel" data-lang="en">🔊 English voice</button>
                  <button className="sb-lang" data-lang="sw">🔊 Sauti ya Kiswahili</button>
                </div>
                <button className="btn btn-primary lg" id="sbPlay">
                  <svg viewBox="0 0 24 24" fill="none" style={{"width": "18px", "height": "18px"}}><path d="M8 5v14l11-7L8 5Z" fill="currentColor"/></svg>
                  Simulate payment
                </button>
      
                <div className="usecases" style={{"marginTop": "26px"}}>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Instant audio confirmation across every payment network</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Multi-language voice — English &amp; Swahili out of the box</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>4G + Wi-Fi, all-day battery, built for busy counters</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Cuts payment disputes and lets staff serve hands-free</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section tight">
          <div className="wrap">
            <div className="split reveal" style={{"alignItems": "center"}}>
              <div>
                <span className="eyebrow">Featured</span>
                <h2 style={{"margin": "14px 0"}}>PixPesa Analytics Dashboard</h2>
                <p className="lead">See every transaction across every network in one place. Track volumes, success rates, settlement and reconciliation in real time.</p>
                <div className="usecases">
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Live volume &amp; success-rate monitoring across all rails</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Settlement &amp; reconciliation status at a glance</span></div>
                  <div className="uc"><span className="dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Exportable reports for finance and compliance teams</span></div>
                </div>
              </div>
              <div className="split-media" style={{"aspectRatio": "auto", "background": "linear-gradient(160deg,#161B26,#1E2535)", "padding": "22px"}}>
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "18px"}}>
                  <div><div style={{"fontFamily": "'Sora'", "fontWeight": "700", "fontSize": "15px", "color": "#fff"}}>Transaction Overview</div><div style={{"fontSize": "11px", "color": "#8892A4", "fontFamily": "'JetBrains Mono'"}}>Last 24 hours</div></div>
                  <span className="chip" style={{"background": "rgba(34,197,94,.12)", "borderColor": "rgba(34,197,94,.3)", "color": "#22C55E"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#22C55E", "display": "inline-block"}}></span>All systems live</span>
                </div>
                <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "10px", "marginBottom": "18px"}}>
                  <div style={{"background": "rgba(108,99,255,.08)", "border": "1px solid #252D3D", "borderRadius": "10px", "padding": "12px"}}><div style={{"fontSize": "10px", "color": "#8892A4"}}>Volume</div><div style={{"fontFamily": "'Sora'", "fontWeight": "700", "fontSize": "18px", "color": "#fff"}}>TZS 4.2B</div></div>
                  <div style={{"background": "rgba(108,99,255,.08)", "border": "1px solid #252D3D", "borderRadius": "10px", "padding": "12px"}}><div style={{"fontSize": "10px", "color": "#8892A4"}}>Success</div><div style={{"fontFamily": "'Sora'", "fontWeight": "700", "fontSize": "18px", "color": "#22C55E"}}>99.4%</div></div>
                  <div style={{"background": "rgba(108,99,255,.08)", "border": "1px solid #252D3D", "borderRadius": "10px", "padding": "12px"}}><div style={{"fontSize": "10px", "color": "#8892A4"}}>Avg time</div><div style={{"fontFamily": "'Sora'", "fontWeight": "700", "fontSize": "18px", "color": "#fff"}}>0.8s</div></div>
                </div>
                <svg viewBox="0 0 320 90" style={{"width": "100%", "height": "auto"}}>
                  <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6C63FF" stopOpacity=".4"/><stop offset="1" stopColor="#6C63FF" stopOpacity="0"/></linearGradient></defs>
                  <polyline points="0,70 40,55 80,60 120,40 160,45 200,25 240,32 280,15 320,22" fill="none" stroke="#6C63FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <polygon points="0,70 40,55 80,60 120,40 160,45 200,25 240,32 280,15 320,22 320,90 0,90" fill="url(#ag)"/>
                  <polyline points="0,80 40,72 80,75 120,68 160,70 200,60 240,64 280,55 320,58" fill="none" stroke="#FF7A5C" strokeWidth="2" strokeDasharray="4 4" opacity=".7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section" style={{"paddingTop": "30px"}}>
          <div className="wrap">
            <div className="cards">
              <div className="card reveal"><span className="badge">New</span><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="2"/><path d="M8 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>PixPesa Soundbox</h3><p>A speaker that announces every payment out loud the instant it arrives — multi-language, multi-network, hands-free for merchants.</p><a className="more" data-nav="pricing">See plans <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M2 10h20M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/></svg></div><h3>PixPesa Gateway</h3><p>A unified payment gateway that accepts every method — mobile money, bank, card and wallet — through one checkout.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal d1"><span className="badge">Core</span><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="m8 17-5-5 5-5m8 0 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>PixPesa API Platform</h3><p>The single API that powers it all. REST endpoints, SDKs and webhooks for collections, payouts and balance management.</p><a className="more" data-nav="developers">View docs <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2h9l5 5v15H6V2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Merchant Payments</h3><p>Tools for merchants to accept payments in-store and online, with instant settlement and automatic reconciliation.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/></svg></div><h3>Bill Payments</h3><p>Let customers pay utilities, taxes, fees and subscriptions from any channel, routed to the right biller automatically.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Wallet Infrastructure</h3><p>Issue and manage digital wallets, balances and ledgers — the foundation for any embedded-finance product.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Settlement Engine</h3><p>Real-time, multi-rail settlement with netting and automated payouts so funds reach the right account fast.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M9 11H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-4m-6 0V7a3 3 0 0 1 6 0v4m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3>Reconciliation Platform</h3><p>Automatically match every transaction across every network, flag exceptions, and close your books in minutes.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
              <div className="card reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Analytics Dashboard</h3><p>Real-time visibility into volumes, success rates and settlement, with exportable reports for finance and compliance.</p><a className="more" data-nav="contact">Learn more <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></div>
            </div>
          </div>
        </div>
      
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Build your stack</h2><p>Mix and match the products you need today, and add more as you grow — all on one connection.</p><button className="btn btn-primary lg" data-nav="contact">Request Demo</button></div></div></div>
      </section>
      
      <section className="page" id="page-pricing">
        <div className="hero" style={{"paddingBottom": "20px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".32"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Merchant Subscriptions</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Plans that grow with <span className="grad-text">your business</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto 22px"}}>From a single kiosk to a national chain — accept every payment, hear every sale on a PixPesa Soundbox, and settle on time. No hidden fees.</p>
            <div className="bill-toggle reveal d2">
              <span className="muted" id="lblMonthly" style={{"color": "var(--text)"}}>Monthly</span>
              <span className="switch" id="billSwitch" role="switch" aria-checked="false"><i></i></span>
              <span className="muted" id="lblAnnual">Annual</span>
              <span className="save-pill">Save 2 months</span>
            </div>
          </div>
        </div>
      
        <div className="section" style={{"paddingTop": "24px"}}>
          <div className="wrap">
            <div className="plans">
              
              <div className="plan reveal">
                <div className="pname">Starter</div>
                <div className="pdesc">For new dukas, kiosks and market vendors getting started with digital payments.</div>
                <div className="price">Free</div>
                <div className="per">No monthly fee — pay only when you get paid</div>
                <div className="tx">1.5% per transaction</div>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Accept mobile money &amp; bank payments</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>1 payment link &amp; QR code</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Basic merchant dashboard</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Next-day settlement</li>
                  <li className="off"><svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>PixPesa Soundbox (add-on)</li>
                  <li className="off"><svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>Priority support</li>
                </ul>
                <button className="btn btn-line lg" data-nav="contact">Start free</button>
              </div>
      
              
              <div className="plan featured reveal d1">
                <span className="pop">Most Popular</span>
                <div className="pname">Growth</div>
                <div className="pdesc">For busy shops, restaurants and chains that want a Soundbox and richer tools.</div>
                <div className="price" data-m="25,000" data-a="20,000">TZS <span data-price>25,000</span><small>/mo</small></div>
                <div className="per" id="growthPer">Billed monthly · switch to annual to save</div>
                <div className="tx">1.2% per transaction</div>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Everything in Starter</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg><b style={{"color": "var(--text)"}}>1 PixPesa Soundbox included</b></li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Multiple tills &amp; staff accounts</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Analytics &amp; exportable reports</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Same-day settlement</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Priority support</li>
                </ul>
                <button className="btn btn-primary lg" data-nav="contact">Get Growth</button>
              </div>
      
              
              <div className="plan reveal d2">
                <div className="pname">Enterprise</div>
                <div className="pdesc">For banks, networks and large merchants needing volume pricing &amp; SLAs.</div>
                <div className="price">Custom</div>
                <div className="per">Tailored volume pricing &amp; contracts</div>
                <div className="tx">Negotiated per-transaction rate</div>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Everything in Growth</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Unlimited Soundboxes &amp; tills</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Full API &amp; webhook access</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Dedicated settlement &amp; 99.99% SLA</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Dedicated account manager</li>
                  <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Custom integrations &amp; onboarding</li>
                </ul>
                <button className="btn btn-line lg" data-nav="contact">Talk to sales</button>
              </div>
            </div>
      
            <div className="all-include reveal">
              <span><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>PCI-DSS &amp; bank-grade security</span>
              <span><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h6m0 0 4-4m-4 4 4 4M13 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Every payment network, one connection</span>
              <span><svg viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 1 1-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>Real-time reconciliation</span>
              <span><svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16v12H5.2L4 18V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>Local Tanzania-based support</span>
            </div>
          </div>
        </div>

        {/* Savings calculator */}
        <div className="section tight">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="eyebrow">Savings Estimator</span>
              <h2>See what one connection saves you</h2>
              <p>Integrating each bank and wallet separately is expensive. Estimate what PixPesa saves vs. building and maintaining rails yourself.</p>
            </div>
            <div className="calc reveal">
              <div>
                <div className="field" style={{"marginBottom": "22px"}}>
                  <label>Monthly transaction volume — <span className="rng-val" id="calcVolOut">TZS 50M</span></label>
                  <input type="range" id="calcVol" min="5" max="500" step="5" defaultValue="50" />
                </div>
                <div className="field" style={{"marginBottom": "22px"}}>
                  <label>Payment networks you'd otherwise integrate — <span className="rng-val" id="calcRailsOut">5</span></label>
                  <input type="range" id="calcRails" min="1" max="12" step="1" defaultValue="5" />
                </div>
                <div className="field">
                  <label>Soundboxes deployed — <span className="rng-val" id="calcBoxOut">3</span></label>
                  <input type="range" id="calcBox" min="0" max="50" step="1" defaultValue="3" />
                </div>
                <p style={{"fontSize": "12px", "color": "var(--subtext)", "marginTop": "18px"}}>Estimates only — based on typical integration and maintenance costs avoided. Talk to sales for a precise quote.</p>
              </div>
              <div className="calc-out">
                <div className="save-lbl">Estimated first-year savings</div>
                <div className="save-num" id="calcSave">TZS 0</div>
                <div className="save-row"><span>Integration build avoided</span><span id="calcBuild">TZS 0</span></div>
                <div className="save-row"><span>Annual maintenance avoided</span><span id="calcMaint">TZS 0</span></div>
                <div className="save-row"><span>Faster time-to-market</span><span id="calcTime">—</span></div>
                <button className="btn lg" data-nav="contact" style={{"marginTop": "18px", "background": "#fff", "color": "var(--accent)", "width": "100%", "justifyContent": "center"}}>Get an exact quote</button>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section tight" style={{"paddingTop": "0"}}>
          <div className="wrap">
            <div className="split reveal" style={{"alignItems": "center"}}>
              <div>
                <span className="eyebrow">Add-on</span>
                <h2 style={{"margin": "14px 0"}}>Need extra Soundboxes?</h2>
                <p className="lead">Add a PixPesa Soundbox to any plan for <b style={{"color": "var(--text)"}}>TZS 8,000/month</b> per device, or buy outright. Each one announces payments out loud in English or Swahili — so every counter, till and branch never misses a sale.</p>
                <div className="hero-cta" style={{"marginTop": "8px"}}><button className="btn btn-primary" data-nav="contact">Add Soundboxes</button><button className="btn btn-ghost" data-nav="products">How it works</button></div>
              </div>
              <div className="device-stage" id="sbStage2" style={{"minHeight": "300px"}}>
                <div className="waves"><span className="wave"></span><span className="wave"></span><span className="wave"></span></div>
                <div className="device" style={{"width": "220px"}}>
                  <div className="brandrow"><img className="dev-logo" src={logo} alt="P" />PixPesa<span className="led"></span></div>
                  <div className="screen"><div className="lbl">Payment received</div><div className="amt">TZS 12,500</div><div className="st"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg> Confirmed &amp; settled</div></div>
                  <div className="grille"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Ready to get paid the smart way?</h2><p>Start free in minutes, or talk to our team about Soundboxes and volume pricing for your business.</p><div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}><button className="btn btn-primary lg" data-nav="contact">Request Demo</button><button className="btn btn-line lg" data-nav="contact">Contact Sales</button></div></div></div></div>
      </section>
      
          {/* ============================================================
    DEVELOPERS PAGE
    ============================================================ */}
    <section className="page" id="page-developers">

      <div className="hero" style={{paddingBottom: "30px"}}>
        <div className="hero-bg"><div className="orb orb-1" style={{opacity: ".3"}}></div></div>
        <div className="wrap" style={{position: "relative", zIndex: "1", textAlign: "center", maxWidth: "780px", margin: "0 auto"}}>
          <span className="eyebrow reveal" style={{justifyContent: "center"}}>Developers</span>
          <h1 className="reveal d1" style={{fontSize: "clamp(34px,5vw,56px)", margin: "20px 0"}}>One API to <span className="grad-text">every rail</span></h1>
          <p className="sub reveal d2" style={{margin: "0 auto"}}>Clean REST endpoints, four official SDKs, a full sandbox and webhooks. Go from sign-up to your first live transaction in days.</p>
          <div className="hero-cta reveal d3" style={{justifyContent: "center", marginTop: "26px"}}>
            <button className="btn btn-primary lg" data-nav="contact">Get API keys</button>
            <button className="btn btn-ghost lg" data-nav="contact">Read the docs</button>
          </div>
        </div>
      </div>

      <div className="section" style={{paddingTop: "30px"}}>
        <div className="wrap">
          {/* Quickstart - First row */}
          <div className="dev-grid-top reveal" style={{textAlign: "center"}}>
            <span className="eyebrow" style={{justifyContent: "center"}}>Quickstart</span>
            <h2 style={{fontSize: "clamp(26px,3vw,36px)", margin: "14px 0 22px", textAlign: "center"}}>Initiate a payment in a few lines</h2>
            <div className="dev-list" style={{textAlign: "left"}}>
              <div className="dev-item"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><div><h4>API Overview</h4><p>RESTful, JSON over HTTPS. Predictable resources for collections, payouts, wallets and webhooks.</p></div></div>
              <div className="dev-item"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/></svg></div><div><h4>Authentication</h4><p>Secure bearer tokens with scoped API keys for sandbox and production. Rotate keys anytime.</p></div></div>
              <div className="dev-item"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M22 2 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><div><h4>Sandbox Environment</h4><p>Test against simulated banks and wallets with realistic responses before going live.</p></div></div>
              <div className="dev-item"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 12-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div><h4>SDK Downloads</h4><p>Official libraries for Python, JavaScript, PHP and Flutter, plus community packages.</p></div></div>
            </div>
          </div>

          {/* SDKs & Code Example - Second row */}
          <div className="dev-grid-bottom reveal d1" style={{marginTop: "46px"}}>
            <div className="sdk-grid">
              <div className="sdk" data-code="py"><div className="lg">🐍</div><b>Python</b><span>pip install pixpesa</span></div>
              <div className="sdk" data-code="js"><div className="lg">⬡</div><b>JavaScript</b><span>npm i @pixpesa/node</span></div>
              <div className="sdk" data-code="php"><div className="lg">🐘</div><b>PHP</b><span>composer require pixpesa</span></div>
              <div className="sdk" data-code="dart"><div className="lg">🎯</div><b>Flutter</b><span>flutter pub add pixpesa</span></div>
            </div>

            <div style={{marginTop: "24px"}}>
              <div className="code-tabs">
                <div className="code-tab active" data-code="py">Python</div>
                <div className="code-tab" data-code="js">JavaScript</div>
                <div className="code-tab" data-code="php">PHP</div>
                <div className="code-tab" data-code="dart">Flutter</div>
              </div>
              <div className="code-box">
                <div className="bar"><i style={{background: "#FF4D6A"}}></i><i style={{background: "#FFB347"}}></i><i style={{background: "#22C55E"}}></i><span className="f" id="codeFile">collect.py</span></div>
                <div className="code-pane active" data-code="py"><pre><code><span className="tok-k">import</span> pixpesa

    client = pixpesa.<span className="tok-f">Client</span>(api_key=<span className="tok-s">"sk_live_•••"</span>)

    <span className="tok-c"># Collect from any bank or mobile wallet</span>
    payment = client.collections.<span className="tok-f">create</span>(
        amount=<span className="tok-n">50000</span>,
        currency=<span className="tok-s">"TZS"</span>,
        channel=<span className="tok-s">"mobile_money"</span>,
        account=<span className="tok-s">"+255744000000"</span>,
        reference=<span className="tok-s">"INV-1042"</span>,
    )

    <span className="tok-k">print</span>(payment.status)  <span className="tok-c"># -&gt; "processing"</span></code></pre></div>
                <div className="code-pane" data-code="js"><pre><code><span className="tok-k">import</span> &#123; PixPesa &#125; <span className="tok-k">from</span> <span className="tok-s">"@pixpesa/node"</span>;

    <span className="tok-k">const</span> client = <span className="tok-k">new</span> <span className="tok-f">PixPesa</span>(<span className="tok-s">"sk_live_•••"</span>);

    <span className="tok-c">// Collect from any bank or mobile wallet</span>
    <span className="tok-k">const</span> payment = <span className="tok-k">await</span> client.collections.<span className="tok-f">create</span>(&#123;
      amount: <span className="tok-n">50000</span>,
      currency: <span className="tok-s">"TZS"</span>,
      channel: <span className="tok-s">"mobile_money"</span>,
      account: <span className="tok-s">"+255744000000"</span>,
      reference: <span className="tok-s">"INV-1042"</span>,
    &#125;);

    console.<span className="tok-f">log</span>(payment.status); <span className="tok-c">// "processing"</span></code></pre></div>
                <div className="code-pane" data-code="php"><pre><code><span className="tok-k">use</span> PixPesa\Client;

    <span className="tok-n">$client</span> = <span className="tok-k">new</span> <span className="tok-f">Client</span>(<span className="tok-s">"sk_live_•••"</span>);

    <span className="tok-c">// Collect from any bank or mobile wallet</span>
    <span className="tok-n">$payment</span> = <span className="tok-n">$client</span>-&gt;collections-&gt;<span className="tok-f">create</span>([
      <span className="tok-s">"amount"</span>    =&gt; <span className="tok-n">50000</span>,
      <span className="tok-s">"currency"</span>  =&gt; <span className="tok-s">"TZS"</span>,
      <span className="tok-s">"channel"</span>   =&gt; <span className="tok-s">"mobile_money"</span>,
      <span className="tok-s">"account"</span>   =&gt; <span className="tok-s">"+255744000000"</span>,
      <span className="tok-s">"reference"</span> =&gt; <span className="tok-s">"INV-1042"</span>,
    ]);

    <span className="tok-k">echo</span> <span className="tok-n">$payment</span>-&gt;status; <span className="tok-c">// "processing"</span></code></pre></div>
                <div className="code-pane" data-code="dart"><pre><code><span className="tok-k">import</span> <span className="tok-s">'package:pixpesa/pixpesa.dart'</span>;

    <span className="tok-k">final</span> client = <span className="tok-f">PixPesa</span>(apiKey: <span className="tok-s">'sk_live_•••'</span>);

    <span className="tok-c">// Collect from any bank or mobile wallet</span>
    <span className="tok-k">final</span> payment = <span className="tok-k">await</span> client.collections.<span className="tok-f">create</span>(
      amount: <span className="tok-n">50000</span>,
      currency: <span className="tok-s">'TZS'</span>,
      channel: <span className="tok-s">'mobile_money'</span>,
      account: <span className="tok-s">'+255744000000'</span>,
      reference: <span className="tok-s">'INV-1042'</span>,
    );

    <span className="tok-f">print</span>(payment.status); <span className="tok-c">// processing</span></code></pre></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Start building today</h2><p>Create a sandbox account, grab your keys, and send your first test transaction in minutes.</p><div className="hero-cta" style={{justifyContent: "center", margin: "0"}}><button className="btn btn-primary lg" data-nav="contact">Get API keys</button><button className="btn btn-line lg" data-nav="contact">View full documentation</button></div></div></div></div>
    </section>

      
      <section className="page" id="page-security">
        <div className="hero" style={{"paddingBottom": "30px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".3"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Security &amp; Compliance</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Bank-grade by <span className="grad-text">design</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Security is not a feature — it's the foundation. Every transaction is protected by layered controls built for regulated financial environments.</p>
          </div>
        </div>
      
        <div className="section" style={{"paddingTop": "30px"}}>
          <div className="wrap">
            <div className="sec-grid">
              <div className="fcard reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3>Enterprise Security</h3><p>Defense-in-depth across network, application and data layers, with isolated environments and least-privilege access.</p></div>
              <div className="fcard reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2"/></svg></div><h3>End-to-End Encryption</h3><p>Data is encrypted in transit and at rest using strong, modern ciphers — no plaintext ever crosses the wire.</p></div>
              <div className="fcard reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Tokenization</h3><p>Sensitive account and card data is replaced with tokens, so real credentials are never stored or exposed.</p></div>
              <div className="fcard reveal d3"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Fraud Detection</h3><p>Machine-driven scoring evaluates every transaction in real time and blocks suspicious activity automatically.</p></div>
              <div className="fcard reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Risk Monitoring</h3><p>Continuous monitoring, velocity checks and configurable rules give your team control over risk thresholds.</p></div>
              <div className="fcard reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-4 19l4 1 4-1a10 10 0 0 0-4-20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Data Protection</h3><p>Strict data-handling policies, access logging and retention controls keep personal and financial data safe.</p></div>
              <div className="fcard reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="m9 11 3 3 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Regulatory Compliance</h3><p>Built to align with Bank of Tanzania expectations and international standards for payment systems.</p></div>
              <div className="fcard reveal d3"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M2 9h20M6 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Bank-Grade Infrastructure</h3><p>High-availability, redundant systems engineered for 99.99% uptime and disaster recovery.</p></div>
            </div>
          </div>
        </div>
      
        
        <div className="section" style={{"background": "var(--surface)"}}>
          <div className="wrap">
            <div className="section-head center reveal"><span className="eyebrow">Standards &amp; Certifications</span><h2>Compliant where it counts</h2><p>We hold ourselves to the standards regulators and partners expect from critical payment infrastructure.</p></div>
            <div className="compliance reveal d1">
              <div className="cbadge"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><div>PCI-DSS<br /><span>Card data security</span></div></div>
              <div className="cbadge"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="m8 12 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div>ISO 27001<br /><span>Information security</span></div></div>
              <div className="cbadge"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><div>TIPS<br /><span>Instant payments</span></div></div>
              <div className="cbadge"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><div>BoT-aligned<br /><span>Regulatory engagement</span></div></div>
              <div className="cbadge"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2"/></svg></div><div>GDPR-ready<br /><span>Data protection</span></div></div>
            </div>
          </div>
        </div>
      
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Security questions?</h2><p>Our team is happy to walk through our architecture, controls and compliance posture in detail.</p><button className="btn btn-primary lg" data-nav="contact">Request security overview</button></div></div></div>
      </section>
      
      <section className="page" id="page-about">
        <div className="hero" style={{"paddingBottom": "30px"}}>
          <div className="hero-bg"><div className="orb orb-2" style={{"opacity": ".32", "right": "-100px", "left": "auto"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "800px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Our Story</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Connecting Tanzania's <span className="grad-text">financial future</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>PixPesa was founded on a simple belief: payments should move as freely as people do. We're building the connective tissue between every financial network in Tanzania — and beyond.</p>
          </div>
        </div>
      
        
        <div className="section" style={{"paddingTop": "30px"}}>
          <div className="wrap vm">
            <div className="vm-card reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>Our Vision</h3><p>A Tanzania where every person and business can send and receive money instantly, across any network, without friction — and a continent connected by interoperable, inclusive payment rails.</p></div>
            <div className="vm-card reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="m13 2-3 7h6l-3 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity=".4"/></svg></div><h3>Our Mission</h3><p>To simplify digital payments by enabling seamless interoperability between banks, mobile money, merchants, government systems and financial institutions — through a single, secure connection.</p></div>
          </div>
        </div>
      
        
        <div className="section">
          <div className="wrap">
            <div className="section-head center reveal"><span className="eyebrow">Leadership</span><h2>The founders</h2><p>Engineers and operators building the payment infrastructure Tanzania needs.</p></div>
            <div className="team">
              <div className="tmember reveal"><div className="ava" style={{"background": "linear-gradient(135deg,#6C63FF,#9B8FFF)"}}>JM</div><div><h4>Jackson Peter Mwaluko</h4><div className="role">Co-Founder</div><p>Drives PixPesa's product vision and platform architecture, focused on making interoperability simple and secure.</p></div></div>
              <div className="tmember reveal d1"><div className="ava" style={{"background": "linear-gradient(135deg,#FF7A5C,#FFB347)"}}>GK</div><div><h4>Gwakisa Ponesya Kaminyoge</h4><div className="role">Co-Founder</div><p>Leads partnerships and regulatory engagement, connecting PixPesa with banks, operators and institutions.</p></div></div>
            </div>
          </div>
        </div>
      
        
        <div className="section" style={{"background": "var(--surface)"}}>
          <div className="wrap">
            <div className="section-head center reveal"><span className="eyebrow">What We Stand For</span><h2>Core values</h2></div>
            <div className="values">
              <div className="value reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Innovation</h4><p>We solve hard infrastructure problems so our partners can move fast and build freely.</p></div>
              <div className="value reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Financial Inclusion</h4><p>Every wallet, SACCO and small business deserves access to modern payment rails.</p></div>
              <div className="value reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h4>Trust &amp; Security</h4><p>We protect every transaction as if it were our own — because someone is counting on it.</p></div>
              <div className="value reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Interoperability</h4><p>Open by default. We connect networks instead of locking anyone in.</p></div>
              <div className="value reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h4>Reliability</h4><p>Money is serious. We engineer for resilience, redundancy and uptime.</p></div>
              <div className="value reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/><path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6m5 10a6 6 0 0 0-4-5.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h4>Partnership</h4><p>We grow when our partners grow. Every integration is a long-term relationship.</p></div>
            </div>
          </div>
        </div>
      
        
        <div className="section">
          <div className="wrap">
            <div className="section-head center reveal"><span className="eyebrow">Journey</span><h2>The road so far — and ahead</h2></div>
            <div className="timeline">
              <div className="tl reveal"><div className="yr">PHASE 01</div><h4>PixPesa Concept</h4><p>The idea takes shape: a single connection that unifies Tanzania's fragmented payment networks into one interoperable platform.</p></div>
              <div className="tl reveal d1"><div className="yr">PHASE 02</div><h4>Bank Partnerships</h4><p>Early conversations and pilots with commercial banks to validate the interoperability model and settlement flows.</p></div>
              <div className="tl reveal d2"><div className="yr">PHASE 03</div><h4>Regulatory Engagement</h4><p>Active engagement with regulators to align the platform with national payment-system standards and compliance.</p></div>
              <div className="tl reveal d3"><div className="yr">PHASE 04</div><h4>Product Development</h4><p>Building the gateway, API platform, settlement engine and dashboards that make the vision real for partners.</p></div>
              <div className="tl reveal d4"><div className="yr">PHASE 05</div><h4>Future Roadmap</h4><p>Expanding rails, deepening interoperability and extending PixPesa across the region — one connection at a time.</p></div>
            </div>
          </div>
        </div>
      
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Build the future with us</h2><p>Whether you're a bank, fintech, merchant, institution or investor — let's connect.</p><div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}><button className="btn btn-primary lg" data-nav="contact">Partner with PixPesa</button><button className="btn btn-line lg" data-nav="contact">Investor relations</button></div></div></div></div>
      </section>
      
      
      <section className="page" id="page-contact">
        <div className="hero" style={{"paddingBottom": "30px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".32"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "800px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Get In Touch</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Let's build something <span className="grad-text">connected</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Whether you want a live demo, a partnership, or to explore investing in Tanzania's payment future — our team would love to hear from you.</p>
          </div>
        </div>
      
        <div className="section" style={{"paddingTop": "20px"}}>
          <div className="wrap">
            <div className="contact-grid">
              
              <div className="form reveal">
                <h3 style={{"fontFamily": "'Sora',sans-serif", "fontSize": "22px", "marginBottom": "6px"}}>Send us a message</h3>
                <p style={{"color": "var(--subtext)", "fontSize": "14.5px", "marginBottom": "24px"}}>Fill in the form and the right team will get back to you within one business day.</p>
                <div className="field-row">
                  <div className="field"><label htmlFor="cName">Full name</label><input id="cName" type="text" placeholder="Asha Bakari" autoComplete="name" /></div>
                  <div className="field"><label htmlFor="cOrg">Organization</label><input id="cOrg" type="text" placeholder="Azimio Bank" autoComplete="organization" /></div>
                </div>
                <div className="field-row">
                  <div className="field"><label htmlFor="cEmail">Work email</label><input id="cEmail" type="email" placeholder="you@company.co.tz" autoComplete="email" /></div>
                  <div className="field"><label htmlFor="cPhone">Phone number</label><input id="cPhone" type="tel" placeholder="+255 700 000 000" autoComplete="tel" /></div>
                </div>
                <div className="field"><label htmlFor="cType">I'm interested in</label>
                  <select id="cType">
                    <option>Requesting a product demo</option>
                    <option>Becoming a partner</option>
                    <option>Technical / API integration</option>
                    <option>Investor relations</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div className="field"><label htmlFor="cMsg">Message</label><textarea id="cMsg" placeholder="Tell us a little about what you're building and how we can help…"></textarea></div>
                <button className="btn btn-primary lg" id="contactSubmit" style={{"width": "100%"}}>Send message
                  <svg viewBox="0 0 24 24" fill="none" style={{"width": "18px", "height": "18px"}}><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
      
              
              <div className="contact-side">
                <div className="cside reveal d1">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M23 7 16 12l7 5V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><rect x="1" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="2"/></svg></div>
                  <h4>Request a demo</h4>
                  <p style={{"marginBottom": "10px"}}>See PixPesa connect to live payment rails in real time. Book a 30-minute walkthrough with our solutions team.</p>
                  <a data-scroll="cType" data-set="Requesting a product demo">Book a demo →</a>
                </div>
                <div className="cside reveal d2">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                  <h4>Partnership inquiry</h4>
                  <p style={{"marginBottom": "10px"}}>Banks, mobile money operators, fintechs and institutions — let's explore connecting your network to PixPesa.</p>
                  <a data-scroll="cType" data-set="Becoming a partner">Start a partnership →</a>
                </div>
                <div className="cside reveal d3">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <h4>Investor relations</h4>
                  <p style={{"marginBottom": "10px"}}>Interested in backing the infrastructure layer for African payments? We'd be glad to share our vision and roadmap.</p>
                  <a data-scroll="cType" data-set="Investor relations">Talk to us →</a>
                </div>
                <div className="cside reveal d4" style={{"background": "var(--grad-soft)", "borderColor": "rgba(108,99,255,.25)"}}>
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg></div>
                  <h4>Visit our office</h4>
                  <p>11104, Mirambo Street,<br />Dar es Salaam, Tanzania<br /><a href="mailto:hello@pixpesa.co.tz" style={{"display": "inline-block", "marginTop": "8px"}}>hello@pixpesa.co.tz</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        
        <div className="section tight" style={{"paddingTop": "0"}}>
          <div className="wrap">
            <div className="section-head reveal" style={{"marginBottom": "24px"}}>
              <span className="eyebrow">Visit Our Office</span>
              <h2 style={{"fontSize": "clamp(26px,3.5vw,38px)", "marginTop": "12px"}}>Come say hello in Dar es Salaam</h2>
            </div>
            <div className="map-wrap reveal">
              <iframe title="PixPesa office — Mirambo Street, Dar es Salaam" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Mirambo%20Street%2C%20Dar%20es%20Salaam%2C%20Tanzania&z=15&output=embed"></iframe>
              <div className="map-card">
                <div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg></div>
                <h4>PixPesa HQ</h4>
                <p>11104, Mirambo Street,<br />Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG / INSIGHTS ===== */}
      <section className="page" id="page-blog">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".3"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Insights</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>The PixPesa <span className="grad-text">blog</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Ideas on interoperability, financial inclusion and the future of payments in Tanzania and across Africa.</p>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "20px"}}>
          <div className="wrap">
            <div className="blog-grid">
              <article className="post-card reveal" data-nav="contact">
                <div className="post-thumb"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h6m0 0 4-4m-4 4 4 4M13 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <div className="pc-body"><span className="pc-cat">Interoperability</span><h3>Why one connection beats ten integrations</h3><p>The hidden cost of point-to-point payment integrations — and how a single interoperability layer changes the maths.</p><div className="pc-meta">PixPesa Team · 6 min read</div></div>
              </article>
              <article className="post-card reveal d1" data-nav="contact">
                <div className="post-thumb"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div className="pc-body"><span className="pc-cat">Inclusion</span><h3>Bringing feature phones into digital payments</h3><p>How USSD, Swahili-first design and an agent network extend modern payments to every Tanzanian.</p><div className="pc-meta">PixPesa Team · 5 min read</div></div>
              </article>
              <article className="post-card reveal d2" data-nav="contact">
                <div className="post-thumb"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div className="pc-body"><span className="pc-cat">TIPS</span><h3>A practical guide to the Tanzania Instant Payment System</h3><p>What TIPS means for banks, fintechs and merchants — and how to be ready for instant settlement.</p><div className="pc-meta">PixPesa Team · 8 min read</div></div>
              </article>
              <article className="post-card reveal" data-nav="contact">
                <div className="post-thumb"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="2"/><path d="M8 7h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div className="pc-body"><span className="pc-cat">Case Study</span><h3>How Mama Grace Restaurant cut payment disputes to zero</h3><p>A Dar es Salaam restaurant deployed the PixPesa Soundbox and All-in-One QR — here's what changed.</p><div className="pc-meta">PixPesa Team · 4 min read</div></div>
              </article>
              <article className="post-card reveal d1" data-nav="contact">
                <div className="post-thumb"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div>
                <div className="pc-body"><span className="pc-cat">Security</span><h3>Fraud monitoring for real-time payments</h3><p>How tokenization and live risk scoring keep instant payments safe without slowing them down.</p><div className="pc-meta">PixPesa Team · 7 min read</div></div>
              </article>
              <article className="post-card reveal d2" data-nav="contact">
                <div className="post-thumb"><svg viewBox="0 0 24 24" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div className="pc-body"><span className="pc-cat">Developers</span><h3>Ship your first PixPesa integration in a day</h3><p>A walkthrough of the sandbox, SDKs and webhooks that get you from zero to first transaction fast.</p><div className="pc-meta">PixPesa Team · 6 min read</div></div>
              </article>
            </div>
            <div className="cta-band reveal" style={{"marginTop": "40px"}}>
              <h2>Want PixPesa updates?</h2>
              <p>Join the waitlist and we'll share product news, guides and case studies as we launch.</p>
              <div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}><button className="btn btn-primary lg" data-waitlist>Join Waitlist</button></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRIVACY ===== */}
      <section className="page" id="page-privacy">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="wrap" style={{"maxWidth": "820px", "margin": "0 auto"}}>
            <span className="eyebrow reveal">Legal</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(30px,4.5vw,48px)", "margin": "16px 0"}}>Privacy Policy</h1>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "10px"}}>
          <div className="wrap">
            <div className="legal-wrap reveal">
              <p className="legal-meta">Last updated: June 2026 · This is a template summary and not legal advice.</p>
              <p>PixPesa ("we", "us") is committed to protecting your privacy. This policy explains what we collect, how we use it, and the choices you have. By using our website or services you agree to this policy.</p>
              <h2>Information we collect</h2>
              <ul>
                <li>Details you provide through our contact and waitlist forms (name, email, phone, organization, role and message).</li>
                <li>Transaction and account data necessary to provide interoperable payment services to partners.</li>
                <li>Technical data such as device, browser and usage analytics (e.g. Google Analytics) to improve the product.</li>
              </ul>
              <h2>How we use your information</h2>
              <ul>
                <li>To respond to enquiries, process waitlist requests and provide our services.</li>
                <li>To secure the platform, prevent fraud and meet legal and regulatory obligations.</li>
                <li>To improve our products and, where you have opted in, to send you updates.</li>
              </ul>
              <h2>Sharing &amp; security</h2>
              <p>We share data only with partners and service providers necessary to deliver our services, and where required by the Bank of Tanzania or applicable law. We protect data using encryption, tokenization and bank-grade controls.</p>
              <h2>Your rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data, and may opt out of marketing at any time. Contact us at hello@pixpesa.co.tz.</p>
              <h2>Contact</h2>
              <p>PixPesa, 11104, Mirambo Street, Dar es Salaam, Tanzania · hello@pixpesa.co.tz</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TERMS ===== */}
      <section className="page" id="page-terms">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="wrap" style={{"maxWidth": "820px", "margin": "0 auto"}}>
            <span className="eyebrow reveal">Legal</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(30px,4.5vw,48px)", "margin": "16px 0"}}>Terms of Service</h1>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "10px"}}>
          <div className="wrap">
            <div className="legal-wrap reveal">
              <p className="legal-meta">Last updated: June 2026 · This is a template summary and not legal advice.</p>
              <p>These terms govern your access to and use of the PixPesa website and services. By accessing them you agree to be bound by these terms.</p>
              <h2>Use of services</h2>
              <p>You agree to use PixPesa only for lawful purposes and in compliance with all applicable Tanzanian laws and payment-system regulations. You are responsible for the accuracy of information you submit.</p>
              <h2>Accounts &amp; integrations</h2>
              <p>Where you integrate with our APIs, you must keep credentials secure and use the platform within the documented limits. We may suspend access for misuse, security risks or non-compliance.</p>
              <h2>Service availability</h2>
              <p>We work to provide reliable, high-availability services but do not guarantee uninterrupted access. Maintenance and factors outside our control may affect availability.</p>
              <h2>Liability</h2>
              <p>To the extent permitted by law, PixPesa is not liable for indirect or consequential losses. Nothing in these terms excludes liability that cannot be excluded under Tanzanian law.</p>
              <h2>Contact</h2>
              <p>Questions about these terms? Contact hello@pixpesa.co.tz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ APP PAGE ============ */}
      <section className="page" id="page-app">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".3"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>The PixPesa App</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Every payment, <span className="grad-text">in your pocket</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Scan, send, transfer and pay bills across every bank and wallet in Tanzania — with a PixPesa ID, a Soundbox-ready merchant mode, and real-time confirmations.</p>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "24px"}}>
          <div className="wrap">
            <div className="app-show">
              <div className="app-phone reveal"><img src={appShot} alt="PixPesa mobile app home screen" loading="lazy" /></div>
              <div className="reveal d1">
                <h2 style={{"marginBottom": "14px"}}>Built for how Tanzania pays</h2>
                <div className="app-feats" style={{"gridTemplateColumns": "1fr"}}>
                  <div className="app-feat"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><div><b>Invite &amp; Earn</b><span>Earn TZS 5,000 for every friend who joins PixPesa</span></div></div>
                  <div className="app-feat"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M2 10h20" stroke="currentColor" strokeWidth="2"/></svg></span><div><b>Balance &amp; History</b><span>See balances and transactions across all linked accounts</span></div></div>
                  <div className="app-feat"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></span><div><b>Pay Contacts &amp; Bills</b><span>Power, water, TV and data — paid in seconds</span></div></div>
                </div>
                <div className="store-badges" style={{"marginTop": "8px"}}>
                  <a className="store-badge" data-waitlist><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.02-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.78 1.3 10.33.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.93-.03-.01-2.71-1.04-2.74-4.13M14.53 4.47c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44"/></svg><div className="sb-t"><small>Download on the</small><b>App Store</b></div></a>
                  <a className="store-badge" data-waitlist><svg viewBox="0 0 24 24" fill="none"><path d="M3.5 2.5 13 12l-9.5 9.5c-.3-.18-.5-.5-.5-.9V3.4c0-.4.2-.72.5-.9Z" fill="#34A853"/><path d="m13 12 3.2-3.2 3.8 2.18c.7.4.7 1.44 0 1.84l-3.8 2.18L13 12Z" fill="#FBBC04"/><path d="M3.5 2.5 13 12l3.2-3.2L5.6 2.04c-.7-.4-1.7-.06-2.1.46Z" fill="#EA4335"/><path d="M3.5 21.5 13 12l3.2 3.2L5.6 21.96c-.7.4-1.7.06-2.1-.46Z" fill="#4285F4"/></svg><div className="sb-t"><small>Get it on</small><b>Google Play</b></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Get early access</h2><p>The PixPesa app is rolling out across Tanzania. Join the waitlist and we'll let you know the moment it's available.</p><div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}><button className="btn btn-primary lg" data-waitlist>Join Waitlist</button><button className="btn btn-line lg" data-nav="contact">Talk to Sales</button></div></div></div></div>
      </section>

      {/* ============ PARTNERS PAGE ============ */}
      <section className="page" id="page-partners">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".3"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Partners</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Building the rails <span className="grad-text">together</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>PixPesa grows through partnership — with banks, mobile money operators and institutions who believe payments should work for everyone.</p>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "20px"}}>
          <div className="wrap">
            <div className="split reveal" style={{"alignItems": "center"}}>
              <div className="pid-card nmb-logo-card" style={{"display": "grid", "placeItems": "center", "minHeight": "230px"}}>
                <img src={nmbLogo} alt="NMB Bank — Close to You" style={{"maxWidth": "78%", "height": "auto"}} />
              </div>
              <div>
                <span className="eyebrow">Anchor Partner</span>
                <h2 style={{"margin": "14px 0"}}>In partnership with NMB Bank</h2>
                <p className="lead">As one of Tanzania's largest banks, NMB partners with PixPesa to extend interoperable payments to millions of customers and merchants — combining NMB's nationwide reach with PixPesa's single-integration switching layer.</p>
                <p style={{"color": "var(--subtext)", "fontSize": "13px", "marginTop": "10px"}}>NMB Bank and the Bank of Tanzania references reflect ecosystem relationships and regulatory recognition. Logos shown are stylized representations.</p>
              </div>
            </div>
            <h3 style={{"fontFamily": "'Sora',sans-serif", "fontSize": "20px", "margin": "44px 0 4px"}}>The PixPesa ecosystem</h3>
            <p style={{"color": "var(--subtext)", "fontSize": "14px", "marginBottom": "8px"}}>Connected across the networks Tanzanians already use.</p>
            <div className="eco-grid">
              <div className="eco reveal">Commercial Banks</div>
              <div className="eco reveal d1">Mobile Money</div>
              <div className="eco reveal d2">TIPS</div>
              <div className="eco reveal d3">GePG</div>
              <div className="eco reveal">SACCOs &amp; MFIs</div>
              <div className="eco reveal d1">Card Networks</div>
              <div className="eco reveal d2">Digital Wallets</div>
              <div className="eco reveal d3">Merchants</div>
            </div>
          </div>
        </div>
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Become a PixPesa partner</h2><p>Banks, mobile money operators, fintechs and institutions — let's connect your network to every other.</p><div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}><button className="btn btn-primary lg" data-nav="contact">Start a partnership</button></div></div></div></div>
      </section>

      {/* ============ AGENTS PAGE ============ */}
      <section className="page" id="page-agents">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".3"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Agent Network</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Become a <span className="grad-text">PixPesa Agent</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Turn your shop into a cash-in / cash-out point. Earn commission on every transaction while bringing digital payments to your community — including customers on feature phones via USSD.</p>
            <div className="hero-cta reveal d2" style={{"justifyContent": "center"}}><button className="btn btn-primary lg" data-waitlist>Apply to be an agent</button></div>
          </div>
        </div>
        <div className="section">
          <div className="wrap">
            <div className="cards">
              <div className="card reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Earn commission</h3><p>Get paid on every cash-in, cash-out, bill payment and transfer your customers make through you.</p></div>
              <div className="card reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div><h3>USSD &amp; feature phones</h3><p>Serve every customer — even without a smartphone — with a simple *150# style USSD flow.</p></div>
              <div className="card reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg></div><h3>Grow foot traffic</h3><p>Become the go-to payment point in your neighbourhood and bring more customers through your door.</p></div>
              <div className="card reveal"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3>Float protection</h3><p>Secure, real-time settlement keeps your float balanced and your money safe at all times.</p></div>
              <div className="card reveal d1"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg></div><h3>Swahili support</h3><p>Local, in-language support over WhatsApp and phone whenever you need a hand.</p></div>
              <div className="card reveal d2"><div className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="m7 14 3-3 3 3 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Daily reporting</h3><p>Track commissions and balances in real time from the agent dashboard or app.</p></div>
            </div>
          </div>
        </div>
        <div className="section tight"><div className="wrap"><div className="cta-band reveal"><h2>Ready to start earning?</h2><p>Join the PixPesa agent network and help bring interoperable payments to every corner of Tanzania.</p><div className="hero-cta" style={{"justifyContent": "center", "margin": "0"}}><button className="btn btn-primary lg" data-waitlist>Apply now</button><button className="btn btn-line lg" data-nav="contact">Ask a question</button></div></div></div></div>
      </section>

      {/* ============ STATUS PAGE ============ */}
      <section className="page" id="page-status">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".28"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "740px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>System Status</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(32px,4.5vw,50px)", "margin": "20px 0"}}>PixPesa platform status</h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>Live operational status of the PixPesa switching, settlement and API services.</p>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "24px"}}>
          <div className="wrap" style={{"maxWidth": "860px"}}>
            <div className="status-top reveal">
              <div className="status-dot"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div><h3>All systems operational</h3><p>Updated just now · 99.99% uptime over the last 90 days</p></div>
            </div>
            <div className="status-list reveal">
              <div className="status-row"><div className="name">Payment Switching <span>Routing across all rails</span></div><span className="status-pill"><span className="d"></span>Operational</span></div>
              <div className="status-row"><div className="name">Settlement Engine <span>Clearing &amp; settlement</span></div><span className="status-pill"><span className="d"></span>Operational</span></div>
              <div className="status-row"><div className="name">TIPS Connectivity <span>Instant payments</span></div><span className="status-pill"><span className="d"></span>Operational</span></div>
              <div className="status-row"><div className="name">Developer API <span>REST &amp; webhooks</span></div><span className="status-pill"><span className="d"></span>Operational</span></div>
              <div className="status-row"><div className="name">Merchant Soundbox <span>Voice confirmations</span></div><span className="status-pill"><span className="d"></span>Operational</span></div>
              <div className="status-row"><div className="name">Mobile App <span>Android &amp; iOS</span></div><span className="status-pill"><span className="d"></span>Operational</span></div>
            </div>
            <p style={{"textAlign": "center", "color": "var(--subtext)", "marginTop": "26px", "fontSize": "13.5px"}}>Subscribe to status updates at status.pixpesa.com or follow us for incident notices.</p>
          </div>
        </div>
      </section>

      {/* ============ CAREERS PAGE ============ */}
      <section className="page" id="page-careers">
        <div className="hero" style={{"paddingBottom": "10px"}}>
          <div className="hero-bg"><div className="orb orb-1" style={{"opacity": ".3"}}></div></div>
          <div className="wrap" style={{"position": "relative", "zIndex": "1", "textAlign": "center", "maxWidth": "780px", "margin": "0 auto"}}>
            <span className="eyebrow reveal" style={{"justifyContent": "center"}}>Careers</span>
            <h1 className="reveal d1" style={{"fontSize": "clamp(34px,5vw,56px)", "margin": "20px 0"}}>Build the future of <span className="grad-text">African payments</span></h1>
            <p className="sub reveal d2" style={{"margin": "0 auto"}}>We're a small, ambitious team in Dar es Salaam on a mission to make every payment in Tanzania interoperable. Come build with us.</p>
          </div>
        </div>
        <div className="section" style={{"paddingTop": "24px"}}>
          <div className="wrap" style={{"maxWidth": "880px"}}>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
              <div className="role reveal"><div><h4>Senior Backend Engineer (Payments)</h4><div className="tags"><span>Engineering</span><span>Dar es Salaam / Remote</span><span>Full-time</span></div></div><button className="btn btn-line" data-nav="contact">Apply</button></div>
              <div className="role reveal d1"><div><h4>Flutter Mobile Engineer</h4><div className="tags"><span>Engineering</span><span>Dar es Salaam</span><span>Full-time</span></div></div><button className="btn btn-line" data-nav="contact">Apply</button></div>
              <div className="role reveal d2"><div><h4>Partnerships Manager (Banks)</h4><div className="tags"><span>Business</span><span>Dar es Salaam</span><span>Full-time</span></div></div><button className="btn btn-line" data-nav="contact">Apply</button></div>
              <div className="role reveal d3"><div><h4>Field Agent Network Lead</h4><div className="tags"><span>Operations</span><span>Tanzania</span><span>Full-time</span></div></div><button className="btn btn-line" data-nav="contact">Apply</button></div>
            </div>
            <p style={{"textAlign": "center", "color": "var(--subtext)", "marginTop": "30px", "fontSize": "14.5px"}}>Don't see your role? <a data-nav="contact" style={{"color": "var(--accent)", "cursor": "pointer"}}>Send us an open application →</a></p>
          </div>
        </div>
      </section>

      </main>
      
      
      <Footer />
      
      
      <div className="modal-ov" id="waitlistModal" role="dialog" aria-modal="true" aria-labelledby="wlTitle">
        <div className="modal">
          <div className="modal-head">
            <h3 id="wlTitle">Join Waitlist</h3>
            <button className="modal-x" id="wlClose" aria-label="Close"><svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg></button>
          </div>
          <p className="intro">Be among the first to experience zero-fee digital payments in Tanzania.</p>
          <div className="field"><label htmlFor="wlName">Full Name <span className="req">*</span></label><input id="wlName" type="text" placeholder="Jane Doe" autoComplete="name" /></div>
          <div className="field"><label htmlFor="wlEmail">Email Address <span className="req">*</span></label><input id="wlEmail" type="email" placeholder="you@email.com" autoComplete="email" /></div>
          <div className="field"><label htmlFor="wlPhone">Phone Number <span className="req">*</span></label><input id="wlPhone" type="tel" placeholder="+255 700 000 000" autoComplete="tel" /></div>
          <div className="field"><label htmlFor="wlRole">I am a <span className="req">*</span></label>
            <select id="wlRole">
              <option value="">Select one</option>
              <option>Individual User</option>
              <option>Business Owner</option>
              <option>Merchant</option>
            </select>
          </div>
          <div className="field"><label htmlFor="wlLoc">Location (Optional)</label><input id="wlLoc" type="text" placeholder="Dar es Salaam" /></div>
          <label className="check"><input type="checkbox" id="wlUpdates" defaultChecked /><span>Send me updates about PixPesa launch</span></label>
          <button className="btn btn-primary lg" id="wlSubmit" style={{"width": "100%"}}>Join Waitlist</button>
          <p className="fineprint">We'll notify you when PixPesa launches. No spam.</p>
        </div>
      </div>
      
      
      <div className="toast" id="toast" role="status" aria-live="polite">
        <span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        <div><b id="toastTitle">Message sent</b><span id="toastMsg">Our team will get back to you shortly.</span></div>
      </div>

      <a className="wa-float" href="https://wa.me/255764431337?text=Hi%20PixPesa%2C%20I%27d%20like%20to%20learn%20more" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
        <span className="pulse"></span>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.519 5.262l-.999 3.648 3.969-1.209zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        <span className="wa-tip">Chat with us on WhatsApp</span>
      </a>
    </>
  );
}
