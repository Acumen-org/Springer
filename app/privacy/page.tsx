'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// Metadata can't be exported from a 'use client' component in Next.js App Router.
// Move metadata to a separate layout or use generateMetadata in a server wrapper if needed.

const sections = [
  { id: 'identity', number: '01', title: 'Identity of the Data Controller' },
  { id: 'collection', number: '02', title: 'Information We Collect & Lawful Basis' },
  { id: 'retention', number: '03', title: 'Data Retention Policy' },
  { id: 'email', number: '04', title: 'Email Communication and Opt-Out' },
  { id: 'cookies', number: '05', title: 'Cookies and Tracking Technologies' },
  { id: 'third-party', number: '06', title: 'Third-Party Data Processors' },
  { id: 'international', number: '07', title: 'International Data Transfers' },
  { id: 'rights', number: '08', title: 'Your Rights' },
  { id: 'children', number: '09', title: "Children's Privacy" },
  { id: 'updates', number: '10', title: 'Policy Updates and Complaints' },
  { id: 'sms', number: '11', title: 'SMS Communications' },
];

export default function PrivacyPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-zinc-900 overflow-hidden page-banner">
        {/* Ambient orbs */}
        <div className="orb orb-1 w-96 h-96 bg-brand-green/10 top-[-80px] left-[-80px]" />
        <div className="orb orb-2 w-72 h-72 bg-brand-green/8 bottom-[-40px] right-[10%]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        {/* Animated left accent line */}
        <div className="banner-line" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-900/85 to-zinc-800/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pill label */}
          <div className="hero-text-reveal mb-6">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
              Legal Documentation
            </span>
          </div>

          <h1
            className="hero-text-reveal-2 text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6"
            style={{ letterSpacing: '-0.025em', lineHeight: '1.05' }}
          >
            Privacy{' '}
            <span className="text-gradient">Policy</span>
          </h1>

          <p className="hero-text-reveal-3 text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
            We are committed to handling your personal information with care, transparency, and full regulatory compliance.
          </p>

          {/* Quick-jump nav */}
          <div className="hero-text-reveal-4 flex flex-wrap gap-2">
            {sections.slice(0, 6).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs font-semibold tracking-wide text-zinc-400 hover:text-brand-green border border-zinc-700 hover:border-brand-green/40 rounded-full px-3 py-1 transition-all duration-300"
              >
                {s.title.split(' ').slice(0, 3).join(' ')}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-50 to-transparent" />
      </section>

      {/* ── BODY ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 lg:gap-16 items-start">

            {/* Sticky sidebar TOC */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start">
              <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-zinc-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Contents</span>
                </div>
                <nav className="py-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 px-5 py-2.5 text-sm text-zinc-500 hover:text-brand-green hover:bg-zinc-50 transition-all duration-200 group"
                    >
                      <span className="text-[10px] font-bold text-brand-green/60 group-hover:text-brand-green tabular-nums w-6 shrink-0">
                        {s.number}
                      </span>
                      <span className="leading-tight">{s.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact card */}
              <div className="mt-6 rounded-2xl bg-zinc-900 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">Privacy Contact</p>
                <p className="text-sm text-zinc-400 mb-3 leading-relaxed">Questions about your data? Reach us directly.</p>
                <a
                  href="mailto:contact@springer.capital"
                  className="text-sm font-semibold text-white hover:text-brand-green transition-colors animated-underline"
                >
                  contact@springer.capital
                </a>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-6">

              {/* ─ Section 1 ─ */}
              <PolicySection id="identity" number="01" title="Identity of the Data Controller">
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Springer Capital LLC</strong>{' '}
                  (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is the data controller responsible for your personal information.
                  We are registered in the State of Illinois, USA.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <InfoCard label="Physical Address" value="430 Beverly Drive, Wilmette, Illinois 60091" />
                  <InfoCard
                    label="Primary Privacy Contact"
                    value={<a href="mailto:contact@springer.capital" className="text-brand-green hover:text-brand-green-light transition-colors">contact@springer.capital</a>}
                  />
                </div>
              </PolicySection>

              {/* ─ Section 2 ─ */}
              <PolicySection id="collection" number="02" title="Information We Collect & Lawful Basis for Processing">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  We process your personal data under the following lawful bases (in compliance with GDPR and applicable laws):
                </p>
                <div className="space-y-3">
                  <BulletCard
                    label="Contact Form Submissions"
                    text={<>Processed under <em>Legitimate Interest</em> and <em>Contractual Necessity</em> to respond to your specific inquiries.</>}
                  />
                  <BulletCard
                    label="Email Follow-up Communications"
                    text={<>Processed under <em>Legitimate Interest</em> to provide relevant business updates (with a right to opt out).</>}
                  />
                  <BulletCard
                    label="Analytics & Cookies"
                    text={<>Processed strictly under <em>Consent</em> obtained via our Cookie Banner.</>}
                  />
                </div>
                <p className="text-zinc-600 text-base leading-relaxed mt-6">
                  Information collected may include your name, email address, phone number, and any details you voluntarily provide when communicating with us.
                </p>
              </PolicySection>

              {/* ─ Section 3 ─ */}
              <PolicySection id="retention" number="03" title="Data Retention Policy">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  We do not retain your data indefinitely. The retention schedules are as follows:
                </p>
                <div className="space-y-3">
                  <BulletCard
                    label="Contact Form Data"
                    text={<>Retained for <strong className="text-zinc-800">12 months</strong> after the inquiry is resolved, after which it is securely deleted.</>}
                  />
                  <BulletCard
                    label="Email Correspondence"
                    text={<>Retained for up to <strong className="text-zinc-800">7 years</strong> solely to comply with legal, tax, and business record-keeping obligations.</>}
                  />
                  <BulletCard
                    label="Cookie/Analytics Data"
                    text="Retained per the cookie provider's default term or until you clear your browser cache/preferences."
                  />
                </div>
              </PolicySection>

              {/* ─ Section 4 ─ */}
              <PolicySection id="email" number="04" title="Email Communication and Opt-Out Mechanism">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  By submitting the contact form on our website, you may receive follow-up emails from Springer Capital regarding your inquiry or our services.
                  You have the right to control these communications:
                </p>
                <div className="space-y-3">
                  <BulletCard label="Unsubscribe Link" text="Every marketing or promotional email we send contains a clear unsubscribe link at the bottom." />
                  <BulletCard
                    label="Timeframe"
                    text={<>Opt-out requests are honored promptly and within <strong className="text-zinc-800">10 business days</strong> in compliance with the CAN-SPAM Act.</>}
                  />
                  <BulletCard
                    label="Manual Opt-Out"
                    text={<>You may opt out by emailing <a href="mailto:contact@springer.capital" className="text-brand-green hover:text-brand-green-light transition-colors">contact@springer.capital</a> with the subject line &quot;Unsubscribe&quot;.</>}
                  />
                  <BulletCard label="Suppression" text="Once opted out, your email address will be placed on a suppression list to guarantee you do not receive future marketing communications." />
                </div>
              </PolicySection>

              {/* ─ Section 5 ─ */}
              <PolicySection id="cookies" number="05" title="Cookies and Tracking Technologies">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  We use cookies to improve your browsing experience. Types of cookies used include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <InfoCard label="Essential Cookies" value="Required for basic site functionality." />
                  <InfoCard label="Analytics/Performance Cookies" value="Used to understand site traffic (provided by services such as Google Analytics)." />
                </div>
                <p className="text-zinc-600 text-base leading-relaxed">
                  You can manage or refuse non-essential cookies via the designated cookie consent banner upon visiting our website.
                  Refusing cookies will not significantly restrict your use of the website.
                </p>
              </PolicySection>

              {/* ─ Section 6 ─ */}
              <PolicySection id="third-party" number="06" title="Third-Party Data Processors">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  We do not sell personal data to third parties. We use the following selected third-party processors to operate our website securely:
                </p>
                <div className="space-y-3">
                  <BulletCard
                    label="formsubmit.co"
                    text={<>Handles routing for our website contact forms. Data is securely relayed through their infrastructure. Please review the{' '}
                      <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener" className="text-brand-green hover:text-brand-green-light transition-colors">FormSubmit Privacy Policy</a>.</>}
                  />
                  <BulletCard
                    label="Amazon Web Services (SES)"
                    text={<>Utilized to securely transmit email communications. Please refer to the{' '}
                      <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener" className="text-brand-green hover:text-brand-green-light transition-colors">AWS Privacy Notice</a>.</>}
                  />
                </div>
              </PolicySection>

              {/* ─ Section 7 ─ */}
              <PolicySection id="international" number="07" title="International Data Transfers">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Springer Capital operates globally with offices in the United States, Hong Kong, and China. Your data may be transferred to and processed in
                  these jurisdictions. We utilize legally recognized transfer mechanisms, such as Standard Contractual Clauses, to ensure your data is protected.
                  For users in Hong Kong, we comply with the Personal Data (Privacy) Ordinance (PDPO) Cap. 486.
                </p>
              </PolicySection>

              {/* ─ Section 8 ─ */}
              <PolicySection id="rights" number="08" title="Your Rights">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  Depending on your jurisdiction, you possess the following rights regarding your personal data:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { label: 'Right to Access', desc: 'Request a copy of your data.' },
                    { label: 'Right to Rectification', desc: 'Request correction of inaccurate data.' },
                    { label: 'Right to Erasure', desc: 'Request the deletion of your data ("Right to be Forgotten").' },
                    { label: 'Right to Restrict / Object', desc: 'Object to processing based on legitimate interest.' },
                    { label: 'Right to Data Portability', desc: 'Obtain your data in a portable format.' },
                    { label: 'Right to Withdraw Consent', desc: 'Withdraw consent for marketing emails at any time.' },
                  ].map((r) => (
                    <div key={r.label} className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-brand-green/30 hover:shadow-sm transition-all duration-300">
                      <span className="block w-6 h-0.5 bg-brand-green rounded-full mb-3" />
                      <p className="text-base font-semibold text-zinc-900 mb-1.5">{r.label}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">{r.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-zinc-600 text-base leading-relaxed mt-6">
                  To exercise these rights, please contact us directly at{' '}
                  <a href="mailto:contact@springer.capital" className="text-brand-green hover:text-brand-green-light transition-colors font-medium">
                    contact@springer.capital
                  </a>.
                </p>
              </PolicySection>

              {/* ─ Section 9 ─ */}
              <PolicySection id="children" number="09" title="Children's Privacy">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Our website and services are not directed at children under the age of 13 (in the US) or under 16 (in the EU).
                  We do not knowingly collect personal data from children.
                </p>
              </PolicySection>

              {/* ─ Section 10 ─ */}
              <PolicySection id="updates" number="10" title="Policy Updates and Complaints">
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  We will notify you of any material changes to this Privacy Policy by updating the Last Updated date atop this page,
                  and for significant changes, via a prominent notice on our website.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed">
                  If you have any questions or wish to file a privacy complaint, please email{' '}
                  <a href="mailto:contact@springer.capital" className="text-brand-green hover:text-brand-green-light transition-colors font-medium">
                    contact@springer.capital
                  </a>. We respond to all privacy inquiries within{' '}
                  <strong className="text-zinc-800">30 days</strong>. You also maintain the right to lodge a complaint with your local supervisory authority or
                  Data Protection Authority.
                </p>
              </PolicySection>

              {/* ─ Section 11 — SMS ─ */}
              <PolicySection id="sms" number="11" title="SMS Communications">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  Where you have explicitly opted in via our contact form, Springer Capital LLC may send SMS text messages to your mobile phone number.
                </p>
                <div className="space-y-3">
                  <BulletCard
                    label="No Third-Party Sharing"
                    text="Mobile phone numbers and SMS opt-in data will never be shared, sold, or transferred to any third parties or affiliates for marketing or promotional purposes. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
                  />
                  <BulletCard
                    label="Service Providers"
                    text="We use Twilio Inc. solely to transmit SMS messages on our behalf, under strict data confidentiality."
                  />
                  <BulletCard
                    label="Opt-Out"
                    text="Reply STOP, QUIT, CANCEL, UNSUBSCRIBE, or END to any SMS to stop all messages. You will receive one final confirmation. Reply START to re-subscribe."
                  />
                  <BulletCard
                    label="Help"
                    text="Reply HELP for assistance or contact contact@springer.capital."
                  />
                  <BulletCard
                    label="Message Frequency"
                    text={<>Varies based on inquiry. Marketing updates: no more than 2&ndash;4 per month.</>}
                  />
                  <BulletCard
                    label="Rates"
                    text="Message and data rates may apply. Contact your carrier for details."
                  />
                </div>
              </PolicySection>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────── */

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className="reveal rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden scroll-mt-28"
    >
      {/* Section header */}
      <div className="flex items-center gap-4 px-8 py-5 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white">
        <span
          className="text-[10px] font-black tracking-[0.2em] text-brand-green bg-brand-green/8 border border-brand-green/15 rounded-lg px-2.5 py-1.5 font-mono"
        >
          {number}
        </span>
        <h2 className="text-lg font-semibold font-serif text-zinc-900 tracking-tight">{title}</h2>
      </div>

      {/* Content */}
      <div className="px-8 py-7">{children}</div>
    </div>
  );
}

function BulletCard({
  label,
  text,
}: {
  label: string;
  text: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4 hover:border-brand-green/25 hover:bg-white transition-all duration-300 group">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 group-hover:scale-125 transition-transform" />
      <p className="text-zinc-600 text-base leading-relaxed">
        <strong className="text-zinc-900 font-semibold">{label}</strong>{' '}
        &mdash; {text}
      </p>
    </div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 hover:border-brand-green/25 hover:bg-white transition-all duration-300">
      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">{label}</p>
      <p className="text-base text-zinc-700 leading-relaxed font-medium">{value}</p>
    </div>
  );
}
