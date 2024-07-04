import { Obra } from '@domain';

import obras from './obras';

const nomesZonas: string[] = obras
  .map((obra) => obra.Zona ?? 'Desconhecida')
  .reduce<string[]>((zonas, zona) => {
    if (!zonas.includes(zona)) {
      zonas.push(zona);
    }
    return zonas;
  }, []);

const zonas: { nome: string; obras: Obra[] }[] = nomesZonas.reduce<
  { nome: string; obras: Obra[] }[]
>(function (total, zona) {
  total.push({
    nome: zona,
    obras: obras.filter(
      (obra) =>
        obra.Zona === zona || (obra.Zona == null && zona === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default zonas;
