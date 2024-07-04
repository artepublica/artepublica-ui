import { Obra } from '@domain';

import obras from './obras';

const nomesStatuss: string[] = obras
  .map((obra) => obra.Status ?? 'Desconhecida')
  .reduce<string[]>((statuss, status) => {
    if (!statuss.includes(status)) {
      statuss.push(status);
    }
    return statuss;
  }, []);

const statuss: { nome: string; obras: Obra[] }[] = nomesStatuss.reduce<
  { nome: string; obras: Obra[] }[]
>(function (total, status) {
  total.push({
    nome: status,
    obras: obras.filter(
      (obra) =>
        obra.Status === status ||
        (obra.Status == null && status === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default statuss;
