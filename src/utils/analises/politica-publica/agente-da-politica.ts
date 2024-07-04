import { PoliticaPublica } from '@domain';

function agenteDaPolitica(
  politicaPublica: PoliticaPublica,
  pessoa: string,
): boolean {
  return (
    politicaPublica.Idealizadores?.find(
      (idealizador) => idealizador.Nome === pessoa,
    ) != null ||
    politicaPublica.Coordenadores?.find(
      (coordenador) => coordenador.Nome === pessoa,
    ) != null ||
    politicaPublica.ComissaoDeSelecao?.find(
      (seletor) => seletor.Nome === pessoa,
    ) != null
  );
}

export default agenteDaPolitica;
