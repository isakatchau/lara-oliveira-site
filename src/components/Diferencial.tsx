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
    title: 'Avaliação clínica',
    desc: 'Antes de propor estética eu examino sua pele. Se tiver queixa que não é estética (acne, manchas, queda de cabelo), eu trato pelo lado clínico ou indico colega.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M3 12 h6 l2 -3 l2 6 l2 -3 h6" />
      </svg>
    ),
    title: 'Honestidade no preço',
    desc: 'Falo o valor antes de você marcar. Sem fechamento de venda na consulta, sem pacote de upsell.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M3 7 a9 9 0 1 1 0 10" />
        <polyline points="3 3 3 7 7 7" />
      </svg>
    ),
    title: 'Reversibilidade',
    desc: 'Trabalho com técnicas reversíveis sempre que possível. O ácido hialurônico, por exemplo, dá pra dissolver com hialuronidase.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
    title: 'Retorno incluso',
    desc: 'Toda aplicação tem retorno marcado em 14 a 30 dias para ajuste fino. Já vem no valor da sessão.',
  },
];

export default function Diferencial() {
  return (
    <section id="diferenciais" className="py-20 lg:py-24 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <Reveal>
            <p className="uppercase tracking-[0.3em] font-light mb-5" style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>
              Como atendo
            </p>
            <h2
              className="font-bold uppercase leading-[1.1]"
              style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)', letterSpacing: '0.02em', color: 'var(--text-1)' }}
            >
              O que esperar
              <br />
              <span style={{ color: 'var(--gold)' }}>do meu atendimento</span>
            </h2>
            <div className="flex items-center gap-2 mt-5" aria-hidden="true">
              <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>✦</span>
            </div>
            <p className="font-light leading-relaxed mt-6 max-w-md" style={{ color: 'var(--text-2)', fontSize: '0.92rem' }}>
              Quatro coisas que tento fazer em todo paciente que me procura. Pode cobrar de mim
              se eu falhar em alguma delas.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:gap-8">
            {DIFERENCIAIS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex flex-col gap-3">
                  <div style={{ color: 'var(--gold)' }} className="w-10 h-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase tracking-widest mb-2" style={{ fontSize: '0.74rem', color: 'var(--text-1)' }}>
                      {item.title}
                    </h3>
                    <p className="font-light leading-relaxed" style={{ color: 'var(--text-2)', fontSize: '0.84rem' }}>
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
