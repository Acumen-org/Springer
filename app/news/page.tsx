'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Newspaper } from 'lucide-react';



export default function NewsPage() {
  return (
    <>
      <section className="relative pt-36 pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Insights</span>
            <span className="w-10 h-px bg-brand-green" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 tracking-tight">
            Real Estate <span className="text-brand-green">News</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300/80 max-w-2xl mx-auto font-light leading-relaxed">
            We understand that information is crucial to the real estate marketplace.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-10 md:p-14 text-center shadow-sm">
            <div className="w-16 h-16 bg-brand-green/10 border border-brand-green/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Newspaper className="w-7 h-7 text-brand-green" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-zinc-900 mb-6 tracking-tight">Market Updates & Announcements</h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
              It is our job to be a resource of information for our clients. Please check back frequently as we will have real estate news updates both for Springer Capital Commercial Real Estate, and the marketplace in general.
            </p>
            
            <div className="mt-10 pt-10 border-t border-zinc-200">
              <p className="text-zinc-500 text-sm mb-6">Currently, there are no new announcements.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-green transition-colors text-sm">
                Join our Mailing List <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
