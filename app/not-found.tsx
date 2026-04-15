'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/shutterstock_753807385-2560x852.webp')] bg-cover bg-center opacity-10 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-0" />
      <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 border border-brand-green/20 mb-8 shadow-[0_0_40px_rgba(42,140,45,0.2)]">
          <AlertCircle className="w-8 h-8 text-brand-green" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-200 mb-6 font-serif">Page Not Found</h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary group inline-flex justify-center w-full sm:w-auto px-8 py-4">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline group inline-flex justify-center w-full sm:w-auto px-8 py-4 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
