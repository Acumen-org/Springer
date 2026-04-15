import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Users, Store, TrendingUp, Building2, CircleCheck as CheckCircle2, ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Mixed Use', description: 'Mixed use community investments' };


const stats = [
  { value: 'Live', label: 'Work · Play', sub: 'The integrated lifestyle' },
  { value: '2x', label: 'Foot Traffic', sub: 'vs. single-use assets' },
  { value: 'Lower', label: 'Risk Profile', sub: 'Diversified income streams' },
  { value: 'Rising', label: 'Urban Demand', sub: 'Millennials & Boomers align' },
];

const useTypes = [
  { icon: Users, label: 'Residential', desc: 'Apartments, condos & rentals' },
  { icon: Store, label: 'Retail', desc: 'Street-level F&B & services' },
  { icon: Building2, label: 'Commercial', desc: 'Office & co-working' },
  { icon: Layers, label: 'Institutional', desc: 'Civic, cultural & community' },
];

const investmentCase = [
  {
    icon: Users,
    number: '01',
    title: 'Shifting Consumer Preferences',
    body: "In the last few years there has been an increased demand for mixed-use developments as consumers' preferences for integrated urban-lifestyle centers that cater to the \"live, shop, work, play\" mantra have become more pronounced — coming from all generations, not just millennials.",
  },
  {
    icon: Store,
    number: '02',
    title: 'Tenant Business Benefits',
    body: "Tenants stand to benefit from increased exposure to consumers, since these spaces attract more foot traffic for diverse purposes. As a result, tenant attraction and retention can be improved through focus on mixed-use developments.",
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Portfolio Risk Diversification',
    body: "Portfolio risk is diversified across different property types and uses, especially at a time when disruptive forces have rendered many single-use properties underutilized or irrelevant. Mixed-use hedges against sector-specific downturns.",
  },
  {
    icon: Building2,
    number: '04',
    title: 'Urban Renaissance',
    body: "Mixed-use developments were the preferred form of living prior to the early 1900s. Today there is a powerful return to walkable, well-connected urban locales — supercharged by remote work flexibility and a rejection of suburban isolation.",
  },
];

const services = [
  'Capital Raising from APAC Investors',
  'Sponsor Presentation & Analysis',
  'Residential Component Advisory',
  'Retail Tenant Mix Consulting',
  'Urban Submarket Research',
  'Full Transaction Support',
];

export default function MixedPage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-end bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/HPA-2018-Blog-Hennepin-Mixed-Use.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/30 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

        {/* Floating accent top-right */}
        <div className="absolute top-32 right-8 md:right-16 hero-text-reveal-4">
          <div className="hero-stat flex-col items-end text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Use Types</span>
            <span className="text-2xl font-bold font-serif text-white">Residential · Retail · Office</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="hero-text-reveal flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-brand-green" />
            <span className="pill-tag">Advisory Services</span>
          </div>

          <h1 className="hero-text-reveal-2 headline-xl text-white mb-6 max-w-4xl">
            Mixed Use<br />
            <span className="text-brand-green">Development</span><br />
            Advisory
          </h1>

          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 max-w-xl font-light leading-relaxed mb-10">
            Connecting Asian investors with integrated urban real estate — where residential, retail, and commercial converge.
          </p>

          <div className="hero-text-reveal-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary group px-8 py-4 text-base">
              Explore Opportunities
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#overview" className="hero-stat text-white text-sm font-medium hover:border-brand-green/30 transition-colors">
              Learn More
              <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={i} className={`py-5 px-6 border-r border-white/10 last:border-r-0 ${i >= 2 ? 'border-t border-white/10 md:border-t-0' : ''}`}>
                  <div className="text-2xl font-bold font-serif text-brand-green mb-0.5">{s.value}</div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest">{s.label}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE TYPES BAND */}
      <section className="py-10 bg-zinc-900 border-y border-white/[0.06] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useTypes.map((ut, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                  <ut.icon className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{ut.label}</p>
                  <p className="text-[10px] text-zinc-500">{ut.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW — SPLIT EDITORIAL */}
      <section id="overview" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.15] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-left">
              <span className="section-label mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Our Approach
              </span>
              <h2 className="text-5xl font-bold font-serif text-zinc-900 mb-8 tracking-tight mt-5" style={{ lineHeight: 1.05 }}>
                The Return of the<br />Urban <span className="text-brand-green">Village</span>
              </h2>

              <div className="space-y-5">
                {[
                  'Springer Capital specializes in the Mixed Use real estate asset class. We offer a suite of consulting and support services to U.S. sponsors and developers seeking to raise capital from Asia, connecting them with our deep pool of investors.',
                  'Mixed-use is a form of integrated and pedestrian-friendly development that typically combines two or more uses, including residential, commercial, and institutional. Mixed-use developments were the preferred form of living prior to the early 1900s — until increased industrialization and the automobile boom spurred the creation of suburbs.',
                  "Today, consumer preferences are swinging powerfully back toward the integrated urban environment — and Springer Capital is positioned at the intersection of that trend and Asian capital's appetite for diversified US real estate.",
                ].map((text, i) => (
                  <p key={i} className="text-zinc-600 leading-[1.9] text-base">{text}</p>
                ))}
              </div>
            </div>

            {/* Services panel */}
            <div className="reveal-right">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-green/5 rounded-3xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-100 rounded-3xl" />

                <div className="relative bg-zinc-950 rounded-3xl p-8 md:p-10 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green via-brand-green-light to-transparent" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/[0.07] blur-3xl rounded-full" />

                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-brand-green/15 border border-brand-green/25 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">What We Offer</p>
                      <p className="text-sm font-semibold text-white">Advisory Capabilities</p>
                    </div>
                  </div>

                  <ul className="space-y-0 divide-y divide-white/[0.06]">
                    {services.map((s, i) => (
                      <li key={i} className="flex items-center gap-3 py-3.5 group">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">{s}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <Link href="/contact" className="w-full btn-primary justify-center py-3.5 text-sm">
                      Discuss Your Project
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT CASE — BENTO GRID */}
      <section className="py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/15 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
            <div>
              <span className="section-label bg-brand-green/10 border-brand-green/20 text-brand-green mb-5 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                The Investment Thesis
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mt-4 tracking-tight">
                Why Invest in<br />Mixed Use Developments
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">Four reasons why mixed-use is one of the most resilient and forward-looking asset classes in real estate today.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {investmentCase.map((item, i) => (
              <div key={item.number} className={`reveal stagger-${i + 1} bento-card p-8 group`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors">
                    <item.icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <span className="text-5xl font-black text-white/[0.05] font-serif leading-none group-hover:text-white/[0.08] transition-colors">{item.number}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-[1.85]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.1]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <h2 className="text-4xl font-bold font-serif text-white mb-3 tracking-tight">Interested In Mixed Use<br />Capital Investments?</h2>
              <p className="text-white/70 text-lg font-light max-w-lg">Complete the form below to get started on acquiring capital for your mixed-use investments.</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold text-base px-10 py-5 rounded-xl hover:bg-zinc-50 transition-all group shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                Contact Us Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
