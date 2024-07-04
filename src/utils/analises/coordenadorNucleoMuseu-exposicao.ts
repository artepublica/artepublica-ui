import { Exposicao, Pessoa } from '@domain';
import * as coordenadoresNucleoMuseu from '@utils/data/coordenador-nucleo-museu';
import CoordenadorNucleoMuseu from 'src/domain/coordenador_nucleo_museu';

import { entre } from './dataUtils';

function coordenadorNucleoMuseu_Exposicao(
  exposicao: Exposicao,
): (Pessoa | undefined)[] {
  const typed_coordenadoresNucleoMuseu: Record<string, CoordenadorNucleoMuseu> =
    coordenadoresNucleoMuseu;

  const coordenadores: (Pessoa | undefined)[] = [];

  Object.keys(typed_coordenadoresNucleoMuseu).forEach((key) => {
    const coordenadorNucleoMuseu = typed_coordenadoresNucleoMuseu[key];

    coordenadorNucleoMuseu.Mandatos?.forEach((mandato) => {
      if (
        mandato.DataInicio &&
        mandato.DataFim &&
        (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) ||
          entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
      ) {
        coordenadores.push(coordenadorNucleoMuseu.Pessoa);
      }
    });
  });

  return coordenadores;
}

export default coordenadorNucleoMuseu_Exposicao;
