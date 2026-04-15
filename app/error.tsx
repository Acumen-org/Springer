'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Home, RefreshCw, AlertOctagon } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-zinc-950 to-zinc-950 z-0" />
      <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
          <AlertOctagon className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 tracking-tight">Something went wrong</h1>
        <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          We apologize for the inconvenience. An unexpected error has occurred on this page.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => reset()} className="btn-primary group inline-flex justify-center w-full sm:w-auto px-8 py-4">
            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>
          <Link href="/" className="btn-outline group inline-flex justify-center w-full sm:w-auto px-8 py-4 border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
