import { PoliticaPublica } from '@domain';

function agenteDaPolitica(
  politicaPublica: PoliticaPublica,
  person: string,
): boolean {
  return (
    politicaPublica.Idealizadores?.find(
      (idealizador) => idealizador.Name === person,
    ) != null ||
    politicaPublica.Coordenadores?.find(
      (coordenador) => coordenador.Name === person,
    ) != null ||
    politicaPublica.ComissaoDeSelecao?.find(
      (seletor) => seletor.Name === person,
    ) != null
  );
}

export default agenteDaPolitica;
