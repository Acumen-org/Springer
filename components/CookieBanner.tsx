'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie, ShieldCheck, Settings, CheckCircle2 } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Default analytics toggled off in the preferences view for compliance
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('sc_cookie_consent');
    if (!accepted) {
      const timer = setTimeout(() => {
        setVisible(true);
        setAnimating(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('sc_cookie_consent', 'accepted_all');
    localStorage.setItem('sc_cookie_analytics', 'true');
    dismiss();
  };

  const declineAll = () => {
    localStorage.setItem('sc_cookie_consent', 'declined_all');
    localStorage.setItem('sc_cookie_analytics', 'false');
    dismiss();
  };

  const savePreferences = () => {
    localStorage.setItem('sc_cookie_consent', 'custom');
    localStorage.setItem('sc_cookie_analytics', analyticsEnabled ? 'true' : 'false');
    dismiss();
  };

  const dismiss = () => {
    setAnimating(false);
    setTimeout(() => setVisible(false), 420);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-4 sm:pb-6"
      style={{
        transform: animating ? 'translateY(0)' : 'translateY(100%)',
        opacity: animating ? 1 : 0,
        transition: 'transform 0.42s cubic-bezier(0.16,1,0.3,1), opacity 0.42s ease',
        willChange: 'transform, opacity',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_-4px_40px_rgba(0,0,0,0.35)] border border-zinc-700/60">
          {/* Green accent top bar */}
          <div className="h-0.5 w-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green" />

          {!showPreferences ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-brand-green" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  We value your privacy
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  We use cookies to improve your browsing experience, analyse site traffic, and personalise content. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{' '}
                  <Link href="/privacy" className="text-brand-green hover:text-brand-green-light underline underline-offset-2 transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 sm:flex-none px-3 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors"
                >
                  Preferences
                </button>
                <button
                  onClick={declineAll}
                  className="flex-1 sm:flex-none px-3 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold bg-brand-green hover:bg-brand-green-light text-white rounded-lg transition-colors shadow-[0_4px_12px_rgba(42,140,45,0.35)] hover:shadow-[0_6px_20px_rgba(42,140,45,0.5)]"
                >
                  Accept All
                </button>
                <button
                  onClick={dismiss}
                  className="hidden sm:block p-2 text-zinc-600 hover:text-white transition-colors rounded-lg hover:bg-zinc-800"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-5 sm:p-6 bg-zinc-900">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-brand-green" />
                  <h3 className="text-white font-semibold text-sm">Cookie Preferences</h3>
                </div>
                <button onClick={() => setShowPreferences(false)} className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Essential Cookies Row */}
                <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-700/50">
                  <div>
                    <h4 className="text-white text-xs font-semibold mb-1 flex items-center gap-1.5">
                      Strictly Necessary <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    </h4>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">Required for the website to function securely and properly. These cannot be disabled.</p>
                  </div>
                  <div className="text-brand-green text-[10px] font-bold uppercase tracking-wider mt-1 px-2.5 py-1.5 bg-brand-green/10 rounded border border-brand-green/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Active
                  </div>
                </div>

                {/* Analytics Cookies Row */}
                <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div>
                    <h4 className="text-white text-xs font-semibold mb-1">Analytics & Performance</h4>
                    <p className="text-zinc-500 text-[11px] leading-relaxed">Help us improve by allowing us to monitor traffic and usage metrics anonymously.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={analyticsEnabled} 
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)} 
                    />
                    <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-green"></div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-4">
                <button onClick={() => setShowPreferences(false)} className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-lg transition-colors">
                  Back
                </button>
                <button onClick={savePreferences} className="px-5 py-2.5 text-xs font-semibold bg-brand-green hover:bg-brand-green-light text-white rounded-lg transition-colors shadow-[0_4px_12px_rgba(42,140,45,0.35)]">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
