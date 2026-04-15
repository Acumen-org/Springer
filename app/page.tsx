'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, ShieldCheck, Handshake, MapPin, Globe, Building2, Warehouse, Hotel, Layers, TreePine, ChevronDown, DollarSign, Clock, Target, ChartBar as BarChart2, ExternalLink } from 'lucide-react';
import Tilt3D from '@/components/Tilt3D';
import AnimatedCounter from '@/components/AnimatedCounter';

const SERVICES = [
  {
    href: '/multi',
    label: 'Multi Family & Student Accommodations',
    short: 'Residential income assets in high-demand urban submarkets.',
    icon: Building2,
    num: '01',
    image: '/images/student-housing-banner(4).jpg',
  },
  {
    href: '/logistics',
    label: 'Logistics',
    short: 'Industrial and last-mile distribution driven by e-commerce growth.',
    icon: Warehouse,
    num: '02',
    image: '/images/shutterstock_753807385-2560x852.webp',
  },
  {
    href: '/mixed',
    label: 'Mixed Use',
    short: 'Live–work–play communities with diversified revenue stacks.',
    icon: Layers,
    num: '03',
    image: '/images/HPA-2018-Blog-Hennepin-Mixed-Use.jpg',
  },
  {
    href: '/hospitality',
    label: 'Hospitality',
    short: 'Value-add hotel and resort assets across primary gateway cities.',
    icon: Hotel,
    num: '04',
    image: '/images/98-982689_luxury-resort-at-night-hotel-negril-jamaica.jpg',
  },
  {
    href: '/development',
    label: 'Development Land',
    short: 'Raw and entitled land with clear path-to-value through development.',
    icon: TreePine,
    num: '05',
    image: '/images/bnr_InfrastructurePlanningandManagement.jpg',
  },
];

const STATS = [
  { value: 3,  prefix: '',  suffix: '',     label: 'Global Offices',   sub: 'HK · CN · US',         icon: Globe },
  { value: 20, prefix: '$', suffix: 'M+',   label: 'Max Equity Range', sub: 'Per investment',        icon: DollarSign },
  { value: 5,  prefix: '',  suffix: '',     label: 'Asset Classes',    sub: 'Covered globally',      icon: Target },
  { value: 5,  prefix: '',  suffix: ' Yrs', label: 'Holding Period',   sub: 'Typical max horizon',   icon: Clock },
];

