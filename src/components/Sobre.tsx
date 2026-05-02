import { Stethoscope, ClipboardList, Repeat } from 'lucide-react';
import Picture from './Picture';
import Reveal from './Reveal';

const PILLARS = [
  {
    icon: <Stethoscope size={22} strokeWidth={1.5} aria-hidden="true" />,
    label: 'Avaliação clínica',
    desc: 'Antes de propor estética eu examino sua pele para ver se tem algo que precisa de tratamento clínico primeiro.',
  },
  {
    icon: <ClipboardList size={22} strokeWidth={1.5} aria-hidden="true" />,
    label: 'Plano por consulta',
    desc: 'O que vamos fazer sai do que vimos juntas no consultório. Não trabalho com pacote pré-pronto.',
  },
  {
    icon: <Repeat size={22} strokeWidth={1.5} aria-hidden="true" />,
    label: 'Retorno incluso',
    desc: 'Toda aplicação tem retorno marcado em 14 a 30 dias para ajuste fino, sem custo extra.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">

          <Reveal className="relative overflow-hidden" style={{ minHeight: '480px' }}>
            <Picture
              base="doc-trabalhando-1"
              alt="Dra. Lara Oliveira, dermatologista em Olímpia/SP"
              className="w-full h-full object-cover"
              style={{ minHeight: '480px', objectPosition: 'center 20%' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{ background: 'var(--fade-side-to-bg)' }}
            />
          </Reveal>

          <div className="flex flex-col justify-center gap-8 px-6 sm:px-10 lg:px-16 py-16 lg:py-20">

            <Reveal>
              <p
                className="uppercase tracking-[0.3em] font-light mb-2"
                style={{ color: 'var(--gold)', fontSize: '0.7rem' }}
              >
                Quem atende você
              </p>
              <h2
                className="font-bold uppercase"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', letterSpacing: '0.04em', lineHeight: 1.15, color: 'var(--text-1)' }}
              >
                Dra. Lara Oliveira
              </h2>
              <OrnamentDivider />
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p className="font-light leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>
                  Sou médica com especialização em dermatologia clínica e estética e formação em
                  tricologia. Atendo pelo CRM 200235 no consultório do Jardim Glória, em Olímpia.
                </p>
                <p className="font-light leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>
                  Faço o atendimento sozinha. Sem assistente passando triagem, sem balcão de
                  vendas. Você marca, eu te examino, te mostro o que cada técnica realmente faz,
                  quanto dura, quanto custa, e você decide na sua hora se quer marcar.
                </p>
                <p className="font-light leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>
                  Se você não precisa de procedimento, eu falo. Se precisa de algo que eu não
                  faço, eu indico colega de confiança da minha rede.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                {PILLARS.map((pillar) => (
                  <div key={pillar.label} className="flex flex-col items-start gap-3">
                    <div style={{ color: 'var(--gold)' }}>{pillar.icon}</div>
                    <div>
                      <p
                        className="uppercase tracking-widest font-semibold leading-tight mb-1.5"
                        style={{ color: 'var(--text-1)', fontSize: '0.65rem' }}
                      >
                        {pillar.label}
                      </p>
                      <p className="font-light leading-snug" style={{ color: 'var(--text-3)', fontSize: '0.74rem' }}>
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
