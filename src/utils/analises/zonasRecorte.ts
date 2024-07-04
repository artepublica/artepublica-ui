import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesZonasRecorte: string[] = obrasRecorte
  .map((obra) => obra.Zona ?? 'Desconhecida')
  .reduce<string[]>((zonas, zona) => {
    if (!zonas.includes(zona)) {
      zonas.push(zona);
    }
    return zonas;
  }, []);

const zonasRecorte: { nome: string; obras: Obra[] }[] =
  nomesZonasRecorte.reduce<{ nome: string; obras: Obra[] }[]>(function (
    total,
    zona,
  ) {
    total.push({
      nome: zona,
      obras: obrasRecorte.filter(
        (obra) =>
          obra.Zona === zona || (obra.Zona == null && zona === 'Desconhecida'),
      ),
    });
    return total;
  }, []);

export default zonasRecorte;
