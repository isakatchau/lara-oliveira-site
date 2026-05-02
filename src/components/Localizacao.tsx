import { Phone, MessageCircle } from 'lucide-react';
import { buildWaLink } from '../lib/whatsapp';
import { asset } from '../lib/asset';
import Reveal from './Reveal';

const MAPS_LINK = 'https://maps.google.com/?q=R.+Conselheiro+Antônio+Prado,+37,+Jardim+Glória,+Olímpia+SP';

export default function Localizacao() {
  return (
    <section
      id="contato"
      style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">

          <div
            className="flex flex-col justify-center gap-7 px-6 sm:px-10 lg:px-16 py-16 lg:py-20 lg:border-r"
            style={{ borderColor: 'var(--line)' }}
          >
            <Reveal>
              <LogoMark />
            </Reveal>

            <Reveal delay={80}>
              <div>
                <p
                  className="uppercase tracking-[0.3em] font-light mb-2"
                  style={{ color: 'var(--gold)', fontSize: '0.7rem' }}
                >
                  Onde te atendo
                </p>
                <h2
                  className="font-bold uppercase tracking-[0.16em]"
                  style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}
                >
                  Consultório em Olímpia
                </h2>
                <div className="flex items-center gap-2 mt-3" aria-hidden="true">
                  <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
                  <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✦</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="flex flex-col gap-2">
                <p className="font-medium" style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>
                  R. Conselheiro Antônio Prado, 37
                </p>
                <p className="font-light" style={{ color: 'var(--text-2)', fontSize: '0.88rem' }}>
                  Jardim Glória, Olímpia – SP · CEP 15404-030
                </p>
                <p className="font-light pt-2" style={{ color: 'var(--text-3)', fontSize: '0.78rem' }}>
                  Atendo com hora marcada, segunda a sexta, das 9h às 18h.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center uppercase tracking-widest font-semibold text-[11px] px-5 py-3 cta-gold"
                  style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold)';
                    e.currentTarget.style.color = '#0A0A0A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                >
                  Ver no mapa
                </a>
                <a
                  href="tel:+5517988094895"
                  className="inline-flex items-center gap-2 uppercase tracking-widest font-semibold text-[11px] px-5 py-3"
                  style={{ border: '1px solid var(--line-strong)', color: 'var(--text-2)' }}
                >
                  <Phone size={13} aria-hidden="true" /> (17) 98809-4895
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative overflow-hidden" style={{ minHeight: '380px' }}>
            <iframe
              title="Mapa do consultório da Dra. Lara Oliveira em Olímpia/SP"
              src="https://maps.google.com/maps?q=R.+Conselheiro+Antônio+Prado,+37,+Jardim+Glória,+Olímpia+SP&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.85)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

        </div>
      </div>

      <div
        className="relative overflow-hidden py-16 lg:py-20 text-center"
        style={{ background: '#090909', borderTop: '1px solid var(--line)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `url(${asset('images/lara-footer-bg.svg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.78)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center gap-5">
          <Reveal>
            <p
              className="uppercase tracking-[0.3em] font-light"
              style={{ color: 'var(--gold)', fontSize: '0.68rem' }}
            >
              Antes de marcar
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="font-bold uppercase text-center"
              style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', letterSpacing: '0.04em', lineHeight: 1.25 }}
            >
              Tem alguma queixa?
              <br />
              <span style={{ color: 'var(--gold)' }}>Me chama no WhatsApp.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p
              className="font-light max-w-md leading-relaxed"
              style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}
            >
              Quem responde sou eu. Pode mandar foto da queixa que eu te oriento se vale a pena
              marcar uma consulta presencial.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={buildWaLink('footer')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold uppercase tracking-widest text-[11px] sm:text-xs px-8 py-4 cta-glow mt-2"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <MessageCircle size={15} aria-hidden="true" />
              Falar com a Dra. Lara
            </a>
          </Reveal>
          <Reveal delay={260}>
            <p style={{ color: 'var(--text-3)', fontSize: '0.7rem' }}>
              WhatsApp · Seg–sex 9h às 18h
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  return (
    <div className="flex flex-col items-start gap-1">
      <svg width="48" height="40" viewBox="0 0 52 44" fill="none" aria-hidden="true">
        <line x1="10" y1="4" x2="10" y2="34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="34" x2="24" y2="34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="20" r="13" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="22" y1="34" x2="52" y2="34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="uppercase tracking-[0.3em] font-light" style={{ color: '#FFFFFF', fontSize: '0.78rem' }}>
        Lara Oliveira
      </p>
      <p className="uppercase tracking-[0.4em] font-light" style={{ color: 'var(--gold)', fontSize: '0.55rem' }}>
        Dermatologia · CRM 200235
      </p>
    </div>
  );
}
