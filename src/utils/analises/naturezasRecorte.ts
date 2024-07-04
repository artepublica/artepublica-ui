import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesNaturezasRecorte: string[] = obrasRecorte
  .map((obra) => obra.Natureza ?? 'Desconhecida')
  .reduce<string[]>((naturezas, tipologia) => {
    if (!naturezas.includes(tipologia)) {
      naturezas.push(tipologia);
    }
    return naturezas;
  }, []);

const naturezasRecorte: { nome: string; obras: Obra[] }[] =
  nomesNaturezasRecorte.reduce<{ nome: string; obras: Obra[] }[]>(function (
    total,
    tipologia,
  ) {
    total.push({
      nome: tipologia,
      obras: obrasRecorte.filter(
        (obra) =>
          obra.Natureza === tipologia ||
          (obra.Natureza == null && tipologia === 'Desconhecida'),
      ),
    });
    return total;
  }, []);

export default naturezasRecorte;
