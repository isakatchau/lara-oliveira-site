export const WPP_NUMBER = '5517988094895';

type WaContext =
  | 'navbar'
  | 'hero'
  | 'sobre'
  | 'botox'
  | 'preenchimento'
  | 'harmonizacao'
  | 'complementares'
  | 'depoimentos'
  | 'localizacao'
  | 'footer'
  | 'float';

const MESSAGES: Record<WaContext, string> = {
  navbar: 'Olá Dra. Lara! Vim pelo site e quero agendar uma avaliação.',
  hero: 'Olá Dra. Lara! Vim pelo site e quero agendar uma avaliação dermatológica.',
  sobre: 'Olá Dra. Lara! Vim pelo site e quero conversar sobre uma avaliação.',
  botox: 'Olá Dra. Lara! Tenho dúvidas sobre toxina botulínica. Posso te explicar minha queixa?',
  preenchimento: 'Olá Dra. Lara! Tenho dúvidas sobre preenchimento com ácido hialurônico.',
  harmonizacao: 'Olá Dra. Lara! Quero saber se sou indicada para harmonização facial.',
  complementares: 'Olá Dra. Lara! Quero entender bioestimuladores e skinbooster para meu caso.',
  depoimentos: 'Olá Dra. Lara! Vi os depoimentos no site e quero saber mais.',
  localizacao: 'Olá Dra. Lara! Quero agendar uma avaliação no consultório de Olímpia.',
  footer: 'Olá Dra. Lara! Vim pelo site e quero conversar.',
  float: 'Olá Dra. Lara! Estou no site e quero falar com você.',
};

export function buildWaLink(context: WaContext): string {
  const text = encodeURIComponent(MESSAGES[context]);
  return `https://wa.me/${WPP_NUMBER}?text=${text}`;
}
