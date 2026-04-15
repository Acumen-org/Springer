import React from 'react';
import Link from 'next/link';
import { ArrowRight, Hotel, TrendingUp, ShieldCheck, Star, Zap, CircleCheck as CheckCircle2, ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Hospitality', description: 'Hospitality and resort asset investments' };


const stats = [
  { value: 'High Yield', label: 'Operating Returns', sub: 'Cash flow driven income' },
  { value: 'Tax', label: 'Efficiency', sub: 'Depreciation & equity growth' },
  { value: 'Low Entry', label: 'Competition', sub: 'Overlooked asset class' },
  { value: 'Value-Add', label: 'Potential', sub: 'Renovation & operational upside' },
];

const investmentCase = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'High Returns',
    body: "The number one reason that we invest in hospitality projects is because of the high yield return associated with this type of real estate investment. The return mostly comes from the operating cash flow — making an experienced management team essential to balance the inherent operating risk.",
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Tax Efficiency',
    body: 'Owning a hotel gives investors the advantage of reducing their tax burden through depreciation, equity growth, and tax-deferred exchange. Depreciation in hotels reduces taxable income, while investment recapitalization from various physical properties inside the hotel creates further opportunity.',
  },
  {
    icon: Star,
    number: '03',
    title: 'Asset Diversification',
    body: "Hotels are a great avenue for investors looking to diversify their real estate investment portfolio. For most investors, hospitality is not their first thought — creating relatively low barriers to entry and meaningful portfolio diversification with limited correlation to other asset classes.",
  },
  {
    icon: Zap,
    number: '04',
    title: 'Value-Add Possibilities',
    body: 'Beyond nightly stays and day-to-day operations, owning hotels offers flexibility to offer value-adds that increase income — from renovating older properties to improve quality, to refining sales and service contracts that boost customer loyalty and recurring revenue.',
  },
];

const services = [
  'Hospitality Valuation',
  'Asset Management and Optimization',
  'Operational Audits',
  'Strategic Planning',
  'Cost Segregation',
  'General Consulting',
];

export default function HospitalityPage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-end bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/98-982689_luxury-resort-at-night-hotel-negril-jamaica.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-zinc-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

        {/* Floating accent top-right */}
        <div className="absolute top-32 right-8 md:right-16 hero-text-reveal-4">
          <div className="hero-stat flex-col items-end text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Asset Type</span>
            <span className="text-2xl font-bold font-serif text-white">Hotels · Resorts · Boutique</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="hero-text-reveal flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-brand-green" />
            <span className="pill-tag">Advisory Services</span>
          </div>

          <h1 className="hero-text-reveal-2 headline-xl text-white mb-6 max-w-4xl">
            Hospitality<br />
            <span className="text-brand-green">Real Estate</span><br />
            Advisory
          </h1>

          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 max-w-xl font-light leading-relaxed mb-10">
            Comprehensive advisory and consulting services connecting Asian capital with US hospitality real estate — hotels, resorts, and beyond.
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
                Where Asian Capital<br />Meets US <span className="text-brand-green">Hospitality</span>
              </h2>

              <div className="space-y-5">
                {[
                  "Springer Capital specializes in the Hospitality real estate asset class. We offer a suite of consulting and support services to U.S. sponsors and developers seeking to raise capital from Asia, connecting them with our deep pool of investors. Our experienced team of professionals utilize relevant market data to thoroughly present a sponsor's project, experience, and capability to potential Asian investors.",
                  'Our primary goal is to protect the integrity of the asset so that the investor can maintain and improve the future economic benefits while sustaining the physical structure. We monitor the performance of the management company and brand to ensure compliance with respective agreements.',
                  'Most importantly, we work collaboratively with all parties to develop strategies and execute tactics that maximize the financial performance (EBITDA) through either revenue growth or expense control.',
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
                      <Hotel className="w-5 h-5 text-brand-green" />
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
                Why Invest in<br />Hospitality Real Estate
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">Four compelling reasons why hospitality remains one of the most dynamic and rewarding real estate asset classes.</p>
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
                We work collaboratively with all parties to develop strategies and execute tactics that maximize financial performance — through revenue growth, expense control, and value-add repositioning.
              </div>
              <div className="mt-6 flex items-center gap-3 pl-8">
                <div className="w-8 h-px bg-brand-green" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Springer Capital — Hospitality Advisory</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-zinc-950 rounded-3xl p-7 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Hotel className="w-4 h-4 text-brand-green" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Market Signal</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  RevPAR recovery in top US markets has surpassed pre-pandemic levels, with luxury and boutique segments leading sustained above-average ADR growth.
                </p>
                <div className="mt-5 pt-5 border-t border-zinc-800">
                  <div className="text-3xl font-bold font-serif text-brand-green">RevPAR+</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Above pre-pandemic benchmarks in key markets</div>
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
              <h2 className="text-4xl font-bold font-serif text-white mb-3 tracking-tight">Interested In Capital Investments<br />for Hospitality Developments?</h2>
              <p className="text-white/70 text-lg font-light max-w-lg">Complete the form below to get started on acquiring capital for your hospitality investments.</p>
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
