import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronUp, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-zinc-900 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(42,140,45,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(42,140,45,0.05) 0%, transparent 40%)',
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          {/* Top section: brand + tagline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-10 border-b border-zinc-800">
            <div>
              <Link href="/" className="group flex items-baseline gap-1.5 select-none">
                <span className="text-5xl font-bold font-serif text-brand-green tracking-tighter" style={{ letterSpacing: '-0.02em' }}>
                  Springer
                </span>
                <span className="text-5xl font-serif text-zinc-400 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
                  Capital
                </span>
              </Link>
              <p className="mt-3 text-zinc-500 text-sm max-w-xs leading-relaxed">
                Premium real estate investment and advisory across global markets.
              </p>
              <div className="mt-6 w-16 h-px bg-zinc-800" />
            </div>
            <Link href="/contact" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-brand-green hover:text-white border border-brand-green/40 hover:border-brand-green hover:bg-brand-green/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Navigation</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/team', label: 'Our Team' },
                  { href: '/multi', label: 'Multi-family & Student' },
                  { href: '/logistics', label: 'Logistics' },
                  { href: '/mixed', label: 'Mixed Use' },
                  { href: '/hospitality', label: 'Hospitality' },
                  { href: '/development', label: 'Development Land' },
                  { href: '/career', label: 'Careers' },
                  { href: '/contact', label: 'Contact' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-zinc-400 hover:text-brand-green text-sm transition-colors duration-200 py-0.5 flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all flex-shrink-0 text-brand-green">→</span>
                    <span className="-ml-4 group-hover:ml-0 transition-all">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Contact Info</h4>
              <ul className="space-y-5">
                <li>
                  <a href="mailto:contact@springer.capital" className="flex items-start gap-3 group">
                    <div className="w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-brand-green group-hover:bg-brand-green/10 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-brand-green" />
                    </div>
                    <span className="text-zinc-400 hover:text-white text-sm transition-colors leading-relaxed mt-1">
                      contact@springer.capital
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                  <div className="text-zinc-400 text-sm leading-relaxed mt-1">
                    <p>+1 224-216-3685</p>
                    <p>+86 136-6180-3041</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Addresses */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Locations</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                  <div className="text-zinc-400 text-sm leading-relaxed">
                    <p className="text-zinc-300 font-medium text-xs uppercase tracking-wide mb-1">North America</p>
                    <p>430 Beverly Drive</p>
                    <p>Wilmette, Illinois 60091 <span className="text-zinc-600 text-[10px] ml-1">(GMT-5)</span></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                  <div className="text-zinc-400 text-sm leading-relaxed">
                    <p className="text-zinc-300 font-medium text-xs uppercase tracking-wide mb-1">Asia</p>
                    <p>Kangding East Road 45</p>
                    <p>Jingan District, Shanghai 200020 <span className="text-zinc-600 text-[10px] ml-1">(GMT+8)</span></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright strip */}
      <section className="bg-black py-5 text-sm text-zinc-600 border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</span>
            <span className="hidden sm:inline text-zinc-600">·</span>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <span className="text-zinc-600">·</span>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
          <div className="font-serif text-brand-green/80 font-bold text-sm tracking-[0.2em] uppercase">
            Springer Capital
          </div>
        </div>
      </section>

      {/* Back to top */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 w-8 h-8 bg-zinc-900 border border-zinc-700 text-zinc-500 flex items-center justify-center rounded-full hover:border-brand-green hover:text-brand-green transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </>
  );
}
