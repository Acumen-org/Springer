import React from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, Globe, Users, TrendingUp, Mail } from 'lucide-react';

export const metadata = { title: 'Careers', description: 'Join the Springer Capital team' };


export default function CareerPage() {
  return (
    <>
      <section className="relative pt-36 pb-28 bg-zinc-950 overflow-hidden page-banner">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/98 via-zinc-950/75 to-zinc-950/50 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />
        <div className="banner-line z-10" />
        <div className="floating-shape shape-ring w-28 h-28 top-1/4 right-20 opacity-15" />
        <div className="floating-shape shape-sq w-10 h-10 bottom-1/3 right-1/3 opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="hero-text-reveal flex items-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Join Us</span>
          </div>
          <h1 className="hero-text-reveal-2 text-5xl md:text-6xl font-bold font-serif mb-6 tracking-tight" style={{ lineHeight: 1.03 }}>
            Careers at <span className="text-brand-green">Springer</span>
          </h1>
          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 max-w-2xl font-light leading-relaxed">
            Join a cutting-edge team dedicated to global real estate excellence.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-20 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Global Reach', body: 'Work across Hong Kong, Shanghai, and North American markets with truly cross-border mandates.' },
              { icon: Users, title: 'Collaborative Culture', body: 'Small team, big impact. You\'ll work directly with founding partners on every engagement.' },
              { icon: TrendingUp, title: 'Real Career Growth', body: 'Exposure to the full real estate lifecycle — from deal sourcing to investor relations and operations.' },
            ].map((item, i) => (
              <div key={i} className={`reveal stagger-${i + 1} flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-brand-green/20 transition-all`}>
                <div className="w-11 h-11 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="py-28 bg-white relative overflow-hidden min-h-[40vh]">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label mb-5 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              Openings
            </span>
            <h2 className="text-4xl font-bold font-serif text-zinc-900 mt-5 tracking-tight">Current Openings</h2>
          </div>

          <div className="reveal stagger-1">
            <div className="card-premium p-12 md:p-16 text-center">
              <div className="w-20 h-20 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mx-auto mb-8">
                <Briefcase className="w-10 h-10 text-zinc-300" strokeWidth={1.2} />
              </div>
              <div className="h-0.5 w-12 bg-gradient-to-r from-brand-green to-brand-green-light rounded-full mx-auto mb-6" />
              <p className="text-zinc-500 italic text-lg leading-relaxed max-w-md mx-auto">
                We currently don&apos;t have any openings available. Check back soon for future opportunities, or reach out to our team directly.
              </p>
            </div>
          </div>

          <div className="mt-12 reveal stagger-2 text-center">
            <p className="text-zinc-500 text-sm mb-6">Interested in joining us in the future? Send us your resume and we&apos;ll keep you in mind.</p>
            <Link href="/contact" className="btn-outline group inline-flex">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us Openly
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
