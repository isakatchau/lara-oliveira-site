import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Procedimentos from './components/Procedimentos';
import Diferencial from './components/Diferencial';
import Depoimentos from './components/Depoimentos';
import Localizacao from './components/Localizacao';
import WhatsAppFloat from './components/WhatsAppFloat';

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
            <InstagramIcon />
            <span>@dralaraoliveira</span>
          </a>
        </p>
      </footer>

      <WhatsAppFloat />
    </>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
