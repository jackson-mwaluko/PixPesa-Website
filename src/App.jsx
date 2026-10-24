import React, { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Waitlist from './components/Waitlist.jsx';
import Home from './pages/Home.jsx';
import Legal from './pages/Legal.jsx';
import Pay from './pages/Pay.jsx';

// The old site was one page of #sections; keep those links (sitemap, shares,
// app-store listings) landing somewhere sensible.
const LEGACY_HASH = { '#privacy': '/privacy', '#terms': '/terms' };

function currentRoute() {
  const legacy = LEGACY_HASH[window.location.hash];
  if (legacy) {
    window.history.replaceState(null, '', legacy);
    return legacy;
  }
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

export default function App() {
  const [route, setRoute] = useState(currentRoute);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    const onPop = () => setRoute(currentRoute());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // In-site links are plain <a href="/...">; route them without a reload.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]');
      if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const path = url.pathname.replace(/\/+$/, '') || '/';
      if (!['/', '/privacy', '/terms'].includes(path)) return;
      e.preventDefault();
      if (path === route && url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', url.hash);
        return;
      }
      window.history.pushState(null, '', url.pathname + url.hash);
      setRoute(path);
      requestAnimationFrame(() => {
        const target = url.hash && document.querySelector(url.hash);
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [route]);

  useEffect(() => {
    if (window.gtag) window.gtag('event', 'page_view', { page_path: route });
  }, [route]);

  const openWaitlist = () => setWaitlistOpen(true);

  if (route === '/pay') return <Pay />;

  return (
    <>
      <Nav route={route} />
      <main>
        {route === '/privacy' || route === '/terms'
          ? <Legal kind={route.slice(1)} />
          : <Home onWaitlist={openWaitlist} />}
      </main>
      <Footer onWaitlist={openWaitlist} />
      {waitlistOpen && <Waitlist onClose={() => setWaitlistOpen(false)} />}
    </>
  );
}
