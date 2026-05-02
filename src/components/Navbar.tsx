import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { buildWaLink } from '../lib/whatsapp';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Como atendo', href: '#diferenciais' },
  { label: 'Pacientes', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3 group" aria-label="Dra. Lara Oliveira — voltar ao topo">
          <LogoMark />
          <div className="leading-tight">
            <p className="text-white font-light tracking-[0.18em] text-xs uppercase">Dra. Lara Oliveira</p>
            <p style={{ color: 'var(--gold)', fontSize: '9px', letterSpacing: '0.25em' }} className="uppercase font-light">
              Dermatologia · CRM 200235
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase font-medium transition-colors duration-200 hover:text-[var(--gold)]"
              style={{ color: 'var(--text-3)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWaLink('navbar')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold px-5 py-2.5 cta-gold"
          style={{
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)';
            e.currentTarget.style.color = '#0A0A0A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--gold)';
          }}
        >
          Falar no WhatsApp
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,10,0.98)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase font-medium py-2 border-b"
              style={{ color: 'var(--text-3)', borderColor: 'var(--line)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWaLink('navbar')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-semibold px-5 py-3 text-center mt-2"
            style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
            onClick={() => setMenuOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="8" y1="4" x2="8" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="28" x2="20" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="16" r="11" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="17" y1="28" x2="39" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
