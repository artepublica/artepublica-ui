import { ConselheiroCasa, Exposicao, Person } from '@domain';
import * as conselheirosCasa from '@utils/data/coselheiro-casa';

import { entre } from './dataUtils';

function conselheiroCasa_Exposicao(
  exposicao: Exposicao,
): (Person | undefined)[] {
  const typed_conselheirosCasa: Record<string, ConselheiroCasa> =
    conselheirosCasa;

  const conselheiros: (Person | undefined)[] = [];

  Object.keys(typed_conselheirosCasa).forEach((key) => {
    const conselheiroCasa = typed_conselheirosCasa[key];

    conselheiroCasa.Mandatos?.forEach((mandato) => {
      if (
        mandato.DataInicio &&
        mandato.DataFim &&
        (entre(exposicao.DataInicio, mandato.DataInicio, mandato.DataFim) ||
          entre(exposicao.DataFim, mandato.DataInicio, mandato.DataFim))
      ) {
        conselheiros.push(conselheiroCasa.Person);
      }
    });
  });

  return conselheiros;
}

export default conselheiroCasa_Exposicao;
