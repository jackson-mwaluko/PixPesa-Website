import { api } from './services/api';
import { getRecaptchaToken } from './services/recaptcha.js';

export default function initSite(){

  "use strict";
  var html = document.documentElement;

  /* ---------- SPA NAVIGATION ---------- */
  var pages = document.querySelectorAll('.page');
  var SITE = ' | PixPesa';
  var META = {
    home:       { t: 'PixPesa — One Connection. Every Payment.', d: "Tanzania's universal payment interoperability platform. Connect once to banks, mobile money, TIPS, merchants and wallets through a single integration." },
    solutions:  { t: 'Solutions for Banks, Mobile Money, Merchants & Government' + SITE, d: 'How PixPesa connects banks, mobile money operators, fintechs, merchants, government and SACCOs to every payment network.' },
    products:   { t: 'Products — Soundbox, Gateway, API & Settlement' + SITE, d: 'Explore PixPesa products: the payment Soundbox, Gateway, API Platform, Merchant Payments, Settlement Engine and Analytics.' },
    pricing:    { t: 'Pricing & Merchant Subscriptions' + SITE, d: 'Simple merchant plans with the PixPesa Soundbox included. Start free, scale to Growth and Enterprise.' },
    developers: { t: 'Developers — APIs & SDKs (Python, JS, PHP, Flutter)' + SITE, d: 'Integrate once with the PixPesa API. Sandbox, authentication, SDKs and sample requests for developers.' },
    security:   { t: 'Security & Compliance' + SITE, d: 'Bank-grade security: end-to-end encryption, tokenization, fraud detection and PCI-DSS / ISO 27001 alignment.' },
    about:      { t: 'About PixPesa — Our Mission & Team' + SITE, d: 'PixPesa is building the interoperability layer for African payments. Meet our founders, mission and roadmap.' },
    contact:    { t: 'Contact & Visit Our Office in Dar es Salaam' + SITE, d: 'Talk to PixPesa about demos, partnerships or investment. Visit us at 11104, Mirambo Street, Dar es Salaam.' },
    blog:       { t: 'Blog & Insights — Payments, Inclusion & TIPS' + SITE, d: 'Ideas on payment interoperability, financial inclusion and the future of payments in Tanzania and Africa.' },
    privacy:    { t: 'Privacy Policy' + SITE, d: 'How PixPesa collects, uses and protects your personal data.' },
    terms:      { t: 'Terms of Service' + SITE, d: 'The terms that govern your use of the PixPesa website and services.' },
    app:        { t: 'PixPesa Mobile App — Pay, Send & Manage Money' + SITE, d: 'Scan QR, send money, pay bills and manage every linked account from one app. Download the PixPesa app for Android and iOS.' },
    partners:   { t: 'Partners — NMB Bank & Our Payment Ecosystem' + SITE, d: 'PixPesa partners with NMB Bank and connects banks, mobile money, TIPS and merchants across Tanzania to build an open payment ecosystem.' },
    agents:     { t: 'Agent Network — Cash-In, Cash-Out & USSD' + SITE, d: 'Become a PixPesa agent. Serve customers with cash-in, cash-out and USSD payments, reaching every corner of Tanzania.' },
    status:     { t: 'System Status & Uptime' + SITE, d: 'Real-time status of the PixPesa platform: API, Soundbox, settlement, TIPS connectivity and mobile money rails.' },
    careers:    { t: 'Careers — Build the Future of Payments' + SITE, d: 'Join PixPesa in Dar es Salaam. Open roles in engineering, product, partnerships and operations.' }
  };
  function applyMeta(name){
    var m = META[name]; if(!m) return;
    document.title = m.t;
    var md = document.querySelector('meta[name="description"]');
    if(md) md.setAttribute('content', m.d);
    var ogt = document.querySelector('meta[property="og:title"]');
    if(ogt) ogt.setAttribute('content', m.t);
    var ogd = document.querySelector('meta[property="og:description"]');
    if(ogd) ogd.setAttribute('content', m.d);
    var canon = document.querySelector('link[rel="canonical"]');
    var url = 'https://www.pixpesa.com/' + (name === 'home' ? '' : ('#' + name));
    if(canon) canon.setAttribute('href', url);
    /* Google Analytics SPA page_view */
    if(typeof window.gtag === 'function'){
      window.gtag('event', 'page_view', { page_title: m.t, page_path: '/' + (name === 'home' ? '' : name), page_location: url });
    }
  }
  function go(name){
    var target = document.getElementById('page-' + name);
    if(!target) return;
    pages.forEach(function(p){ p.classList.remove('active'); });
    target.classList.add('active');
    /* nav link active states (top + mobile) */
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function(a){
      a.classList.toggle('active', a.getAttribute('data-nav') === name);
    });
    /* close mobile menu */
    mobileMenu.classList.remove('open');
    burger.classList.remove('active');
    applyMeta(name);
    /* reset reveals inside the new page, then observe */
    target.querySelectorAll('.reveal').forEach(function(el){ el.classList.remove('in'); });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    requestAnimationFrame(function(){ observeReveals(target); kickPageWork(name); });
  }
  document.addEventListener('click', function(e){
    var nav = e.target.closest('[data-nav]');
    if(nav){ e.preventDefault(); go(nav.getAttribute('data-nav')); }
  });

  /* ---------- THEME TOGGLE ---------- */
  var themeBtn = document.getElementById('themeBtn');
  var MOON = '<svg viewBox="0 0 24 24" fill="none"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="2"/><path d="M12 1.5v2.5M12 20v2.5M3.5 3.5l1.8 1.8M18.7 18.7l1.8 1.8M1.5 12H4M20 12h2.5M3.5 20.5l1.8-1.8M18.7 5.3l1.8-1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  themeBtn.addEventListener('click', function(){
    var dark = html.getAttribute('data-theme') !== 'light';
    html.setAttribute('data-theme', dark ? 'light' : 'dark');
    themeBtn.innerHTML = dark ? SUN : MOON;
    var meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', dark ? '#F2F4F8' : '#0D0F14');
  });

  /* ---------- NAV SCROLL SHADOW ---------- */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  /* ---------- HAMBURGER ---------- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', function(){
    var open = mobileMenu.classList.toggle('open');
    burger.classList.toggle('active', open);
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  function observeReveals(scope){
    var els = (scope || document).querySelectorAll('.reveal:not(.in)');
    if(!io){ els.forEach(function(el){ el.classList.add('in'); }); return; }
    els.forEach(function(el){ io.observe(el); });
  }

  /* ---------- NUMBER COUNTERS ---------- */
  function runCounters(scope){
    (scope || document).querySelectorAll('[data-count]').forEach(function(el){
      if(el.dataset.done) return;
      el.dataset.done = '1';
      var target = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';
      var decimals = (String(target).split('.')[1] || '').length;
      var start = performance.now(), dur = 1600;
      function tick(now){
        var t = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        var val = target * eased;
        el.textContent = (decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString()) + suffix;
        if(t < 1) requestAnimationFrame(tick);
        else el.textContent = (decimals ? target.toFixed(decimals) : Math.floor(target).toLocaleString()) + suffix;
      }
      requestAnimationFrame(tick);
    });
  }
  var statSection = document.querySelector('.stats');
  if(statSection && 'IntersectionObserver' in window){
    var sObs = new IntersectionObserver(function(en){
      if(en[0].isIntersecting){ runCounters(document); sObs.disconnect(); }
    }, { threshold: 0.3 });
    sObs.observe(statSection);
  } else { runCounters(document); }

  /* ---------- LIVE TRANSACTION FEED ---------- */
  var txFeed = document.getElementById('txFeed');
  if(txFeed){
    var channels = [
      { n: 'M-Pesa', c: '#22C55E' }, { n: 'Tigo Pesa', c: '#6C63FF' },
      { n: 'Airtel Money', c: '#FF4D6A' }, { n: 'CRDB Bank', c: '#FFB347' },
      { n: 'NMB Bank', c: '#9B8FFF' }, { n: 'HaloPesa', c: '#FF7A5C' },
      { n: 'TIPS', c: '#22C55E' }, { n: 'Azam Pesa', c: '#6C63FF' }
    ];
    function rndAmt(){
      var v = (Math.random() * 480 + 5).toFixed(2);
      return 'TZS ' + Number(v).toLocaleString(undefined, { minimumFractionDigits: 2 }) + 'K';
    }
    function addTx(){
      var a = channels[Math.floor(Math.random() * channels.length)];
      var b = channels[Math.floor(Math.random() * channels.length)];
      var row = document.createElement('div');
      row.className = 'tx-row';
      row.innerHTML =
        '<span class="tx-dot" style="background:' + a.c + '"></span>' +
        '<div class="tx-meta"><b>' + a.n + ' \u2192 ' + b.n + '</b><span>Settled \u00b7 just now</span></div>' +
        '<div class="tx-amt">' + rndAmt() + '</div>' +
        '<span class="tx-ok"><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      txFeed.insertBefore(row, txFeed.firstChild);
      requestAnimationFrame(function(){ row.classList.add('show'); });
      while(txFeed.children.length > 4){ txFeed.removeChild(txFeed.lastChild); }
    }
    addTx(); addTx();
    setInterval(addTx, 2600);
  }

  /* ---------- FAQ ACCORDION ---------- */
  var faqData = [
    { q: 'What is PixPesa?', a: 'PixPesa is a payment interoperability platform built in Tanzania. Through a single integration, we connect banks, mobile money operators, TIPS, merchants, government systems and digital wallets — so money can move freely across every network.' },
    { q: 'How does PixPesa work?', a: 'You integrate once with the PixPesa API or Gateway. Behind that single connection we route, switch and settle transactions across all the payment rails you need, handling the protocol differences, reconciliation and settlement for you.' },
    { q: 'Is PixPesa secure?', a: 'Yes. We use end-to-end encryption, tokenization, real-time fraud monitoring and bank-grade infrastructure. The platform is engineered to align with PCI-DSS, ISO 27001 and national payment-system standards.' },
    { q: 'How do we integrate?', a: 'Start in our sandbox with test credentials, build against our REST APIs and SDKs (Python, JavaScript, PHP and Flutter), then flip to live keys. Most teams are up and running in days, not months.' },
    { q: 'What payment networks are supported?', a: 'Mobile money operators, commercial banks, TIPS, merchant payment channels, government payment systems (such as GePG) and digital wallets — with new rails added continuously.' }
  ];
  var faqHome = document.getElementById('faqHome');
  if(faqHome){
    faqData.forEach(function(item, i){
      var el = document.createElement('div');
      el.className = 'faq-item reveal' + (i ? ' d' + Math.min(i, 4) : '');
      el.innerHTML =
        '<button class="faq-q"><span>' + item.q + '</span>' +
        '<svg class="faq-ic" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
        '<div class="faq-a"><p>' + item.a + '</p></div>';
      faqHome.appendChild(el);
    });
    if(faqHome.firstChild) faqHome.firstChild.classList.add('open');
    faqHome.addEventListener('click', function(e){
      var btn = e.target.closest('.faq-q');
      if(!btn) return;
      var it = btn.parentElement;
      var open = it.classList.contains('open');
      faqHome.querySelectorAll('.faq-item.open').forEach(function(o){ o.classList.remove('open'); });
      if(!open) it.classList.add('open');
    });
  }

  /* ---------- CODE TABS + SDK CARDS ---------- */
  var fileMap = { py: 'collect.py', js: 'collect.js', php: 'collect.php', dart: 'collect.dart' };
  var codeFile = document.getElementById('codeFile');
  function switchCode(lang){
    document.querySelectorAll('.code-tab').forEach(function(t){
      t.classList.toggle('active', t.getAttribute('data-code') === lang);
    });
    document.querySelectorAll('.code-pane').forEach(function(p){
      p.classList.toggle('active', p.getAttribute('data-code') === lang);
    });
    if(codeFile && fileMap[lang]) codeFile.textContent = fileMap[lang];
  }
  document.addEventListener('click', function(e){
    var tab = e.target.closest('.code-tab, .sdk');
    if(tab && tab.getAttribute('data-code')){
      switchCode(tab.getAttribute('data-code'));
      if(tab.classList.contains('sdk')){
        var box = document.querySelector('.code-tabs');
        if(box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  /* ---------- TOAST ---------- */
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(title, msg){
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove('show'); }, 4200);
  }

  /* ---------- CONTACT FORM (Django backend) ---------- */
  var submit = document.getElementById('contactSubmit');
  if(submit){
    submit.addEventListener('click', function(){
      var name = (document.getElementById('cName').value || '').trim();
      var email = (document.getElementById('cEmail').value || '').trim();
      var org = (document.getElementById('cOrg').value || '').trim();
      var phone = (document.getElementById('cPhone').value || '').trim();
      var subject = document.getElementById('cType').value || 'General enquiry';
      var msg = (document.getElementById('cMsg').value || '').trim();
      if(!name || !email || !msg){
        showToast('Missing details', 'Please add your name, email and a short message.');
        return;
      }
      var original = submit.innerHTML;
      submit.disabled = true; submit.textContent = 'Sending\u2026';
       getRecaptchaToken('submit').then(function(token){
        return api.submitContact({
          name: name, email: email, phone: phone, subject: subject,
          message: org ? ('Organization: ' + org + '\n\n' + msg) : msg,
          recaptcha_token: token
        });
      }).then(function(){
        showToast('Message sent \u2713', 'Thanks ' + name.split(' ')[0] + ' \u2014 our team will reach out within one business day.');
        ['cName','cOrg','cEmail','cPhone','cMsg'].forEach(function(id){ var f = document.getElementById(id); if(f) f.value = ''; });
      }).catch(function(err){
        showToast('Could not send', (err && err.message) ? err.message : 'Something went wrong. Please try again.');
      }).then(function(){
        submit.disabled = false; submit.innerHTML = original;
      });
    });
  }
  /* side cards prefill the enquiry type + scroll to form */
  document.querySelectorAll('[data-scroll]').forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      var sel = document.getElementById(link.getAttribute('data-scroll'));
      if(sel && link.getAttribute('data-set')) sel.value = link.getAttribute('data-set');
      var form = document.querySelector('#page-contact .form');
      if(form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  /* ---------- SOUNDBOX DEMO ---------- */
  var audioCtx = null;
  function chime(){
    try{
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if(audioCtx.state === 'suspended') audioCtx.resume();
      var now = audioCtx.currentTime;
      [880, 1318.5].forEach(function(freq, i){
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.value = freq;
        var t = now + i * 0.16;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.22, t + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(t); o.stop(t + 0.45);
      });
    }catch(e){}
  }
  var sbLang = 'en';
  function announce(words){
    try{
      if(!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      var text = sbLang === 'sw' ? ('Malipo yamepokelewa. ' + words + '.') : ('Payment received. ' + words + '.');
      var u = new SpeechSynthesisUtterance(text);
      u.rate = 0.98; u.pitch = 1.05; u.volume = 1;
      u.lang = sbLang === 'sw' ? 'sw-TZ' : 'en-US';
      var voices = window.speechSynthesis.getVoices();
      var match = voices.filter(function(v){ return v.lang && v.lang.toLowerCase().indexOf(sbLang === 'sw' ? 'sw' : 'en') === 0; })[0];
      if(match) u.voice = match;
      window.speechSynthesis.speak(u);
    }catch(e){}
  }
  var sbStage = document.getElementById('sbStage');
  var sbPlay = document.getElementById('sbPlay');
  var sbAmountEl = document.getElementById('sbAmount');
  var sbBusy = false;
  if(sbStage && sbPlay){
    var amts = document.getElementById('sbAmounts');
    amts.addEventListener('click', function(e){
      var c = e.target.closest('.amt-chip'); if(!c) return;
      amts.querySelectorAll('.amt-chip').forEach(function(x){ x.classList.remove('sel'); });
      c.classList.add('sel');
      sbAmountEl.textContent = c.getAttribute('data-amt');
    });
    var langs = document.getElementById('sbLangs');
    langs.addEventListener('click', function(e){
      var c = e.target.closest('.sb-lang'); if(!c) return;
      langs.querySelectorAll('.sb-lang').forEach(function(x){ x.classList.remove('sel'); });
      c.classList.add('sel');
      sbLang = c.getAttribute('data-lang');
    });
    sbPlay.addEventListener('click', function(){
      if(sbBusy) return; sbBusy = true;
      var sel = amts.querySelector('.amt-chip.sel') || amts.querySelector('.amt-chip');
      sbStage.classList.add('playing');
      chime();
      setTimeout(function(){ announce(sel.getAttribute('data-' + sbLang) || sel.getAttribute('data-en')); }, 340);
      if(typeof showToast === 'function') showToast('Payment received \u2713', sel.getAttribute('data-amt') + ' settled to your account.');
      setTimeout(function(){ sbStage.classList.remove('playing'); sbBusy = false; }, 2400);
    });
  }
  /* prime voices list (some browsers load async) */
  if('speechSynthesis' in window){ window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = function(){ window.speechSynthesis.getVoices(); }; }

  /* secondary soundbox on pricing page — visual ripple loop when visible */
  var sbStage2 = document.getElementById('sbStage2');
  if(sbStage2){
    setInterval(function(){
      if(document.getElementById('page-pricing').classList.contains('active')){
        sbStage2.classList.add('playing');
        setTimeout(function(){ sbStage2.classList.remove('playing'); }, 1700);
      }
    }, 5200);
  }

  /* ---------- PRICING BILLING TOGGLE ---------- */
  var billSwitch = document.getElementById('billSwitch');
  if(billSwitch){
    var growthPer = document.getElementById('growthPer');
    billSwitch.addEventListener('click', function(){
      var annual = billSwitch.classList.toggle('on');
      billSwitch.setAttribute('aria-checked', annual ? 'true' : 'false');
      document.querySelectorAll('.plan .price[data-m]').forEach(function(p){
        var span = p.querySelector('[data-price]');
        if(span) span.textContent = annual ? p.getAttribute('data-a') : p.getAttribute('data-m');
      });
      document.getElementById('lblMonthly').style.color = annual ? 'var(--subtext)' : 'var(--text)';
      document.getElementById('lblAnnual').style.color = annual ? 'var(--text)' : 'var(--subtext)';
      if(growthPer) growthPer.textContent = annual ? 'Billed annually \u00b7 2 months free' : 'Billed monthly \u00b7 switch to annual to save';
    });
  }

  /* ---------- PER-PAGE WORK ---------- */
  function kickPageWork(name){
    if(name === 'home'){ runCounters(document); }
  }

  /* ---------- WAITLIST MODAL ---------- */
  var wlModal = document.getElementById('waitlistModal');
  if(wlModal){
    function openWaitlist(){ wlModal.classList.add('open'); document.body.style.overflow = 'hidden'; setTimeout(function(){ var n = document.getElementById('wlName'); if(n) n.focus(); }, 320); }
    function closeWaitlist(){ wlModal.classList.remove('open'); document.body.style.overflow = ''; }
    document.addEventListener('click', function(e){
      if(e.target.closest('[data-waitlist]')){ e.preventDefault(); openWaitlist(); }
    });
    document.getElementById('wlClose').addEventListener('click', closeWaitlist);
    wlModal.addEventListener('click', function(e){ if(e.target === wlModal) closeWaitlist(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && wlModal.classList.contains('open')) closeWaitlist(); });
    document.getElementById('wlSubmit').addEventListener('click', function(){
      var wlBtn = document.getElementById('wlSubmit');
      var name = (document.getElementById('wlName').value || '').trim();
      var email = (document.getElementById('wlEmail').value || '').trim();
      var phone = (document.getElementById('wlPhone').value || '').trim();
      var role = document.getElementById('wlRole').value;
      var loc = (document.getElementById('wlLoc').value || '').trim();
      var news = document.getElementById('wlUpdates').checked;
      if(!name || !email || !phone || !role){
        if(typeof showToast === 'function') showToast('Almost there', 'Please fill in your name, email, phone and role.');
        return;
      }
      var original = wlBtn.textContent;
      wlBtn.disabled = true; wlBtn.textContent = 'Joining\u2026';
      getRecaptchaToken('waitlist').then(function(token){
        return api.submitWaitlist({
          fullName: name, email: email, phone: phone, userType: role,
          location: loc, newsletter: news, recaptcha_token: token
        });
      }).then(function(){
        closeWaitlist();
        if(typeof showToast === 'function') showToast('You\u2019re on the list \u2713', 'Thanks ' + name.split(' ')[0] + ' \u2014 we\u2019ll email you the moment PixPesa launches.');
        ['wlName','wlEmail','wlPhone','wlLoc'].forEach(function(id){ var f = document.getElementById(id); if(f) f.value = ''; });
        document.getElementById('wlRole').value = '';
      }).catch(function(err){
        if(typeof showToast === 'function') showToast('Could not join', (err && err.message) ? err.message : 'Something went wrong. Please try again.');
      }).then(function(){
        wlBtn.disabled = false; wlBtn.textContent = original;
      });
    });
  }

  /* ---------- LANGUAGE TOGGLE (EN / SW) ---------- */
  var I18N_SW = {
    pid_eyebrow:'Lipa kwa PixPesa ID',
    pid_title:'Kitambulisho kimoja rahisi. <span class="grad-text">Hakuna namba za akaunti.</span>',
    pid_lead:'Sahau namba ndefu za akaunti na kuhama kati ya programu. Kila mtumiaji na mfanyabiashara wa PixPesa hupata kitambulisho rahisi kama <b style="color:var(--text)">mamagrace@pixpesa</b> — tuma, omba na pokea kupitia benki au pochi yoyote kwa hicho tu.',
    pid_f1t:'Tuma kwa yeyote, papo hapo',
    pid_f1d:'Lipa PixPesa ID yoyote kupitia TIPS papo hapo — benki kwenda pochi, pochi kwenda benki.',
    pid_f2t:'Omba-malipo',
    pid_f2d:'Tuma ombi la malipo kwa kitambulisho cha mteja; wakikubali fedha zinaingia kwako moja kwa moja.',
    pid_f3t:'Idhini za AutoPay',
    pid_f3d:'Idhinisha mara moja kwa kodi, bili au usajili — bila kuingiza taarifa kila mwezi.',
    incl_eyebrow:'Imejengwa kwa Tanzania nzima',
    incl_title:'Malipo yanayofika <span class="grad-text">kila mtu</span>',
    incl_lead:'Kuanzia simu janja Dar es Salaam hadi simu za kawaida mikoani — ujumuishaji wa kifedha umejengwa ndani ya mfumo.',
    incl_1t:'USSD kwa simu za kawaida', incl_1d:'Hauhitaji simu janja. Lipa na pokea kwa simu yoyote kwa menyu rahisi ya <code>*150*88#</code>.',
    incl_2t:'Kiingereza na Kiswahili', incl_2d:'Kila skrini, risiti na tangazo la Sound Box hufanya kazi kwa Kiswahili na Kiingereza.',
    incl_3t:'Mtandao wa mawakala', incl_3d:'Weka na toa fedha taslimu kupitia mtandao unaokua wa mawakala wa PixPesa kila mkoa.',
    incl_4t:'Hustahimili bila mtandao', incl_4d:'Malipo hupanga foleni na kuthibitisha kwa uhakika hata kwa mtandao hafifu.',
    incl_5t:'Ada ndogo na wazi', incl_5d:'Imejengwa juu ya TIPS kwa uhamishaji wa gharama nafuu, kwa bei inayowafaa wafanyabiashara wadogo.',
    incl_6t:'SACCOs na vyama', incl_6d:'Leta vikundi vya akiba na taasisi za mikopo midogo kwenye uchumi wa kidijitali.',
    app_eyebrow:'Programu ya PixPesa',
    app_title:'Maisha yako yote ya pesa, <span class="grad-text">katika programu moja</span>',
    app_lead:'Skani ulipe, tuma pesa, lipa bili na simamia salio katika akaunti zote zilizounganishwa — benki na pochi pamoja. Kwa Kiswahili na Kiingereza.',
    app_f1t:'Skani &amp; Lipa', app_f1d:'QR yoyote, mtandao wowote',
    app_f2t:'Tuma Pesa', app_f2d:'Kwa ID au namba yoyote',
    app_f3t:'Uhamisho wa Benki', app_f3d:'Akaunti kwa akaunti',
    app_f4t:'Bili na Vocha', app_f4d:'Lipa kwa sekunde',
    partner_label:'Kwa ushirikiano na',
    nmb_eyebrow:'Mshirika wa Benki',
    nmb_title:'Tunajenga mustakabali wa malipo na <span class="grad-text">NMB Bank</span>',
    nmb_lead:'PixPesa inashirikiana na NMB Bank — moja ya benki kubwa Tanzania — kuwezesha usuluhishi salama wa kiwango cha benki na kufikia wateja na wafanyabiashara kila mkoa.'
  };
  var NAV_SW = { home:'Nyumbani', solutions:'Suluhisho', products:'Bidhaa', pricing:'Bei', developers:'Wasanidi', security:'Usalama', about:'Kuhusu', blog:'Blogu', contact:'Wasiliana' };
  var lang = 'en';
  function setLang(next){
    lang = next;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      if(el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (next === 'sw' && I18N_SW[key]) ? I18N_SW[key] : el.dataset.en;
    });
    document.querySelectorAll('.nav-links a[data-nav], .mobile-menu a[data-nav]').forEach(function(a){
      if(a.dataset.en === undefined) a.dataset.en = a.textContent;
      var k = a.getAttribute('data-nav');
      a.textContent = (next === 'sw' && NAV_SW[k]) ? NAV_SW[k] : a.dataset.en;
    });
    var lbl = document.getElementById('langLabel');
    if(lbl) lbl.textContent = next === 'sw' ? 'EN' : 'SW';
    document.documentElement.setAttribute('lang', next === 'sw' ? 'sw' : 'en');
  }
  var langBtn = document.getElementById('langBtn');
  if(langBtn){ langBtn.addEventListener('click', function(){ setLang(lang === 'en' ? 'sw' : 'en'); }); }

  /* ---------- SAVINGS CALCULATOR ---------- */
  var calcVol = document.getElementById('calcVol');
  if(calcVol){
    var calcRails = document.getElementById('calcRails');
    var calcBox = document.getElementById('calcBox');
    function fmtTZS(n){
      if(n >= 1e9) return 'TZS ' + (n/1e9).toFixed(1).replace(/\.0$/,'') + 'B';
      if(n >= 1e6) return 'TZS ' + (n/1e6).toFixed(1).replace(/\.0$/,'') + 'M';
      if(n >= 1e3) return 'TZS ' + Math.round(n/1e3) + 'K';
      return 'TZS ' + Math.round(n);
    }
    function recalc(){
      var volM = +calcVol.value, rails = +calcRails.value, boxes = +calcBox.value;
      document.getElementById('calcVolOut').textContent = 'TZS ' + volM + 'M';
      document.getElementById('calcRailsOut').textContent = rails;
      document.getElementById('calcBoxOut').textContent = boxes;
      var build = rails * 9000000;          /* build + certify per integration */
      var maint = rails * 3500000;          /* annual maintenance per rail */
      var feeSave = volM * 1e6 * 12 * 0.0015; /* routing/fee efficiency ~0.15% */
      var total = build + maint + feeSave;
      document.getElementById('calcBuild').textContent = fmtTZS(build);
      document.getElementById('calcMaint').textContent = fmtTZS(maint);
      document.getElementById('calcSave').textContent = fmtTZS(total);
      document.getElementById('calcTime').textContent = '~' + Math.max(1, rails * 3) + ' wks faster';
    }
    [calcVol, calcRails, calcBox].forEach(function(el){ el.addEventListener('input', recalc); });
    recalc();
  }

  /* ---------- INIT ---------- */
  observeReveals(document);
  nav.classList.toggle('scrolled', window.scrollY > 8);

}
