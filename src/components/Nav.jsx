import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import Icon from './Icon.jsx';
import { BUSINESS_LOGIN, BUSINESS_REGISTER, track } from '../links.js';

const LINKS = [
  ['Business', '/#business'],
  ['Soundbox', '/#soundbox'],
  ['Developers', '/#developers'],
  ['FAQ', '/#faq'],
  ['Contact', '/#contact'],
];

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="PixPesa home">
      <img src={logo} alt="" width="34" height="34" />
      <span>PixPesa</span>
    </a>
  );
}

export default function Nav({ route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [route]);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap nav-row">
        <Brand />
        <nav className="nav-links" aria-label="Main">
          {LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-cta">
          <a className="nav-signin" href={BUSINESS_LOGIN} onClick={() => track('business_login_click', { from: 'nav' })}>Sign in</a>
          <a className="btn btn-primary btn-sm" href={BUSINESS_REGISTER} onClick={() => track('business_register_click', { from: 'nav' })}>
            Open business account
          </a>
          <button className="nav-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
      <div className="nav-sheet">
        {LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="btn btn-primary" href={BUSINESS_REGISTER} onClick={() => track('business_register_click', { from: 'menu' })}>
          Open business account
        </a>
        <a className="btn btn-ghost" href={BUSINESS_LOGIN} onClick={() => track('business_login_click', { from: 'menu' })}>
          Sign in to Business
        </a>
      </div>
    </header>
  );
}
