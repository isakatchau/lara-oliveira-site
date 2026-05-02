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
        <p style={{ color: 'var(--text-3)', fontSize: '0.7rem' }}>
          © {new Date().getFullYear()} Dra. Lara Oliveira · Dermatologia Clínica e Estética ·{' '}
          <a
            href="https://instagram.com/dralaraoliveira"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)' }}
          >
            @dralaraoliveira
          </a>
        </p>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
