import React from 'react';
import Link from 'next/link';
import { ArrowRight, TreePine, DollarSign, Target, Network, CircleCheck as CheckCircle2, ArrowUpRight, Map } from 'lucide-react';

export const metadata = { title: 'Development Land', description: 'Development land investment opportunities' };


const stats = [
  { value: 'Lower Cost', label: 'Than Developed Land', sub: 'Minimal insurance & maintenance' },
  { value: 'Less', label: 'Competition', sub: 'Overlooked asset class' },
  { value: 'Wide Range', label: 'Of Opportunities', sub: 'Residential, multi, commercial' },
  { value: 'Network', label: 'Access', sub: 'Lenders, developers, investors' },
];

const investmentCase = [
  {
    icon: DollarSign,
    number: '01',
    title: 'Less Expensive Than Buying Developed Property',
    body: 'As compared to buying a developed property, the acquisition of raw land is fairly inexpensive. Not only does raw land have minimal property insurance and taxes, but it also has lower maintenance costs — reducing carrying costs and improving return profiles.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Lower Competition',
    body: 'Most investors look for developed properties such as commercial or residential properties that can provide immediate income. This focus on developed assets means raw land has lower competition and can be acquired more easily at favorable valuations.',
  },
  {
    icon: Network,
    number: '03',
    title: 'A Wide Range of Opportunities',
    body: 'Raw land offers several opportunities for investors. Not only can investors earn long-term appreciation, but they can also develop this land into single-family or multifamily properties, condominiums, commercial buildings, and mixed-use developments.',
  },
];

const services = [
  'Mapping & Site Planning',
  'Market Analysis',
  'Valuation & Appraisal',
  'Regulatory Compliance',
  'Network Access',
  'Acquisition & Disposition',
];

export default function DevelopmentPage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-end bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bnr_InfrastructurePlanningandManagement.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

        {/* Floating accent top-right */}
        <div className="absolute top-32 right-8 md:right-16 hero-text-reveal-4">
          <div className="hero-stat flex-col items-end text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Land Types</span>
            <span className="text-2xl font-bold font-serif text-white">Raw · Entitled · Infill</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
          <div className="hero-text-reveal flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-brand-green" />
            <span className="pill-tag">Advisory Services</span>
          </div>

          <h1 className="hero-text-reveal-2 headline-xl text-white mb-6 max-w-4xl">
            Development<br />
            <span className="text-brand-green">Land</span><br />
            Advisory
          </h1>

          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 max-w-xl font-light leading-relaxed mb-10">
            Comprehensive advisory and consulting services for investors and sponsors targeting the development land real estate asset class.
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
                Unlocking the Value<br />of <span className="text-brand-green">Raw Land</span>
              </h2>

              <div className="space-y-5">
                {[
                  "Whether you're an owner, investor or developer, Springer can help you determine the best use of your land to maximize your investment. By partnering with our Land Advisory Services professionals, you can tap into the expertise of a specialized team with the technical knowledge to move your project forward.",
                  'Our land advisory experts can provide you with a range of acquisition and disposition services including mapping, site planning, market analysis, and valuation and appraisal. But even more importantly, we know the key players and we know the nuances of your market.',
                  'With us, you have access to a well-established network of lenders, investors, developers and others you may need to work with to achieve your goals. We stay on top of the latest regulatory, environmental, transportation and legal issues to ensure you can overcome any hurdle.',
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
                      <TreePine className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">What We Provide</p>
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
                Why Invest in<br />Development Land
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">Three structural advantages that make development land one of the most overlooked and high-potential categories in US real estate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
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
                We know the key players and the nuances of your market — giving you access to a well-established network of lenders, investors, and developers to achieve your goals in the shortest time possible.
              </div>
              <div className="mt-6 flex items-center gap-3 pl-8">
                <div className="w-8 h-px bg-brand-green" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Springer Capital — Land Advisory</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-zinc-950 rounded-3xl p-7 border border-zinc-800">
                <div className="flex items-center gap-3 mb-6">
                  <Map className="w-4 h-4 text-brand-green" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Market Signal</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Entitled land in high-growth US sunbelt markets is commanding a significant premium over raw land, with rezoning and entitlement driving outsized returns for early-stage investors.
                </p>
                <div className="mt-5 pt-5 border-t border-zinc-800">
                  <div className="text-3xl font-bold font-serif text-brand-green">3–5x</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Value uplift from raw to entitled land</div>
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
              <h2 className="text-4xl font-bold font-serif text-white mb-3 tracking-tight">Interested In Acquiring Capital<br />For Land Developments?</h2>
              <p className="text-white/70 text-lg font-light max-w-lg">Complete the form below to get started on acquiring capital for your development project.</p>
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
