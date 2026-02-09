'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo, getWhatsAppLink } from '@/config/personal';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cursor glow effect (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorGlow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-color)]' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group min-h-[44px]">
            <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">{personalInfo.name}</span>
            <span className="w-2 h-2 bg-[#CE2029] rounded-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium relative group transition-colors ${
                pathname === '/' 
                  ? 'text-[#CE2029]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#CE2029] transition-all ${
                pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium relative group transition-colors ${
                pathname === '/about' 
                  ? 'text-[#CE2029]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#CE2029] transition-all ${
                pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href="/work"
              className={`text-sm font-medium relative group transition-colors ${
                pathname === '/work' 
                  ? 'text-[#CE2029]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Work
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#CE2029] transition-all ${
                pathname === '/work' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CE2029] text-white px-5 sm:px-6 py-2.5 rounded-full font-semibold hover:bg-[#B01C24] transition-all glow-on-hover text-sm sm:text-base min-h-[44px]"
            >
              Start a project
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-[var(--text-primary)] hover:text-[#CE2029] transition-colors min-h-[44px] min-w-[44px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-color)] py-4 space-y-4">
            <Link
              href="/"
              className={`block transition-colors text-base font-medium py-2 min-h-[44px] flex items-center ${
                pathname === '/' 
                  ? 'text-[#CE2029]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block transition-colors text-base font-medium py-2 min-h-[44px] flex items-center ${
                pathname === '/about' 
                  ? 'text-[#CE2029]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/work"
              className={`block transition-colors text-base font-medium py-2 min-h-[44px] flex items-center ${
                pathname === '/work' 
                  ? 'text-[#CE2029]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#CE2029] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#B01C24] transition-all min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}