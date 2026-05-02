import { Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Procedimentos from './components/Procedimentos';
import Diferencial from './components/Diferencial';
import Depoimentos from './components/Depoimentos';
import Localizacao from './components/Localizacao';
import WhatsAppFloat from './components/WhatsAppFloat';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Sobre />
        <Procedimentos />
        <Diferencial />
        <Depoimentos />
        <Localizacao />
      </main>
      <footer
        className="py-6 text-center"
        style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}
      >
        <p
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
          style={{ color: 'var(--text-3)', fontSize: '0.7rem' }}
        >
          <span>© {new Date().getFullYear()} Dra. Lara Oliveira · Dermatologia Clínica e Estética</span>
          <span aria-hidden="true">·</span>
          <a
            href="https://instagram.com/dralaraoliveira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Dra. Lara Oliveira (abre em nova aba)"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--text-1)]"
            style={{ color: 'var(--gold)' }}
          >
            <Instagram size={13} strokeWidth={1.6} aria-hidden="true" />
            <span>@dralaraoliveira</span>
          </a>
        </p>
      </footer>

      <WhatsAppFloat />
      <CursorGlow />
    </>
  );
}
