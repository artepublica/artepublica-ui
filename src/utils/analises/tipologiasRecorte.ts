import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesTipologiasRecorte: string[] = obrasRecorte
  .map((obra) => obra.Tipologia ?? 'Desconhecida')
  .reduce<string[]>((tipologias, tipologia) => {
    if (!tipologias.includes(tipologia)) {
      tipologias.push(tipologia);
    }
    return tipologias;
  }, []);

const tipologiasRecorte: { name: string; heritages: Obra[] }[] =
  nomesTipologiasRecorte.reduce<{ name: string; heritages: Obra[] }[]>(
    function (total, tipologia) {
      total.push({
        name: tipologia,
        heritages: obrasRecorte.filter(
          (obra) =>
            obra.Tipologia === tipologia ||
            (obra.Tipologia == null && tipologia === 'Desconhecida'),
        ),
      });
      return total;
    },
    [],
  );

export default tipologiasRecorte;
