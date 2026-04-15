'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'introduction', number: '01', title: 'Introduction and Agreement' },
  { id: 'no-advice', number: '02', title: 'No Investment or Financial Advice' },
  { id: 'electronic', number: '03', title: 'Electronic Communications' },
  { id: 'ip', number: '04', title: 'Intellectual Property Rights' },
  { id: 'acceptable', number: '05', title: 'Acceptable Use and Prohibited Activities' },
  { id: 'liability', number: '06', title: 'Limitation of Liability' },
  { id: 'governing', number: '07', title: 'Governing Law and Jurisdiction' },
  { id: 'dispute', number: '08', title: 'Dispute Resolution' },
  { id: 'sms', number: '09', title: 'SMS Communications Program' },
];

export default function TermsPage() {
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
        <div className="orb orb-1 w-96 h-96 bg-brand-green/10 top-[-80px] right-[-40px]" />
        <div className="orb orb-2 w-72 h-72 bg-brand-green/8 bottom-[-40px] left-[10%]" />

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
            Terms of{' '}
            <span className="text-gradient">Service</span>
          </h1>

          <p className="hero-text-reveal-3 text-zinc-400 text-lg max-w-xl leading-relaxed mb-10">
            Please read these terms carefully before using springer.capital. Your continued use of the site constitutes your acceptance.
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

              {/* Also see card */}
              <div className="mt-6 rounded-2xl bg-zinc-900 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">Also See</p>
                <p className="text-sm text-zinc-400 mb-3 leading-relaxed">Review how we handle your personal data.</p>
                <Link
                  href="/privacy"
                  className="text-sm font-semibold text-white hover:text-brand-green transition-colors animated-underline"
                >
                  Privacy Policy →
                </Link>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-6">

              {/* ─ Section 1 ─ */}
              <TermsSection id="introduction" number="01" title="Introduction and Agreement">
                <p className="text-zinc-600 text-base leading-relaxed">
                  By accessing the website at springer.capital, you agree to be bound by these Terms of Service. If you do not agree with any of these terms,
                  you are prohibited from using or accessing this site. Your use of this site is also explicitly governed by our{' '}
                  <Link href="/privacy" className="text-brand-green hover:text-brand-green-light transition-colors font-medium">
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
              </TermsSection>

              {/* ─ Section 2 ─ */}
              <TermsSection id="no-advice" number="02" title="No Investment or Financial Advice">
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-5 mb-4">
                  <p className="text-base text-amber-800 leading-relaxed">
                    The content provided on this website is strictly for informational and educational purposes only. Nothing on this website constitutes
                    investment, legal, tax, or financial advice. Past performance is not indicative of, and does not guarantee, future results.
                    Visitors and prospective clients should consult with qualified independent advisors before making any commercial or investment decisions.
                  </p>
                </div>
              </TermsSection>

              {/* ─ Section 3 ─ */}
              <TermsSection id="electronic" number="03" title="Electronic Communications">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  By voluntarily submitting our contact forms, you expressly consent to receive electronic communications from Springer Capital regarding your
                  inquiry. These include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-5 hover:border-brand-green/25 hover:bg-white transition-all duration-300">
                    <p className="text-base font-bold text-zinc-900 mb-2">Transactional Communications</p>
                    <p className="text-base text-zinc-600 leading-relaxed">
                      Direct responses to your specific questions or service requests. These do not require marketing opt-in consent.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-5 hover:border-brand-green/25 hover:bg-white transition-all duration-300">
                    <p className="text-base font-bold text-zinc-900 mb-2">Marketing Communications</p>
                    <p className="text-base text-zinc-600 leading-relaxed">
                      If you explicitly opt in, you may receive updates, market insights, and news regarding our services. You maintain the right to withdraw
                      this consent to marketing communications at any time by utilizing the unsubscribe mechanism provided in every promotional email.
                    </p>
                  </div>
                </div>
              </TermsSection>

              {/* ─ Section 4 ─ */}
              <TermsSection id="ip" number="04" title="Intellectual Property Rights">
                <p className="text-zinc-600 text-base leading-relaxed">
                  All content displayed on this website—including text, editorial materials, images, architectural layouts, logos, branding, and design
                  elements—is the exclusive intellectual property of{' '}
                  <strong className="text-zinc-900 font-semibold">Springer Capital LLC</strong> and is protected by applicable international copyright and
                  trademark laws. Visitors are granted a limited license to view the materials temporarily for personal, non-commercial use.
                </p>
              </TermsSection>

              {/* ─ Section 5 ─ */}
              <TermsSection id="acceptable" number="05" title="Acceptable Use and Prohibited Activities">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  When interacting with our website and our contact systems, you agree strictly to the following acceptable use boundaries:
                </p>
                <div className="space-y-3 mb-6">
                  <BulletCard text="No automated scraping, data mining, or malicious penetration testing." />
                  <BulletCard text="No use of our integrated contact forms to distribute spam, solicitations, or unsolicited commercial messaging." />
                  <BulletCard text="No submission of false, fraudulent, or systematically misleading personal information." />
                </div>
                <p className="text-zinc-600 text-base leading-relaxed">
                  We reserve the right to block access or ignore communications arising from prohibited activities, and log malicious traffic for regulatory
                  reporting.
                </p>
              </TermsSection>

              {/* ─ Section 6 ─ */}
              <TermsSection id="liability" number="06" title="Limitation of Liability">
                <p className="text-zinc-600 text-base leading-relaxed">
                  In no event shall Springer Capital, its directors, or its suppliers be held liable for any damages (including, without limitation, direct,
                  indirect, incidental, or consequential damages resulting from lost data, interrupted business, or lost profits) arising from the use or
                  inability to access the materials on this website. Our operations are provided on an &quot;as is&quot; and &quot;as available&quot; basis
                  without implied warranties.
                </p>
              </TermsSection>

              {/* ─ Section 7 ─ */}
              <TermsSection id="governing" number="07" title="Governing Law and Jurisdiction">
                <p className="text-zinc-600 text-base leading-relaxed">
                  These Terms, and any disputes arising from your use of the website or our services, are governed exclusively by and construed in accordance
                  with the{' '}
                  <strong className="text-zinc-900 font-semibold">laws of the State of Illinois, United States of America</strong>, without regard to its
                  conflict of law principles.
                </p>
              </TermsSection>

              {/* ─ Section 8 ─ */}
              <TermsSection id="dispute" number="08" title="Dispute Resolution">
                <p className="text-zinc-600 text-base leading-relaxed">
                  Any disputes arising out of these Terms shall first be addressed through a formal, good-faith negotiation period lasting no less than thirty
                  (30) days. If a resolution cannot be reached, the dispute shall be resolved via binding arbitration or exclusive litigation strictly within
                  the state and federal courts located in{' '}
                  <strong className="text-zinc-900 font-semibold">Cook County, Illinois</strong>. You irrevocably submit to the exclusive jurisdiction and
                  venue of such courts.
                </p>
              </TermsSection>

              {/* ─ Section 9 — SMS ─ */}
              <TermsSection id="sms" number="09" title="SMS Communications Program">
                <p className="text-zinc-600 text-base leading-relaxed mb-6">
                  By opting into SMS communications from Springer Capital LLC, you agree to the following terms:
                </p>
                <div className="space-y-3">
                  <BulletCard
                    label="Program"
                    text="Springer Capital LLC sends SMS to respond to inquiries and, where separately consented, to share real estate advisory updates."
                  />
                  <BulletCard
                    label="Frequency"
                    text={<>Message frequency varies. Marketing updates: no more than 2&ndash;4 per month.</>}
                  />
                  <BulletCard label="Rates" text="Message and data rates may apply." />
                  <BulletCard
                    label="Opt-Out"
                    text="Reply STOP, QUIT, CANCEL, UNSUBSCRIBE, or END at any time. One confirmation message will be sent."
                  />
                  <BulletCard label="Opt-In" text="Reply START or YES to re-subscribe." />
                  <BulletCard label="Help" text="Reply HELP or contact contact@springer.capital or +1 224 216 3685." />
                  <BulletCard label="Carrier Liability" text="Carriers are not liable for delayed or undelivered messages." />
                  <BulletCard
                    label="Privacy"
                    text={<>Mobile numbers are not shared with third parties for marketing. See our{' '}<Link href="/privacy" className="text-brand-green hover:text-brand-green-light transition-colors font-medium">Privacy Policy</Link>.</>}
                  />
                </div>
              </TermsSection>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────── */

function TermsSection({
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
      <div className="flex items-center gap-4 px-8 py-5 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white">
        <span className="text-[10px] font-black tracking-[0.2em] text-brand-green bg-brand-green/8 border border-brand-green/15 rounded-lg px-2.5 py-1.5 font-mono">
          {number}
        </span>
        <h2 className="text-lg font-semibold font-serif text-zinc-900 tracking-tight">{title}</h2>
      </div>
      <div className="px-8 py-7">{children}</div>
    </div>
  );
}

function BulletCard({
  label,
  text,
}: {
  label?: string;
  text: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4 hover:border-brand-green/25 hover:bg-white transition-all duration-300 group">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 group-hover:scale-125 transition-transform" />
      <p className="text-zinc-600 text-base leading-relaxed">
        {label && <><strong className="text-zinc-900 font-semibold">{label}</strong> &mdash; </>}
        {text}
      </p>
    </div>
  );
}
