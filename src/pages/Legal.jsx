import React, { useEffect } from 'react';
import { ADDRESS, EMAIL } from '../links.js';

const DOCS = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'PixPesa ("we", "us") is committed to protecting your privacy. This policy explains what we collect, how we use it, and the choices you have. By using our website or services you agree to this policy.',
    sections: [
      ['Information we collect', [
        'Details you provide through our forms and sign-up (name, email, phone, organization, role and message).',
        'Transaction and account data needed to provide payment services to you and our partners.',
        'Technical data such as device, browser and usage analytics (for example Google Analytics) to improve the product.',
      ]],
      ['How we use your information', [
        'To respond to enquiries, process waitlist requests and provide our services.',
        'To secure the platform, prevent fraud and meet legal and regulatory obligations.',
        'To improve our products and, where you have opted in, to send you updates.',
      ]],
      ['Sharing & security', 'We share data only with partners and service providers needed to deliver our services, and where required by the Bank of Tanzania or applicable law. We protect data using encryption, tokenization and bank-grade controls.'],
      ['Your rights', `You may request access to, correction of, or deletion of your personal data, and may opt out of marketing at any time. Contact us at ${EMAIL}.`],
      ['Contact', `PixPesa, ${ADDRESS} · ${EMAIL}`],
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'These terms govern your access to and use of the PixPesa website and services. By accessing them you agree to be bound by these terms.',
    sections: [
      ['Use of services', 'You agree to use PixPesa only for lawful purposes and in line with all applicable Tanzanian laws and payment-system regulations. You are responsible for the accuracy of information you submit.'],
      ['Accounts & integrations', 'Where you integrate with our APIs, you must keep credentials secure and use the platform within the documented limits. We may suspend access for misuse, security risks or non-compliance.'],
      ['Service availability', 'We work to provide reliable, high-availability services but do not guarantee uninterrupted access. Maintenance and factors outside our control may affect availability.'],
      ['Liability', 'To the extent permitted by law, PixPesa is not liable for indirect or consequential losses. Nothing in these terms excludes liability that cannot be excluded under Tanzanian law.'],
      ['Contact', `Questions about these terms? Contact ${EMAIL}.`],
    ],
  },
};

export default function Legal({ kind }) {
  const doc = DOCS[kind];
  useEffect(() => { document.title = `${doc.title} · PixPesa`; return () => { document.title = 'PixPesa: One QR for every payment'; }; }, [doc]);
  return (
    <article className="legal wrap">
      <p className="eyebrow">Legal</p>
      <h1>{doc.title}</h1>
      <p className="legal-date">Last updated June 2026</p>
      <p>{doc.intro}</p>
      {doc.sections.map(([heading, body]) => (
        <section key={heading}>
          <h2>{heading}</h2>
          {Array.isArray(body) ? <ul>{body.map((b) => <li key={b}>{b}</li>)}</ul> : <p>{body}</p>}
        </section>
      ))}
    </article>
  );
}
