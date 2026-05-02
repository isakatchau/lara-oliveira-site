import { Stethoscope, ClipboardList, Repeat } from 'lucide-react';
import Reveal from './Reveal';

const PILLARS = [
  {
    icon: <Stethoscope size={22} strokeWidth={1.5} aria-hidden="true" />,
    label: 'Avaliação médica',
    desc: 'Diagnóstico antes de procedimento.',
  },
  {
    icon: <ClipboardList size={22} strokeWidth={1.5} aria-hidden="true" />,
    label: 'Plano por rosto',
    desc: 'Sem protocolo padrão. Cada plano é desenhado para você.',
  },
  {
    icon: <Repeat size={22} strokeWidth={1.5} aria-hidden="true" />,
    label: 'Acompanhamento',
    desc: 'Retornos inclusos. Cuido do resultado, não só da aplicação.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">

          <Reveal className="relative overflow-hidden" style={{ minHeight: '560px' }}>
            <img
              src="/images/lara-sobre.svg"
              alt="Dra. Lara Oliveira no consultório"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '560px' }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent 70%, var(--bg-2))' }}
            />
          </Reveal>

          <div className="flex flex-col justify-center gap-8 px-8 lg:px-16 py-20">

            <Reveal>
              <p
                className="uppercase tracking-[0.3em] font-light mb-2"
                style={{ color: 'var(--gold)', fontSize: '0.7rem' }}
              >
                Quem atende você
              </p>
              <h2
                className="font-bold uppercase"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '0.04em', lineHeight: 1.15 }}
              >
                Dra. Lara Oliveira
              </h2>
              <OrnamentDivider />
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p
                  className="font-light leading-relaxed"
                  style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}
                >
                  Cada rosto chega com uma história. Antes de propor procedimento,
                  eu escuto, examino e explico o que faz sentido — e o que não faz.
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}
                >
                  Você sai da consulta sabendo exatamente o que vai acontecer e por quê.
                  Atendimento individual, sem pressa, sem pacote padrão.
                </p>
                <p
                  className="font-light tracking-wide"
                  style={{ color: 'var(--text-3)', fontSize: '0.75rem', marginTop: '4px' }}
                >
                  CRM 200235 · Dermatologia Clínica e Estética · Tricologia
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {PILLARS.map((pillar) => (
                  <div key={pillar.label} className="flex flex-col items-start gap-3">
                    <div style={{ color: 'var(--gold)' }}>{pillar.icon}</div>
                    <div>
                      <p
                        className="uppercase tracking-widest font-semibold leading-tight mb-1"
                        style={{ color: '#FFFFFF', fontSize: '0.65rem' }}
                      >
                        {pillar.label}
                      </p>
                      <p
                        className="font-light leading-snug"
                        style={{ color: 'var(--text-3)', fontSize: '0.72rem' }}
                      >
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}

function OrnamentDivider() {
  return (
    <div className="flex items-center gap-2 mt-3" aria-hidden="true">
      <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
      <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✦</span>
    </div>
  );
}
