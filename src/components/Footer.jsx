// src/components/Footer.jsx
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand foot-col">
            <div className="brand" data-nav="home">
              <img className="brand-logo" src={logo} alt="PixPesa logo" />
              Pix<b>Pesa</b>
            </div>
            <p>One connection to every payment network. PixPesa is building the interoperability layer for banks, mobile money, merchants and institutions across Tanzania and beyond.</p>
            <div className="socials">
              <a href="https://facebook.com/pixpesa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/pixpesa" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
              </a>
              <a href="https://instagram.com/pixpesa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/pixpesa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
              </a>
              <a href="https://github.com/pixpesa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/></svg>
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Products</h5>
            <a data-nav="products">Soundbox</a>
            <a data-nav="products">All-in-One QR</a>
            <a data-nav="app">Mobile App</a>
            <a data-nav="products">Merchant Payments</a>
            <a href="https://business.pixpesa.com/login" target="_blank" rel="noopener noreferrer">Business Portal Login</a>
            <a data-nav="developers">API Platform</a>
            <a data-nav="pricing">Pricing &amp; Plans</a>
          </div>
          <div className="foot-col">
            <h5>Solutions</h5>
            <a data-nav="solutions">For Banks</a>
            <a data-nav="solutions">Mobile Money</a>
            <a data-nav="solutions">For Fintechs</a>
            <a data-nav="solutions">For Merchants</a>
            <a data-nav="solutions">For Government</a>
            <a data-nav="agents">Agent Network</a>
          </div>
          <div className="foot-col">
            <h5>Developers</h5>
            <a data-nav="developers">API Overview</a>
            <a data-nav="developers">Authentication</a>
            <a data-nav="developers">Sandbox</a>
            <a data-nav="developers">SDK Downloads</a>
            <a data-nav="status">System Status</a>
            <a data-nav="security">Security</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a data-nav="about">About Us</a>
            <a data-nav="partners">Partners</a>
            <a data-nav="careers">Careers</a>
            <a data-nav="blog">Blog</a>
            <a data-nav="contact">Contact</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© {year} PixPesa. All rights reserved. Built in Dar es Salaam, Tanzania.</div>
          <div className="links">
            <a href="#" data-nav="privacy">Privacy</a>
            <a href="#" data-nav="terms">Terms</a>
            <a href="#" data-nav="security">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
