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
  navbar: 'Olá Dra. Lara! Vi seu site e quero marcar uma avaliação. Pode me passar os horários disponíveis?',
  hero: 'Olá Dra. Lara! Quero marcar uma avaliação dermatológica. Quais são os próximos horários?',
  sobre: 'Olá Dra. Lara! Vi seu site, gostei do seu jeito de atender e quero marcar uma avaliação.',
  botox: 'Olá Dra. Lara! Tenho dúvidas sobre toxina botulínica. Posso te mandar uma foto da minha região de expressão para você me orientar?',
  preenchimento: 'Olá Dra. Lara! Tenho dúvida sobre preenchimento. Posso te mandar uma foto da área que me incomoda para você dizer se é meu caso?',
  harmonizacao: 'Olá Dra. Lara! Quero saber se sou candidata para harmonização facial. Posso te mandar fotos do meu rosto para avaliação?',
  complementares: 'Olá Dra. Lara! Quero saber se bioestimuladores ou skinbooster fazem sentido para a minha pele. Como faço para avaliar?',
  depoimentos: 'Olá Dra. Lara! Vi os depoimentos no site, gostei muito e quero conversar.',
  localizacao: 'Olá Dra. Lara! Quero marcar uma avaliação no consultório de Olímpia. Quais horários você tem disponíveis?',
  footer: 'Olá Dra. Lara! Tenho uma queixa específica e gostaria de te mandar uma foto para você me orientar antes de marcar.',
  float: 'Olá Dra. Lara! Estou navegando seu site agora, tenho uma dúvida específica e queria sua avaliação. Posso te mandar uma foto?',
};

export function buildWaLink(context: WaContext): string {
  const text = encodeURIComponent(MESSAGES[context]);
  return `https://wa.me/${WPP_NUMBER}?text=${text}`;
}
