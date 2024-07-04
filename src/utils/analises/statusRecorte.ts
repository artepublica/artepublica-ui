import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesStatussRecorte: string[] = obrasRecorte
  .map((obra) => obra.Status ?? 'Desconhecida')
  .reduce<string[]>((statuss, status) => {
    if (!statuss.includes(status)) {
      statuss.push(status);
    }
    return statuss;
  }, []);

const statussRecorte: { nome: string; obras: Obra[] }[] =
  nomesStatussRecorte.reduce<{ nome: string; obras: Obra[] }[]>(function (
    total,
    status,
  ) {
    total.push({
      nome: status,
      obras: obrasRecorte.filter(
        (obra) =>
          obra.Status === status ||
          (obra.Status == null && status === 'Desconhecida'),
      ),
    });
    return total;
  }, []);

export default statussRecorte;
