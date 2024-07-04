import { Obra } from '@domain';

import obras from './obras';

const nomesTipologias: string[] = obras
  .map((obra) => obra.Tipologia ?? 'Desconhecida')
  .reduce<string[]>((tipologias, tipologia) => {
    if (!tipologias.includes(tipologia)) {
      tipologias.push(tipologia);
    }
    return tipologias;
  }, []);

const tipologias: { nome: string; obras: Obra[] }[] = nomesTipologias.reduce<
  { nome: string; obras: Obra[] }[]
>(function (total, tipologia) {
  total.push({
    nome: tipologia,
    obras: obras.filter(
      (obra) =>
        obra.Tipologia === tipologia ||
        (obra.Tipologia == null && tipologia === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default tipologias;
