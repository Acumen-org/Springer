import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, TrendingUp, Handshake, ShieldCheck, ChartBar as BarChart3, CircleCheck as CheckCircle2, MapPin, Users, Award, Zap } from 'lucide-react';

export const metadata = { title: 'About Us', description: 'About Springer Capital global operations' };


const stats = [
  { value: '$2M–$20M', label: 'Target Equity Range', sub: 'Per investment' },
  { value: '3–5 Yr', label: 'Holding Periods', sub: 'Typical exit horizon' },
  { value: '5', label: 'Asset Classes', sub: 'Across global markets' },
  { value: '3', label: 'Global Offices', sub: 'HK · Shanghai · Chicago' },
];

const values = [
  {
    icon: Handshake,
    title: 'Real Estate Investors',
    body: 'We are trusted real estate investment advisors to business owners and senior executives of leading private equity firms and public and privately held companies around the world.',
  },
  {
    icon: TrendingUp,
    title: 'Strivers for Greatness',
    body: 'We help our clients achieve superior results and strive to outperform their highest expectations with unique insights derived from deep industry relationships and a tightly integrated global team.',
  },
  {
    icon: ShieldCheck,
    title: 'Challenge Takers',
    body: "We take on clients' challenges as our own, flex our approach and methodology to meet their needs, and proactively share insights and information before, during and long after an engagement is complete.",
  },
  {
    icon: BarChart3,
    title: 'Analytical Advisors',
    body: 'We adopt a rigorous analytical process and a deep respect for the numbers that are used as a baseline to drive unparalleled advice.',
  },
];

