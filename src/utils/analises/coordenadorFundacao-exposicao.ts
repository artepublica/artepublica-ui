import { CoordenadorFundacao, Exposicao, Person } from '@domain';
import * as coordenadoresFundacao from '@utils/data/coordenador-fundacao';

import { entre } from './dataUtils';

function coordenadorFundacao_Exposicao(
  exposicao: Exposicao,
): (Person | undefined)[] {
  const typed_coordenadoresFundacao: Record<string, CoordenadorFundacao> =
    coordenadoresFundacao;

  const coordenadores: (Person | undefined)[] = [];

  Object.keys(typed_coordenadoresFundacao).forEach((key) => {
    const coordenadorFundacao = typed_coordenadoresFundacao[key];

    coordenadorFundacao.Mandatos?.forEach((mandato) => {
      if (
        mandato.DataInicio &&
        mandato.DataFim &&
        (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) ||
          entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
      ) {
        coordenadores.push(coordenadorFundacao.Person);
      }
    });
  });

  return coordenadores;
}

export default coordenadorFundacao_Exposicao;
