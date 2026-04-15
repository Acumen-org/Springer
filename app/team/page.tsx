import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Globe, Briefcase, Building2, Users } from 'lucide-react';

export const metadata = { title: 'Leadership', description: 'Meet the Springer Capital management team' };


const members = [
  {
    name: 'Patrick Kelly',
    role: 'Investments Director',
    image: '/images/patrick2.png',
    location: 'Shanghai · Vancouver · Chicago',
    tenure: 'In China since 1988',
    credentials: [
      { label: 'Role', value: 'GM, Dalian Wanda Americas' },
      { label: 'Advisory', value: 'Mr Wang Jianlin, Chairman Dalian Wanda' },
      { label: 'Advisory', value: 'Mr Richard Cheung, Sheshan International Golf' },
      { label: 'Previous', value: 'Cushman & Wakefield — Head of Developer Services, Shanghai' },
    ],
    bio: [
      'Patrick Kelly is a real estate professional, investor and businessman and has extensive experience in both the Chinese and North American markets. Over the years Patrick has actively been involved in many aspects of the real estate lifecycle including acquisitions, financing, development, repositioning, marketing, leasing, sales, and operations.',
      'He frequently works as an advisor to international real estate investors, including Mr Wang Jianlin, Chairman of Dalian Wanda, where he served as GM for the Americas acquisitions team for Dalian Wanda Commercial Properties and for Mr Richard Cheung, Chairman of Sheshan International Golf Club and Estate, home of Asia\'s major the WGC HSBC Champions as Director of International Development. Previously, Patrick was with Cushman and Wakefield as Head of Developer Services based in their Shanghai office.',
      'Patrick first went to China in 1988 and was back forth several times before moving from Vancouver, settling in Shanghai in 1997. He speaks Chinese with an expat\'s accent and prefers English with Canadian spellings. He is married with two children.',
    ],
  },
  {
    name: 'Isaac Rosenthal',
    role: 'Operations Director',
    image: '/images/isaac2.png',
    location: 'Shanghai',
    tenure: 'Entrepreneur since age 23',
    credentials: [
      { label: 'Founded', value: 'Link People — RE Leasing & Management' },
      { label: 'Scale', value: '300 apartments · 1,500 tenants' },
      { label: 'Exit', value: 'Sold to Dothink Group (HK Listed, Top 50)' },
      { label: 'Previous', value: 'Capital Fundraising, Dothink Group' },
    ],
    bio: [
      'Isaac Rosenthal, operating director of Springer Capital is responsible for investor relations, corporate strategy, internal SOPs and IT. Isaac is a serial entrepreneur who started a real estate leasing and management company Link People at the age of 23. Link People had 300 share flat apartments with 1500 tenants under management rented to young expat professionals in downtown Shanghai. In 2016, Link People was sold to Dothink Group, a top 50, Hong Kong listed Chinese real estate developer. Since 2017, Isaac, focused on capital fundraising and real estate acquisition projects for Dothink before joining Springer Capital.',
    ],
    imagePosition: 'object-top',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-28 bg-zinc-950 overflow-hidden page-banner">
        <div className="absolute inset-0 bg-[url('/images/14.jpg')] bg-cover bg-center opacity-10 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/98 via-zinc-950/80 to-zinc-950/60 z-0" />
        <div className="absolute inset-0 grid-pattern opacity-[0.05] z-0" />
        <div className="banner-line z-10" />
        <div className="floating-shape shape-ring w-28 h-28 top-1/3 right-20 opacity-15" />
        <div className="floating-shape shape-sq w-10 h-10 top-1/4 right-1/3 opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="hero-text-reveal flex items-center gap-3 mb-7">
            <span className="w-10 h-px bg-brand-green" />
            <span className="section-label text-brand-green/80 border-brand-green/20 bg-brand-green/10">Leadership</span>
          </div>
          <h1 className="hero-text-reveal-2 text-5xl md:text-6xl font-bold font-serif mb-6 tracking-tight" style={{ lineHeight: 1.03 }}>
            Meet Our <span className="text-brand-green">Management</span>
          </h1>
          <p className="hero-text-reveal-3 text-xl text-zinc-300/80 max-w-2xl font-light leading-relaxed">
            Springer Capital delivers ideas and solutions that make organizations better. Our arsenal of capital advisory services has been tailored to best fit the needs of our clients today and for the future.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            {[
              { icon: Globe, label: 'Multi-Market Experience', sub: 'Asia · North America' },
              { icon: Briefcase, label: 'Cross-Sector Expertise', sub: 'Investment · Advisory · Operations' },
              { icon: Building2, label: 'Full Lifecycle Depth', sub: 'Acquisition to disposition' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-7">
                <div className="w-10 h-10 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-800">{item.label}</p>
                  <p className="text-xs text-zinc-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {members.map((member, idx) => (
            <div key={member.name} className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-start reveal ${idx % 2 === 1 ? '' : ''}`}>

              {/* Portrait column */}
              <div className={`md:col-span-4 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative">
                  <div className={`absolute -bottom-5 ${idx % 2 === 1 ? '-left-5' : '-right-5'} w-full h-full rounded-2xl border border-brand-green/10 z-0`} />
                  <div className={`absolute -bottom-10 ${idx % 2 === 1 ? '-left-10' : '-right-10'} w-full h-full rounded-2xl bg-zinc-50 z-0`} />
                  <div className="relative z-10 rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-100 shadow-[0_24px_64px_rgba(0,0,0,0.14)]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.imagePosition ?? ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="mt-8 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-0.5 bg-brand-green" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green">{member.role}</span>
                    </div>
                    <h2 className="text-3xl font-bold font-serif text-zinc-900 tracking-tight mb-3">{member.name}</h2>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-brand-green" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio column */}
              <div className={`md:col-span-8 md:pt-4 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                {/* Credentials strip */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {member.credentials.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">{c.label}</p>
                        <p className="text-xs font-semibold text-zinc-700 leading-snug">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-premium p-8 lg:p-10">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-brand-green to-brand-green-light mb-8 rounded-full" />
                  {member.bio.map((para, i) => (
                    <p key={i} className="text-base text-zinc-600 leading-[1.95] mb-5 last:mb-0">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-green/[0.07] blur-3xl rounded-full pointer-events-none" />
        <div className="glow-line absolute top-0 left-0 right-0" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mx-auto mb-6">
            <Users className="w-5 h-5 text-brand-green" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-white mb-4 tracking-tight">Work With Our Team</h2>
          <p className="text-zinc-400 mb-10 font-light max-w-xl mx-auto">Connect with our leadership to discuss your real estate investment and advisory needs.</p>
          <Link href="/contact" className="btn-primary group inline-flex px-10 py-4">
            Get In Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