const criteria = [
  'Primarily limited partner equity',
  'One-off investments rather than fund structures',
  'Target equity ranges from $2M to $20M USD',
  'Typical 3 - 5 year holding periods',
  'Focus on high growth cities',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-36 pb-32 bg-zinc-950 overflow-hidden page-banner">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-15 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/98 via-zinc-950/75 to-zinc-950/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />
        <div className="banner-line z-10" />
        <div className="floating-shape shape-ring w-28 h-28 top-1/4 right-16 opacity-20" />
        <div className="floating-shape shape-sq w-10 h-10 top-1/3 right-1/4 opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="hero-text-reveal flex items-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Our Company</span>
          </div>
          <h1 className="hero-text-reveal-2 text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 max-w-3xl tracking-tight" style={{ lineHeight: 1.03 }}>
            About <span className="text-brand-green">Springer Capital</span>
          </h1>
          <p className="hero-text-reveal-3 text-xl md:text-2xl text-zinc-300/80 max-w-2xl font-light leading-relaxed">
            Premium real estate investment and advisory focusing on world-class opportunities across global markets.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-100">
            {stats.map((s, i) => (
              <div key={i} className="px-8 py-10 text-center group">
                <div className="text-3xl font-bold font-serif text-brand-green mb-1 tracking-tight">{s.value}</div>
                <div className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-xs text-zinc-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-5 h-5 text-brand-green" />
                <span className="section-label">Our Story</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-8 text-zinc-900 tracking-tight">
                About <span className="text-brand-green">Springer Capital</span>
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed font-medium mb-6">
                Springer Capital is a real estate investment and advisory group with operations in Hong Kong, China, and North America.
              </p>
              <p className="text-base text-zinc-600 leading-[1.9] mb-5">
                Its founding partners are focused on world-class real estate opportunities and serve at the intersection of real estate direct investment and real estate advisory services. We leverage our breadth of global real estate investment experience with sponsors and our access to capital sources looking for yield, growth, and success.
              </p>
              <p className="text-base text-zinc-600 leading-[1.9]">
                Springer Capital offers full advisory service to its clients, ranging from optimal tax and entity structuring, cash management, accounting, asset & property management, work outs and investment reporting.
              </p>
            </div>

            <div className="reveal-right">
              <div className="space-y-4">
                {[
                  { city: 'Hong Kong', tag: 'APAC HQ', detail: 'Asia Pacific operations', icon: MapPin },
                  { city: 'Shanghai, China', tag: 'China Office', detail: 'Mainland China coverage', icon: MapPin },
                  { city: 'North America', tag: 'Americas', detail: 'US & Canada markets', icon: MapPin },
                ].map((loc, i) => (
                  <div key={loc.city} className={`reveal stagger-${i + 1} flex items-center gap-5 p-5 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-brand-green/20 hover:bg-brand-green/[0.02] transition-all duration-300`}>
                    <div className="w-12 h-12 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center flex-shrink-0">
                      <loc.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-zinc-900 text-sm">{loc.city}</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-brand-green bg-brand-green/8 px-2 py-0.5 rounded-full">{loc.tag}</span>
                      </div>
                      <span className="text-xs text-zinc-500">{loc.detail}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                <p className="text-zinc-400 text-sm leading-relaxed italic">
                  &quot;We leverage our breadth of global real estate investment experience with sponsors and our access to capital sources looking for yield, growth, and success.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-brand-green" />
                  <span className="text-brand-green text-xs font-semibold uppercase tracking-widest">Springer Capital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/[0.06] blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label bg-brand-green/10 border-brand-green/20 text-brand-green mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mt-5 tracking-tight">Who We Are</h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-base font-light">Four core principles guide how we work with clients and navigate complex global markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((item, i) => (
              <div key={item.title} className={`reveal stagger-${i + 1} group cursor-default dark-glass-card p-8 hover:border-brand-green/20 transition-all duration-500`}>
                <div className="flex items-start gap-5">
                  <div className="icon-box bg-brand-green/10 border border-brand-green/20 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">0{i + 1}</span>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-zinc-400 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-left">
              <span className="section-label mb-5 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Operations
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 mt-5 tracking-tight mb-6">What We Do</h2>
              <p className="text-zinc-500 leading-relaxed">We connect capital to opportunity — bridging Asian investors with high-quality North American real estate through disciplined advisory.</p>
            </div>
            <div className="reveal-right space-y-5">
              {[
                'Maintain active dialogue with real estate investors covering multi family, logistics, mixed use, hospitality, development land projects across Asia and the US.',
                "Design innovative financing solutions including equity, acquisition financing, dividend recapitalization financing, structured capital that meet our clients' needs while optimizing terms.",
                'Leverage our financial models and data-centric strategies to support clients with actionable and measurable solutions.',
              ].map((text, i) => (
                <div key={i} className={`reveal stagger-${i + 1} flex items-start gap-5 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-brand-green/20 transition-colors`}>
                  <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center flex-shrink-0 font-bold text-white text-sm shadow-[0_4px_12px_rgba(42,140,45,0.3)]">
                    0{i + 1}
                  </div>
                  <p className="text-zinc-600 leading-[1.85] text-sm pt-1">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-28 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <span className="section-label mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Parameters
              </span>
              <h2 className="text-4xl font-bold font-serif text-zinc-900 mt-5 mb-6 tracking-tight">Investment Criteria</h2>
              <p className="text-zinc-600 leading-[1.85] mb-8">
                We focus on high-quality real estate opportunities with disciplined investment parameters that maximize returns while managing risk for our investors.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Focus Area</p>
                  <p className="text-sm font-semibold text-zinc-800">High Growth Global Cities</p>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="card-premium overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-brand-green to-brand-green-light" />
                <ul className="divide-y divide-zinc-50 p-2">
                  {criteria.map((item, i) => (
                    <li key={i} className={`reveal stagger-${i + 1} feature-item group`}>
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-zinc-700 font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Capital Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 mt-5 tracking-tight">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Equity Capital Advisory',
                icon: TrendingUp,
                body: "Springer Capital's Equity Capital Advisory Group focuses on raising equity capital financing for growth-oriented, emerging enterprises ranging from early-stage ventures to more mature middle market companies. Our senior professionals work closely with entrepreneurs to secure equity capital to help fund growth initiatives, recapitalize the balance sheet, provide a level of shareholder liquidity, finance M&A transactions, or support management buyouts. Our team members integrate with the firm's various industry groups and debt advisory group to provide our clients with maximum market coverage and holistic capital solutions.",
              },
              {
                title: 'Debt Capital Advisory',
                icon: BarChart3,
                body: 'Springer Capital boasts a highly active, fully dedicated Debt Advisory Group that helps privately-owned and sponsor-backed companies secure debt capital or leveraged finance for organic growth, acquisitions, dividend recapitalizations, and refinancings. The team works closely with clients to optimize their debt structures and secure the best long-term institutional partners for the business, leveraging the talents and expertise of our industry specialists to ensure that our financing strategy and positioning results in maximum credit market receptivity.',
              },
            ].map((offer, i) => (
              <div key={offer.title} className={`reveal stagger-${i + 1} card-premium p-8 lg:p-10 group cursor-default`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center">
                    <offer.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-green/20 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-5 font-serif tracking-tight">{offer.title}</h3>
                <p className="text-zinc-600 leading-[1.9] text-sm">{offer.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <Link href="/team" className="inline-flex items-center gap-3 group">
              <span className="text-brand-green hover:text-brand-green-light font-semibold text-lg transition-colors">Meet our Leadership Team</span>
              <div className="w-9 h-9 rounded-full border border-brand-green/30 group-hover:bg-brand-green group-hover:border-brand-green flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-brand-green group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
