import { Obra } from '@domain';

import thesisHeritages from './thesisHeritages';

const nomesTipologiasRecorte: string[] = thesisHeritages
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
        heritages: thesisHeritages.filter(
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
