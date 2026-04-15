import React from 'react';
import Link from 'next/link';
import { ArrowRight, Warehouse, Package, TrendingUp, Globe, Zap, CircleCheck as CheckCircle2, ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Logistics', description: 'Industrial and logistics asset investments' };


const stats = [
  { value: '25%', label: 'E-commerce Growth', sub: 'Post-COVID acceleration' },
  { value: '2%', label: 'Vacancy Rate', sub: 'Historic lows globally' },
  { value: '10yr', label: 'Mega-trend', sub: 'Structural demand shift' },
  { value: 'Pre-let', label: 'New Builds', sub: 'Before opening day' },
];

const investmentCase = [
  {
    icon: Package,
    number: '01',
    title: 'The On-Demand Economy',
    body: 'We live in a fast-paced, on-demand society. The rise in e-commerce and the on-demand culture of society today has meant more need for modern, well-located industrial real estate — all types of properties where goods and products are manufactured, prepared for delivery or stored.',
  },
  {
    icon: Globe,
    number: '02',
    title: 'Urbanisation Pressure',
    body: 'Urbanisation has added to demand. The need for inner-city housing has meant higher property prices that have forced tenants in previous inner-city manufacturing and distribution hubs to seek alternative, fit-for-purpose locations close to major cities they serve. This is happening all over the world.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Supply-Demand Imbalance',
    body: 'These trends have combined to cause an imbalance between supply and demand: more space is needed by tenants than there is available for them to rent. Any new supply is taking longer than ever to be made available because of labour and material delays exacerbated by Covid-19.',
  },
  {
    icon: Warehouse,
    number: '04',
    title: 'Structural Vacancy Crunch',
    body: 'New properties are quickly being pre-leased, and vacancy rates are low across most of the world. Analysts are forecasting that low vacancy and increasing rents will continue to shape the market for years ahead — creating a compelling investor environment.',
  },
];

const services = [
  'Investment Sourcing & Acquisition',
  'Sale & Leaseback Structuring',
  'Build-to-Suit Development',
  'Financial Analysis & Modelling',
  'Market & Submarket Analysis',
  'Due Diligence & Transaction Management',
];

export default function LogisticsPage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-end bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

        {/* Floating accent top-right */}
        <div className="absolute top-32 right-8 md:right-16 hero-text-reveal-4">
          <div className="hero-stat flex-col items-end text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Market Vacancy</span>
            <span className="text-2xl font-bold font-serif text-white">~2% Globally</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="hero-text-reveal flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-brand-green" />
            <span className="pill-tag">Advisory Services</span>
          </div>

          <h1 className="hero-text-reveal-2 headline-xl text-white mb-6 max-w-4xl">
            Logistics &<br />
            <span className="text-brand-green">Industrial</span><br />
            Advisory
          </h1>

          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 max-w-xl font-light leading-relaxed mb-10">
            Capitalizing on the e-commerce revolution — connecting Asian capital with world-class US logistics real estate.
          </p>

          <div className="hero-text-reveal-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary group px-8 py-4 text-base">
              Explore Opportunities
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#overview" className="hero-stat text-white text-sm font-medium hover:border-brand-green/30 transition-colors">
              Our Approach
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
                E-Commerce Drives<br />Unmatched <span className="text-brand-green">Demand</span>
              </h2>

              <div className="space-y-5">
                {[
                  'Springer Capital capitalizes on an expanding e-commerce sector triggered by COVID-19 disruptors. The rising demand for additional logistics facilities to support the unprecedented growth of wholesale providers, retailers, and third-party delivery services presents a unique opportunity.',
                  "Springer Capital acts as a provider of Asia financing for the U.S. logistics real estate business by connecting sponsors and developers of such projects to our expansive network of investors from the APAC region.",
                  "In addition, Springer offers advisory services for customers aiming to target logistics market investment opportunities — consulting clients in acquisitions, sale and leasebacks, and build-to-suit developments to help make informed real estate investment decisions.",
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
                      <Warehouse className="w-5 h-5 text-brand-green" />
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
                Why Invest in<br />Logistics Real Estate
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">Four macro forces converging to create a once-in-a-generation industrial real estate opportunity.</p>
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

      {/* PULL QUOTE */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 line-pattern pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <div className="pl-8 pull-quote text-zinc-700">
                Springer provides a variety of services, including investment sourcing and acquisition, financial analysis, market analysis, contract negotiation, transaction management, and due diligence — allowing clients to make informed real estate investment decisions.
              </div>
              <div className="mt-6 flex items-center gap-3 pl-8">
                <div className="w-8 h-px bg-brand-green" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Springer Capital — Logistics Advisory</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-zinc-950 rounded-3xl p-7 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-4 h-4 text-brand-green" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Market Signal</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  E-commerce now represents over 20% of all US retail. Every $1B in new e-commerce sales requires approximately 1.25 million sq ft of new logistics space.
                </p>
                <div className="mt-5 pt-5 border-t border-zinc-800">
                  <div className="text-3xl font-bold font-serif text-brand-green">1.25M</div>
                  <div className="text-xs text-zinc-500 mt-0.5">sq ft needed per $1B e-commerce growth</div>
                </div>
              </div>
            </div>
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
              <h2 className="text-4xl font-bold font-serif text-white mb-3 tracking-tight">Interested in Capital<br />for Logistics Investments?</h2>
              <p className="text-white/70 text-lg font-light max-w-lg">Complete the form below to get started on raising capital for your logistics investments.</p>
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
