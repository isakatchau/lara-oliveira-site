import { ArrowRight } from 'lucide-react';
import { buildWaLink } from '../lib/whatsapp';
import { asset } from '../lib/asset';
import Reveal from './Reveal';

const PROCEDIMENTOS = [
  {
    id: 'botox',
    title: 'Toxina botulínica',
    subtitle: 'Para linhas de expressão',
    image: 'images/proc-botox.svg',
    items: [
      'Aplicação na testa, glabela e pés-de-galinha',
      'Sessão de 15 a 30 minutos. Efeito começa em 3 a 7 dias',
      'Duração média de 4 a 6 meses, varia conforme metabolismo',
    ],
    waCtx: 'botox' as const,
    cta: 'Tirar dúvida sobre botox',
  },
  {
    id: 'preenchimento',
    title: 'Preenchimento facial',
    subtitle: 'Ácido hialurônico',
    image: 'images/proc-preenchimento.svg',
    items: [
      'Malar, lábios, mandíbula, olheira, sulco nasogeniano',
      'Resultado fica visível na hora da aplicação',
      'Reverte com hialuronidase se você não gostar',
    ],
    waCtx: 'preenchimento' as const,
    cta: 'Tirar dúvida sobre preenchimento',
  },
  {
    id: 'harmonizacao',
    title: 'Harmonização facial',
    subtitle: 'Vários procedimentos no mesmo plano',
    image: 'images/proc-harmonizacao.svg',
    items: [
      'Avalio terço superior, médio e inferior antes de planejar',
      'Combina toxina, ácido hialurônico e bioestimulador conforme o caso',
      'Foco em proporção. Não troco seu rosto',
    ],
    waCtx: 'harmonizacao' as const,
    cta: 'Avaliar meu caso',
  },
  {
    id: 'complementares',
    title: 'Bioestimuladores e skinbooster',
    subtitle: 'Para qualidade da pele',
    image: 'images/proc-complementares.svg',
    items: [
      'Sculptra, Radiesse e Ellansé estimulam colágeno próprio',
      'Skinbooster faz hidratação profunda da derme',
      'Indicação depende de idade, biotipo e queixa específica',
    ],
    waCtx: 'complementares' as const,
    cta: 'Ver se é meu caso',
  },
];

export default function Procedimentos() {
  return (
    <section id="procedimentos" className="py-20 lg:py-24" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <SectionHeader title="O que faço no consultório" />
        </Reveal>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-12 lg:mt-14"
          style={{ background: 'var(--line)' }}
        >
          {PROCEDIMENTOS.map((proc, i) => (
            <Reveal key={proc.id} delay={i * 80}>
              <ProcCard {...proc} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p
            className="text-center font-light mt-10 max-w-xl mx-auto"
            style={{ color: 'var(--text-3)', fontSize: '0.74rem' }}
          >
            Resultados variam conforme avaliação individual. Toda conduta exige consulta médica prévia.
          </p>
        </Reveal>

      </div>
    </section>
  );
}

function ProcCard({
  title,
  subtitle,
  image,
  items,
  waCtx,
  cta,
}: (typeof PROCEDIMENTOS)[0]) {
  return (
    <div
      className="flex flex-col group cursor-default tilt-card h-full"
      style={{ background: '#0E0E0E', border: '1px solid transparent' }}
    >
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={asset(image)}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)' }}
        />
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
        <div>
          <h3
            className="font-bold uppercase tracking-wide"
            style={{ fontSize: '0.9rem', color: '#FFFFFF' }}
          >
            {title}
          </h3>
          <p
            className="uppercase tracking-widest font-light mt-1"
            style={{ fontSize: '0.65rem', color: 'var(--gold)' }}
          >
            {subtitle}
          </p>
        </div>

        <ul className="flex flex-col gap-1.5 flex-1">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 font-light leading-snug"
              style={{ color: 'var(--text-2)', fontSize: '0.78rem' }}
            >
              <span style={{ color: 'var(--gold)', marginTop: '1px' }} aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={buildWaLink(waCtx)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 uppercase tracking-widest font-semibold transition-colors duration-200 mt-3 hover:text-white"
          style={{ color: 'var(--gold)', fontSize: '0.65rem' }}
        >
          {cta} <ArrowRight size={12} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2
        className="font-bold uppercase tracking-[0.18em]"
        style={{ fontSize: 'clamp(1.3rem, 2.6vw, 1.8rem)', color: '#FFFFFF' }}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-3" aria-hidden="true">
        <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, var(--gold))' }} />
        <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✦</span>
        <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, var(--gold))' }} />
      </div>
    </div>
  );
}
