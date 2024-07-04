import { Obra } from '@domain';

import obras from './obras';

const nomesNaturezas: string[] = obras
  .map((obra) => obra.Natureza ?? 'Desconhecida')
  .reduce<string[]>((naturezas, tipologia) => {
    if (!naturezas.includes(tipologia)) {
      naturezas.push(tipologia);
    }
    return naturezas;
  }, []);

const naturezas: { nome: string; obras: Obra[] }[] = nomesNaturezas.reduce<
  { nome: string; obras: Obra[] }[]
>(function (total, tipologia) {
  total.push({
    nome: tipologia,
    obras: obras.filter(
      (obra) =>
        obra.Natureza === tipologia ||
        (obra.Natureza == null && tipologia === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default naturezas;
