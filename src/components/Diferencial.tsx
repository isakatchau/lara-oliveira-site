import Reveal from './Reveal';

const DIFERENCIAIS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M12 2 L12 22" />
        <path d="M5 9 a7 7 0 0 0 14 0" />
        <circle cx="12" cy="6" r="1.6" />
      </svg>
    ),
    title: 'Diagnóstico',
    desc: 'Examino sua pele clinicamente antes de propor estética. Tem queixa que não é estética? Eu trato.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M3 12 h6 l2 -3 l2 6 l2 -3 h6" />
      </svg>
    ),
    title: 'Honestidade',
    desc: 'Se um procedimento não vai te entregar o que você espera, eu digo. Mesmo que eu deixe de vender.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M3 7 a9 9 0 1 1 0 10" />
        <polyline points="3 3 3 7 7 7" />
      </svg>
    ),
    title: 'Reversibilidade',
    desc: 'Trabalho com técnicas reversíveis sempre que possível. Você mantém o controle.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
    title: 'Acompanhamento',
    desc: 'Retorno em 14 a 30 dias incluso. Ajustes finos no mesmo plano, sem cobrança extra.',
  },
];

export default function Diferencial() {
  return (
    <section
      id="diferenciais"
      className="py-24 overflow-hidden"
      style={{ background: 'var(--bg-2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <Reveal>
            <p
              className="uppercase tracking-[0.3em] font-light mb-6"
              style={{ color: 'var(--gold)', fontSize: '0.7rem' }}
            >
              Como eu trabalho
            </p>
            <h2
              className="font-bold uppercase leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '0.02em' }}
            >
              Avaliação médica antes.
              <br />
              Procedimento depois —
              <br />
              <span style={{ color: 'var(--gold)' }}>se fizer sentido.</span>
            </h2>
            <div className="flex items-center gap-2 mt-6" aria-hidden="true">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✦</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-8">
            {DIFERENCIAIS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex flex-col gap-3">
                  <div
                    style={{ color: 'var(--gold)' }}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold uppercase tracking-widest mb-2"
                      style={{ fontSize: '0.72rem', color: '#FFFFFF' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-light leading-relaxed"
                      style={{ color: 'var(--text-2)', fontSize: '0.82rem' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
