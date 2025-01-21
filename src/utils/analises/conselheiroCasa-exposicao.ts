import { ConselheiroCasa, Exposicao, Pessoa } from '@domain';
import * as conselheirosCasa from '@utils/data/coselheiro-casa';

import { entre } from './dataUtils';

function conselheiroCasa_Exposicao(
  exposicao: Exposicao,
): (Pessoa | undefined)[] {
  const typed_conselheirosCasa: Record<string, ConselheiroCasa> =
    conselheirosCasa;

  const conselheiros: (Pessoa | undefined)[] = [];

  Object.keys(typed_conselheirosCasa).forEach((key) => {
    const conselheiroCasa = typed_conselheirosCasa[key];

    conselheiroCasa.Mandatos?.forEach((mandato) => {
      if (
        mandato.DataInicio &&
        mandato.DataFim &&
        (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) ||
          entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
      ) {
        conselheiros.push(conselheiroCasa.Pessoa);
      }
    });
  });

  return conselheiros;
}

export default conselheiroCasa_Exposicao;
