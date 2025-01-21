import { CuradorColecao, Exposicao, Person } from '@domain';
import * as curadoresColecao from '@utils/data/curadores-colecao';

import { entre } from './dataUtils';

function curadorColecao_Exposicao(
  exposicao: Exposicao,
): (Person | undefined)[] {
  const typed_curadoresColecao: Record<string, CuradorColecao> =
    curadoresColecao;

  const curadores: (Person | undefined)[] = [];

  Object.keys(typed_curadoresColecao).forEach((key) => {
    const curadorColecao = typed_curadoresColecao[key];

    curadorColecao.Mandatos?.forEach((mandato) => {
      if (
        mandato.DataInicio &&
        mandato.DataFim &&
        (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) ||
          entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
      ) {
        curadores.push(curadorColecao.Person);
      }
    });
  });

  return curadores;
}

export default curadorColecao_Exposicao;
