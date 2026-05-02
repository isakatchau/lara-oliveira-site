import { MapPin, Clock } from 'lucide-react';
import { buildWaLink } from '../lib/whatsapp';
import Picture from './Picture';
import Reveal from './Reveal';

export default function Hero() {

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden"
      style={{ background: 'var(--bg-1)', minHeight: '100vh' }}
    >
      <div
        className="absolute inset-0 mesh-anim opacity-70 pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side at 22% 32%, color-mix(in srgb, var(--gold) 22%, transparent), transparent 60%), radial-gradient(closest-side at 78% 72%, color-mix(in srgb, var(--gold) 14%, transparent), transparent 65%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-16 lg:pt-32 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-7">
            <Reveal>
              <p
                className="uppercase tracking-[0.32em] font-light"
                style={{ color: 'var(--gold)', fontSize: '0.7rem' }}
              >
                Dermatologia clínica e estética · Olímpia/SP
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="font-bold uppercase leading-[1.05]"
                style={{ fontSize: 'clamp(1.85rem, 4.6vw, 3.2rem)', letterSpacing: '0.01em', color: 'var(--text-1)' }}
              >
                Dermatologia em Olímpia
                <br />
                <span style={{ color: 'var(--gold)' }}>com a Dra. Lara Oliveira</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div
                className="w-12 h-px"
                style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }}
                aria-hidden="true"
              />
            </Reveal>

            <Reveal delay={200}>
              <p
                className="font-light leading-relaxed max-w-md"
                style={{ color: 'var(--text-2)', fontSize: '0.98rem' }}
              >
                Sou médica dermatologista (CRM 200235). Atendo no consultório do Jardim Glória,
                com avaliação clínica antes de qualquer procedimento estético. Você marca, eu
                te examino, te explico o que vejo, e a gente decide junto se vale fazer.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex flex-col gap-3">
                <a
                  data-cta-near
                  href={buildWaLink('hero')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-semibold uppercase tracking-widest text-[11px] sm:text-xs px-8 py-4 self-start cta-shine cta-solid-gold"
                >
                  <WhatsAppIcon />
                  Marcar minha avaliação
                </a>
                <p
                  className="flex items-center gap-2 font-light"
                  style={{ color: 'var(--text-3)', fontSize: '0.74rem' }}
                >
                  <Clock size={11} aria-hidden="true" />
                  Respondo segunda a sexta, das 9h às 18h.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex items-start gap-2 pt-2">
                <MapPin size={14} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                <p style={{ color: 'var(--text-3)', fontSize: '0.78rem', lineHeight: '1.6' }}>
                  R. Conselheiro Antônio Prado, 37<br />
                  Jardim Glória, Olímpia – SP · 15404-030
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className="relative flex items-center justify-center lg:justify-end h-full order-first lg:order-last"
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              style={{ aspectRatio: '1 / 1' }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: '1px solid var(--line-strong)',
                  transform: 'translate(12px, -12px)',
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 w-full h-full overflow-hidden">
                <Picture
                  base="lara"
                  widths={[640]}
                  alt="Dra. Lara Oliveira, dermatologista em Olímpia/SP"
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