const VALUES = [
  {
    icon: Handshake,
    title: 'Real Estate Investors',
    desc: 'Trusted advisors to business owners and senior executives of leading private equity firms and public and privately held companies around the world.',
  },
  {
    icon: TrendingUp,
    title: 'Strivers for Greatness',
    desc: 'We strive to outperform their highest expectations with unique insights derived from deep industry relationships and a tightly integrated global team.',
  },
  {
    icon: ShieldCheck,
    title: 'Challenge Takers',
    desc: "We take on clients' challenges as our own, flex our approach and methodology to meet their needs, and proactively share insights and information before, during, and long after an engagement is complete.",
  },
  {
    icon: BarChart2,
    title: 'Analytical Advisors',
    desc: 'We adopt a rigorous analytical process and deep respect for the numbers that are used as a baseline to drive unparalleled advice.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    const next = heroRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="top" />

      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="relative h-screen min-h-[680px] max-h-[1100px] flex flex-col justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/sh.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        </div>
        <div className="absolute inset-0 z-[1] grid-pattern opacity-[0.035] pointer-events-none" />

        <div className="absolute inset-0 z-10 pointer-events-none opacity-20 hidden md:block">
          <div className="absolute top-0 left-0 w-16 h-px bg-brand-green" />
          <div className="absolute top-0 left-0 w-px h-16 bg-brand-green" />
          <div className="absolute top-0 right-0 w-16 h-px bg-brand-green" />
          <div className="absolute top-0 right-0 w-px h-16 bg-brand-green" />
          <div className="absolute bottom-0 left-0 w-16 h-px bg-brand-green" />
          <div className="absolute bottom-0 left-0 w-px h-16 bg-brand-green" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-brand-green" />
          <div className="absolute bottom-0 right-0 w-px h-16 bg-brand-green" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="hero-text-reveal mb-6">
            <span className="inline-flex items-center gap-2.5 border-l-4 border-brand-green bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-none shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-green/90">Global Real Estate Advisory</span>
            </span>
          </div>

          <h1 className="hero-text-reveal-2 font-bold font-serif text-white tracking-tight mb-5" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: '1.02', letterSpacing: '-0.025em' }}>
            Real Estate<br />
            <span className="text-brand-green" style={{ WebkitTextStroke: '1px rgba(42,140,45,0.4)' }}>Investors.</span>
          </h1>

          <p className="hero-text-reveal-3 text-zinc-200/70 font-light leading-relaxed mb-10 max-w-sm mx-auto" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
            Trusted advisors to business owners and senior executives across global real estate markets.
          </p>

          <div className="hero-text-reveal-4 flex flex-wrap justify-center items-center gap-6">
            <Link href="/about" className="group flex items-center bg-zinc-100 hover:bg-white text-zinc-900 rounded-full pl-6 pr-2 py-2 transition-all shadow-[0_4px_24px_rgba(42,140,45,0.2)] hover:shadow-[0_8px_32px_rgba(42,140,45,0.3)]">
              <span className="text-[12px] uppercase tracking-[0.06em] font-bold mr-4">Read more</span>
              <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
            <Link href="/contact" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              Contact Us
              <div className="w-5 h-5 overflow-hidden relative">
                <ArrowRight className="w-4 h-4 -rotate-45 absolute top-1/2 left-1/2 -translate-x-[150%] translate-y-[50%] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-transform duration-300" />
                <ArrowRight className="w-4 h-4 -rotate-45 text-zinc-500 group-hover:text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden md:flex flex-col items-end gap-3 border-r border-zinc-800 pr-5">
          {['North America', 'Shanghai', 'Hong Kong'].map((loc, i) => (
            <div key={loc} className={`reveal-left stagger-${i + 1} flex items-center gap-2 text-[9px] font-semibold uppercase tracking-widest text-zinc-500/70`}>
              {loc}
              <span className="text-brand-green font-bold select-none text-xs">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ STATS BAND ═══════ */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-green/30 to-transparent absolute z-20" />
      <section className="bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-800 border-x border-zinc-800">
            {STATS.map((s, i) => (
              <div key={s.label} className={`reveal stagger-${i + 1} group px-8 py-10 relative overflow-hidden cursor-default`}>
                <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-brand-green to-brand-green-light scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-brand-green/30 bg-transparent flex items-center justify-center flex-shrink-0 mt-1 transition-all group-hover:border-brand-green group-hover:shadow-[0_0_12px_rgba(42,140,45,0.3)]">
                    <s.icon className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-[2rem] font-bold font-serif text-white leading-none tabular-nums group-hover:text-brand-green transition-colors duration-300 mb-1">
                      {s.prefix}<AnimatedCounter end={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mt-2">{s.label}</div>
                    <div className="text-[10px] text-zinc-600 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-green/30 to-transparent relative z-20" />

      {/* ═══════ ABOUT ═══════ */}
      <section id="aboutUs" className="py-24 max-sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 select-none opacity-[0.02] pointer-events-none hidden lg:block">
          <div className="w-[800px] h-[800px] rounded-full border-[120px] border-zinc-900" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-green/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="reveal-left">
              <div className="mb-10">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 text-[9px] font-bold uppercase tracking-widest text-brand-green">
                  <span className="w-8 h-[1.5px] bg-brand-green/40 mr-3 hidden sm:block" />
                  About Springer Capital
                </span>
              </div>
              <h2 className="text-[2.75rem] lg:text-[3.25rem] font-bold font-serif text-zinc-900 mb-8 tracking-tight" style={{ lineHeight: '1.05' }}>
                Your Full Service<br />
                <span className="text-brand-green">Real Estate Advisor</span>
              </h2>
              <div className="space-y-6 text-zinc-500 font-medium leading-[1.85] text-[15px]">
                <p>
                  Springer Capital is a real estate investment and advisory group with operations in Hong Kong, China, and North America. Its founding partners are focused on world-class real estate opportunities and serve at the intersection of real estate direct investment and real estate advisory services.
                </p>
                <p>
                  We leverage our breadth of global real estate investment experience with sponsors and our access to capital sources looking for yield, growth, and success.
                </p>
                <p>
                  Springer Capital offers full advisory service to its clients, ranging from optimal tax and entity structuring, cash management, accounting, asset & property management, work outs and investment reporting.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <Link href="/about" className="group bg-[#2a8c2d] hover:bg-[#227224] text-white font-medium text-sm px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all shadow-[0_4px_16px_rgba(42,140,45,0.2)] hover:shadow-[0_6px_20px_rgba(42,140,45,0.3)]">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/team" className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-800 text-sm font-medium transition-colors">
                  Meet the Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="reveal-right">
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { abv: 'HK', city: 'Hong Kong' },
                  { abv: 'CN', city: 'Shanghai' },
                  { abv: 'US', city: 'North America' },
                ].map((loc) => (
                  <span key={loc.city} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-zinc-200 rounded-full text-[13px] font-semibold text-zinc-700 shadow-sm">
                    <span className="text-[9px] font-bold text-zinc-400">{loc.abv}</span>
                    {loc.city}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {VALUES.map((v, i) => (
                  <div key={v.title} className={`reveal stagger-${i + 1} flex items-start flex-col gap-4 group cursor-default`}>
                    <div className="w-10 h-10 rounded-lg bg-brand-green-[0.08] bg-[#f2f8f2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e6f2e6] transition-colors">
                      <v.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-zinc-900 mb-2">{v.title}</h3>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/35 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-green" />
                <span className="section-label bg-brand-green/10 border-brand-green/20 text-brand-green">Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-white tracking-tight" style={{ lineHeight: '1.06' }}>
                Primary Advisory<br /><span className="text-brand-green">Services</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Five asset classes. Two continents. One integrated capital advisory platform.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 md:pb-0">
            {SERVICES.map((svc, i) => (
              <Link
                key={svc.href}
                href={svc.href}
                className={`reveal stagger-${i + 1} group relative overflow-hidden flex flex-col justify-between min-h-[360px] md:min-h-[420px] snap-center shrink-0 w-[85vw] md:w-auto ${i < 3 ? 'md:flex-1 md:basis-[30%]' : 'md:flex-[1.5] md:basis-[48%]'}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center brightness-50 group-hover:brightness-65 group-hover:scale-[1.02] transition-all duration-500"
                  style={{ backgroundImage: `url('${svc.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <span className="relative z-10 p-6 text-[11px] font-bold tracking-[0.3em] text-brand-green/70">{svc.num}</span>
                
                <div className="relative z-10 p-6 flex justify-between items-end mt-auto">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-white relative inline-block mb-1">
                      {svc.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-500" />
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE DO ═══════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 line-pattern pointer-events-none opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 reveal">
            <span className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-zinc-900 mt-5 tracking-tight" style={{ lineHeight: '1.08' }}>
              What <span className="mx-4 text-brand-green/30 font-sans font-light">|</span> We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Active Market Dialogue',
                body: 'We maintain active dialogue with real estate investors covering multi-family, logistics, mixed use, hospitality, and development land projects across Asia and US.',
              },
              {
                num: '02',
                title: 'Innovative Financing Solutions',
                body: "Design innovative financing solutions including equity, acquisition financing, dividend recapitalization financing, and structured capital that meet our client's needs while optimizing terms.",
              },
              {
                num: '03',
                title: 'Data-Centric Strategies',
                body: 'Leverage our financial models and data-centric strategies to support clients with actionable and measurable solution.',
              },
            ].map((step, i) => (
              <div key={step.num} className={`reveal stagger-${i + 1} group relative bg-white rounded-none p-8 border-t-2 border-brand-green/0 hover:border-brand-green shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default overflow-hidden`}>
                <div className="absolute bottom-1 right-2 text-[6rem] font-bold font-serif text-zinc-50 group-hover:text-brand-green/10 transition-colors leading-none select-none z-0">{step.num}</div>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-zinc-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TEAM ═══════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.15] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-px bg-brand-green" />
                <span className="section-label">Leadership</span>
              </div>
              <h2 className="text-4xl lg:text-[3.5rem] font-bold font-serif text-zinc-900 mb-6 tracking-tight" style={{ lineHeight: '1.08' }}>
                Meet Our<br /><span className="text-brand-green">Management</span>
              </h2>
              <p className="text-zinc-600 text-[17px] leading-[1.8] mb-10 max-w-sm">
                Springer Capital delivers ideas and solutions that make organizations better. Our leadership team brings decades of cross-market expertise.
              </p>
              <Link href="/team" className="btn-outline group text-[15px] px-8 py-4 inline-flex self-start">
                Full Bios
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right flex justify-start lg:-ml-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-[650px]">
                {[
                  { name: 'Patrick Kelly',   title: 'Investments Director', img: '/images/patrick2.png',  offset: '' },
                  { name: 'Isaac Rosenthal', title: 'Operations Director',  img: '/images/isaac2.png',    offset: 'sm:mt-16' },
                ].map((m) => (
                  <Link href="/team" key={m.name} className={`group flex-1 ${m.offset}`}>
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-zinc-100 shadow-[0_24px_50px_rgba(0,0,0,0.08)] border-[6px] md:border-[10px] border-white hover:border-transparent ring-2 ring-transparent ring-offset-0 group-hover:shadow-[0_32px_80px_rgba(42,140,45,0.15)] transition-all duration-500">
                      <Image src={m.img} alt={m.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-bold text-base md:text-lg tracking-wide">{m.name}</p>
                          <p className="text-brand-green text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-1.5">{m.title}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INVESTMENT CRITERIA ═══════ */}
      <section className="py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-64 bg-brand-green/[0.07] blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-brand-green" />
                <span className="section-label bg-brand-green/10 border-brand-green/20 text-brand-green">Investment Criteria</span>
              </div>
              <h2 className="text-4xl font-bold font-serif text-white mb-6 tracking-tight" style={{ lineHeight: '1.08' }}>
                How We <span className="text-brand-green">Deploy Capital</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                Disciplined parameters that maximise risk-adjusted returns for our investor base.
              </p>
              <Link href="/contact" className="btn-primary group text-sm px-7 py-3.5 inline-flex">
                Start a Conversation
                <ExternalLink className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="reveal-right">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative" style={{ boxShadow: '0 2px 8px rgba(42,140,45,0.4)' }}>
                <div className="h-[3px] bg-gradient-to-r from-brand-green to-brand-green-light" />
                {[
                  { label: 'Structure',     value: 'Primarily LP equity' },
                  { label: 'Deal Type',     value: 'One-off investments' },
                  { label: 'Equity Range',  value: '$2M — $20M USD' },
                  { label: 'Hold Period',   value: '3 — 5 years' },
                  { label: 'Geography',     value: 'High-growth cities' },
                ].map((row, i) => (
                  <div key={row.label} className={`flex items-center justify-between px-7 py-5 ${i % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-950'} group hover:bg-zinc-800/80 transition-colors cursor-default`}>
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">{row.label}</span>
                    <span className={`text-sm font-semibold transition-colors ${(row.label === 'Equity Range' || row.label === 'Hold Period') ? 'text-brand-green' : 'text-white group-hover:text-brand-green'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA STRIP ═══════ */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-8" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.5), rgba(255,255,255,0.5) 1.5px, transparent 1.5px, transparent 14px)' }} />
        <div className="floating-shape shape-ring w-96 h-96 -top-24 -right-24 opacity-15" style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
        <div className="floating-shape shape-ring w-[32rem] h-[32rem] -bottom-32 -left-32 opacity-10" style={{ borderColor: 'rgba(255,255,255,0.25)', animationDelay: '-6s' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="absolute -top-12 -left-10 text-[10rem] font-serif text-white/15 leading-none select-none pointer-events-none">“</span>
          <div className="flex items-center justify-center gap-3 mb-7">
            <MapPin className="w-4 h-4 text-white/70" />
            <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.25em]">HK · Shanghai · North America</span>
          </div>
          <h2 className="relative z-10 text-3xl md:text-5xl lg:text-5xl font-bold font-serif text-white mb-5 tracking-tight" style={{ lineHeight: '1.08' }}>
            Ready to discuss your investment goals?
          </h2>
          <p className="text-white/80 text-lg font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Connect with the Springer Capital team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-8 py-4 rounded-lg text-sm hover:bg-zinc-50 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="group relative inline-flex items-center gap-2 border border-white/50 text-white/90 hover:text-white hover:border-white font-medium px-8 py-4 rounded-lg text-sm overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
