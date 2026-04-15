import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

export const metadata = { title: 'Contact Us', description: 'Get in touch with Springer Capital' };


export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-28 bg-zinc-950 overflow-hidden page-banner">
        <div className="absolute inset-0 bg-[url('/images/ok4.jpeg')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/98 via-zinc-950/85 to-zinc-950/70 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />
        <div className="banner-line z-10" />
        <div className="floating-shape shape-ring w-24 h-24 top-1/3 right-24 opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="hero-text-reveal flex items-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Reach Out</span>
          </div>
          <h1 className="hero-text-reveal-2 text-5xl md:text-6xl font-bold font-serif mb-6 tracking-tight" style={{ lineHeight: 1.03 }}>
            Contact <span className="text-brand-green">Us</span>
          </h1>
          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 font-light max-w-xl leading-relaxed">
            We&apos;d love to hear from you. Reach out and we&apos;ll respond promptly.
          </p>
        </div>
      </section>

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <div className="reveal-left">
              <span className="section-label mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Get In Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-serif text-zinc-900 mb-6 mt-5 tracking-tight">
                <span className="text-brand-green">C</span>ontact the Springer Capital Team
              </h2>
              <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
                We&apos;d love to hear from you! If you want to connect with us, please fill out the contact form below.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  {
                    icon: Mail,
                    title: 'Email Address',
                    lines: ['contact@springer.capital'],
                    isEmail: true,
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    lines: ['+1 224 216 3685', '+86 136 6180 3041'],
                  },
                  {
                    icon: MapPin,
                    title: 'North America Office',
                    lines: ['430 Beverly Drive', 'Wilmette, Illinois 60091'],
                  },
                  {
                    icon: Globe,
                    title: 'Asia Office',
                    lines: ['Kangding East Road 45', 'Jingan District, Shanghai 200020'],
                  },
                ].map((item, i) => (
                  <div key={item.title} className={`reveal stagger-${i + 1} flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-brand-green/20 transition-all duration-300 group`}>
                    <div className="w-11 h-11 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/12 transition-colors">
                      <item.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.18em] mb-2">{item.title}</h3>
                      {item.lines.map((line, j) => item.isEmail ? (
                        <a key={j} href={`mailto:${line}`} className="text-brand-green hover:text-brand-green-light transition-colors font-semibold text-base">{line}</a>
                      ) : (
                        <p key={j} className="text-zinc-700 text-sm font-medium leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time note */}
              <div className="flex items-center gap-3 p-4 bg-brand-green/5 rounded-xl border border-brand-green/15">
                <Clock className="w-4 h-4 text-brand-green flex-shrink-0" />
                <p className="text-sm text-zinc-600 font-medium">We typically respond within 24–48 business hours.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal-right">
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(42,140,45,0.25) 0%, rgba(71,137,63,0.08) 50%, transparent 100%)' }} />
                <div className="relative bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.10)] p-8 md:p-12">
                  <div className="h-1 bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green rounded-full mb-8" />
                  <h2 className="text-2xl font-bold text-zinc-900 mb-2 font-serif text-center tracking-tight">How May We Help You?</h2>
                  <p className="text-center text-zinc-400 text-sm mb-8">Fill in your details and we&apos;ll be in touch.</p>

                  <form action="/api/contact" method="POST" className="space-y-5">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your name', title: 'Please enter your name (at least 2 characters)' },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email', title: 'Please enter a valid email address' },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter phone number', title: 'Please enter a valid phone number (at least 10 characters)' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          className="w-full px-4 py-3.5 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all text-zinc-800 placeholder:text-zinc-300 bg-zinc-50/80 focus:bg-white text-sm"
                          placeholder={field.placeholder}
                          title={field.title}
                        />
                      </div>
                    ))}

                    {/* SMS Consent — required for A2P 10DLC — must be optional, never pre-checked */}
                    <div className="flex items-start gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
                      <input
                        type="checkbox"
                        id="sms_consent"
                        name="sms_consent"
                        // NO "required" attribute — SMS consent cannot block form submission
                        className="mt-0.5 w-4 h-4 rounded border-zinc-300 accent-[#2a8c2d] flex-shrink-0 cursor-pointer"
                      />
                      <label htmlFor="sms_consent" className="text-xs text-zinc-600 leading-relaxed cursor-pointer">
                        By providing your phone number and checking this box, you consent to receive 
                        SMS text messages from Springer Capital LLC regarding your inquiry. 
                        Message frequency may vary. Message &amp; data rates may apply. 
                        Reply STOP to opt out. Reply HELP for assistance. 
                        See our{' '}
                        <Link href="/privacy" className="text-brand-green underline underline-offset-2 hover:text-brand-green-light">
                          Privacy Policy
                        </Link>.{' '}
                        <span className="text-zinc-400">(Optional)</span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 mb-2">Your Message</label>
                      <textarea
                        name="comment"
                        rows={5}
                        required
                        className="w-full px-4 py-3.5 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all resize-none text-zinc-800 placeholder:text-zinc-300 bg-zinc-50/80 focus:bg-white text-sm"
                        placeholder="Describe your investment goals or inquiry…"
                        title="Please enter your message (at least 10 characters)"
                      />
                    </div>

                    {/* Mandatory Consent — required for SES / GDPR / CAN-SPAM */}
                    <div className="flex items-start gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-0.5 w-4 h-4 rounded border-zinc-300 text-brand-green focus:ring-brand-green accent-[#2a8c2d] flex-shrink-0 cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-zinc-600 leading-relaxed cursor-pointer">
                        I agree to the{' '}
                        <Link href="/privacy" className="text-brand-green underline underline-offset-2 hover:text-brand-green-light">
                          Privacy Policy
                        </Link>{' '}
                        and consent to Springer Capital contacting me regarding my inquiry. I understand I may
                        withdraw consent at any time via the unsubscribe link in any future email.{' '}
                        <span className="text-red-500 font-bold">*</span>
                      </label>
                    </div>

                    {/* Optional Marketing Opt-In — separate from transactional consent */}
                    <div className="flex items-start gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
                      <input
                        type="checkbox"
                        id="marketing"
                        name="marketing_opt_in"
                        className="mt-0.5 w-4 h-4 rounded border-zinc-300 text-brand-green focus:ring-brand-green accent-[#2a8c2d] flex-shrink-0 cursor-pointer"
                      />
                      <label htmlFor="marketing" className="text-xs text-zinc-600 leading-relaxed cursor-pointer">
                        I would also like to receive occasional updates, market insights, and news from
                        Springer Capital. I can unsubscribe at any time. <span className="text-zinc-400">(Optional)</span>
                      </label>
                    </div>

                    {/* Inline privacy notice */}
                    <p className="text-[10px] text-zinc-400 leading-relaxed">
                      By submitting this form, your information will be used solely to respond to your inquiry
                      in accordance with our{' '}
                      <Link href="/privacy" className="text-brand-green hover:underline">Privacy Policy</Link>.
                      We do not sell or share your personal data with third parties for their marketing purposes.
                    </p>

                    <input type="hidden" name="_next" value="https://springer.capital/thankyou" />
                    <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                    <button type="submit" className="btn-primary w-full justify-center group py-4">
                      Submit
                      <Send className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
