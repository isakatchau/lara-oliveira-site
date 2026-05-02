import Reveal from './Reveal';

const DEPOIMENTOS = [
  {
    quote:
      'Cheguei achando que precisava de preenchimento. A Dra. me explicou que o que estava me incomodando era olheira, não falta de volume. Tratamento certo, gastei menos, resultado melhor.',
    name: 'Camila R.',
    age: 34,
    procedimento: 'Avaliação + skinbooster',
    tempo: 'Há 3 meses',
    stars: 5,
  },
  {
    quote:
      'Já tinha feito botox em outro lugar e fiquei com sobrancelha caída. A Dra. corrigiu e desde então só faço com ela. Mão leve e honesta.',
    name: 'Ana M.',
    age: 42,
    procedimento: 'Toxina botulínica',
    tempo: 'Paciente há 2 anos',
    stars: 5,
  },
  {
    quote:
      'O que mais valorizei foi não ter sido empurrada para um pacote. A cada retorno ela avalia o que faz sentido naquele momento.',
    name: 'Beatriz S.',
    age: 38,
    procedimento: 'Harmonização facial',
    tempo: 'Há 1 ano',
    stars: 5,
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24" style={{ background: 'var(--bg-1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <SectionHeader title="O que pacientes dizem" />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {DEPOIMENTOS.map((dep, i) => (
            <Reveal key={dep.name} delay={i * 100}>
              <DepoCard {...dep} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p
            className="text-center font-light mt-10"
            style={{ color: 'var(--text-3)', fontSize: '0.7rem' }}
          >
            Depoimentos coletados com consentimento. Resultados variam conforme avaliação individual.
          </p>
        </Reveal>

      </div>
    </section>
  );
}

function DepoCard({
  quote,
  name,
  age,
  procedimento,
  tempo,
  stars,
}: (typeof DEPOIMENTOS)[0]) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div
      className="flex flex-col gap-5 p-7 relative h-full tilt-card"
      style={{
        background: '#0E0E0E',
        border: '1px solid var(--line)',
      }}
    >
      <span
        className="absolute"
        style={{
          color: 'var(--gold)',
          fontSize: '5rem',
          lineHeight: 1,
          top: '8px',
          left: '20px',
          opacity: 0.32,
          fontFamily: "'Cormorant Garamond', serif",
        }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="flex gap-1 mt-3" aria-label={`${stars} de 5 estrelas`}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <p
        className="font-light leading-relaxed flex-1"
        style={{ color: 'var(--text-2)', fontSize: '0.88rem' }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid var(--line)' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold uppercase mt-3"
          style={{ background: 'rgba(201,169,122,0.15)', color: 'var(--gold)' }}
          aria-hidden="true"
        >
          {initial}
        </div>
        <div className="mt-3">
          <p
            className="font-medium uppercase tracking-widest"
            style={{ color: '#FFFFFF', fontSize: '0.72rem' }}
          >
            {name} · {age}
          </p>
          <p
            className="font-light"
            style={{ color: 'var(--text-3)', fontSize: '0.68rem' }}
          >
            {procedimento} · {tempo}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2
        className="font-bold uppercase tracking-[0.22em]"
        style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.8rem)' }}
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
