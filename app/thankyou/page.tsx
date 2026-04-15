import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CircleCheck as CheckCircle2, Mail } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-green/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="glow-line absolute top-0 left-0 right-0" />
      <div className="floating-shape shape-ring w-32 h-32 top-16 right-20 opacity-15" />
      <div className="floating-shape shape-ring w-20 h-20 bottom-20 left-16 opacity-10" style={{ animationDelay: '-5s' }} />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-brand-green/10 border border-brand-green/25 flex items-center justify-center mx-auto mb-8 animate-float shadow-[0_0_40px_rgba(42,140,45,0.2)]">
          <CheckCircle2 className="w-12 h-12 text-brand-green" strokeWidth={1.5} />
        </div>

        <div className="h-0.5 w-16 bg-gradient-to-r from-brand-green to-brand-green-light rounded-full mx-auto mb-8" />

        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-5 tracking-tight">
          Thank you for contacting <span className="text-brand-green">us!</span>
        </h1>
        <p className="text-zinc-400 text-lg font-light mb-6 leading-relaxed">
          We've received your message and will get back to you as soon as possible.
        </p>

        {/* Response time indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-12">
          <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-brand-green text-xs font-semibold">Expected reply within 24–48 hours</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary group inline-flex px-10 py-4">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Click to go back.
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-md transition-all text-sm font-medium">
            <Mail className="w-4 h-4" />
            Send another message
          </Link>
        </div>
      </div>
    </section>
  );
}
