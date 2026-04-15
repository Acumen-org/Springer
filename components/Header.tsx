'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const ABOUT_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/team',  label: 'Management' },
];

const PRODUCT_LINKS = [
  { href: '/multi',        label: 'Multi Family & Student' },
  { href: '/logistics',   label: 'Logistics' },
  { href: '/mixed',       label: 'Mixed Use' },
  { href: '/hospitality', label: 'Hospitality' },
  { href: '/development', label: 'Development Land' },
];

export default function Header() {
  const [isOpen, setIsOpen]               = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled]           = useState(false);
  const pathname                           = usePathname();
  const navRef                             = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Derive state to avoid cascading re-renders on route change
  if (pathname !== prevPathname) {
    setIsOpen(false);
    setActiveDropdown(null);
    setPrevPathname(pathname);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.08)]' : ''}`}>
      <div className={`absolute top-0 w-full h-px bg-brand-green transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-[64px]' : 'h-[84px]'}`}>

          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-1.5 select-none">
            <span className="text-[22px] font-bold font-serif text-brand-green tracking-tight transition-opacity duration-200 group-hover:opacity-85" style={{ letterSpacing: '-0.01em' }}>
              Springer
            </span>
            <span className="text-[22px] font-serif text-zinc-400 tracking-tight transition-opacity duration-200 group-hover:opacity-85">
              Capital
            </span>
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden md:flex items-center gap-1">
            <Link href="/" className={`nav-link px-3 py-2 text-[12px] tracking-[0.06em] uppercase font-semibold transition-colors ${isActive('/') ? 'text-brand-green' : 'text-zinc-600 hover:text-brand-green'}`}>
              Home
            </Link>

            {/* About dropdown */}
            <DropdownMenu 
              label="About" 
              items={ABOUT_LINKS} 
              pathname={pathname} 
              isOpen={activeDropdown === 'about'}
              onToggle={() => setActiveDropdown(v => v === 'about' ? null : 'about')}
            />

            {/* Products dropdown */}
            <DropdownMenu 
              label="Products" 
              items={PRODUCT_LINKS} 
              pathname={pathname} 
              wide 
              isOpen={activeDropdown === 'products'}
              onToggle={() => setActiveDropdown(v => v === 'products' ? null : 'products')}
            />

            <Link href="/career" className={`nav-link px-3 py-2 text-[12px] tracking-[0.06em] uppercase font-semibold transition-colors ${isActive('/career') ? 'text-brand-green' : 'text-zinc-600 hover:text-brand-green'}`}>
              Careers
            </Link>

            <Link href="/contact" className="ml-3 bg-brand-green text-white text-[12px] tracking-[0.06em] uppercase font-semibold px-6 py-2.5 rounded-full hover:shadow-[0_0_0_3px_rgba(42,140,45,0.15)] transition-all duration-300">
              Contact
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-brand-green hover:bg-zinc-50 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                <X className="w-5 h-5" />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
                <Menu className="w-5 h-5" />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 backdrop-blur-sm border-b border-zinc-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            <Link href="/" className="flex items-center px-3 py-2.5 rounded-lg text-[14px] font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50 transition-colors">
              Home
            </Link>

            <MobileDropdown label="About" items={ABOUT_LINKS} active={activeDropdown === 'about'} toggle={() => setActiveDropdown((v) => v === 'about' ? null : 'about')} />
            <MobileDropdown label="Products" items={PRODUCT_LINKS} active={activeDropdown === 'products'} toggle={() => setActiveDropdown((v) => v === 'products' ? null : 'products')} />

            <Link href="/career" className="flex items-center px-3 py-2.5 rounded-lg text-[14px] font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50 transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="flex items-center px-3 py-2.5 rounded-lg text-[14px] font-medium text-brand-green border border-brand-green/30 hover:bg-brand-green hover:text-white transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── Desktop dropdown ─── */
function DropdownMenu({ label, items, pathname, wide = false, isOpen, onToggle }: {
  label: string;
  items: { href: string; label: string }[];
  pathname: string;
  wide?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="nav-link flex items-center gap-1 px-3 py-2 text-[12px] tracking-[0.06em] uppercase font-semibold text-zinc-600 hover:text-brand-green transition-colors cursor-pointer"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-0 mt-2 transition-all duration-200 ease-out ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'}`}
        style={{ width: wide ? 240 : 200 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-zinc-100 overflow-hidden">
          <div className="h-0.5 bg-gradient-to-r from-brand-green to-brand-green-light" />
          <div className="py-1.5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-[13px] transition-all border-l-2 border-transparent hover:border-brand-green hover:bg-zinc-50/50 hover:text-brand-green ${pathname === item.href ? 'text-brand-green font-medium border-brand-green' : 'text-zinc-700'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors flex-shrink-0 ${pathname === item.href ? 'bg-brand-green' : 'bg-transparent'}`} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile dropdown ─── */
function MobileDropdown({ label, items, active, toggle }: {
  label: string;
  items: { href: string; label: string }[];
  active: boolean;
  toggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-3 py-2.5 rounded-lg text-[14px] font-medium text-zinc-700 hover:text-brand-green hover:bg-zinc-50 transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${active ? 'rotate-180 text-brand-green' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${active ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-4 pb-1 pt-0.5 space-y-0.5 border-l-2 border-brand-green/20 ml-4 mt-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-[13px] text-zinc-600 hover:text-brand-green rounded-md hover:bg-zinc-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
