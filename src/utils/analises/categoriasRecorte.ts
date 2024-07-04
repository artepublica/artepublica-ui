import { Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesCategoriasRecorte: string[] = obrasRecorte
  .map((obra) => obra.Categoria ?? 'Desconhecida')
  .reduce<string[]>((categorias, categoria) => {
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
    return categorias;
  }, []);

const categoriasRecorte: { nome: string; obras: Obra[] }[] =
  nomesCategoriasRecorte.reduce<{ nome: string; obras: Obra[] }[]>(function (
    total,
    categoria,
  ) {
    total.push({
      nome: categoria,
      obras: obrasRecorte.filter(
        (obra) =>
          obra.Categoria === categoria ||
          (obra.Categoria == null && categoria === 'Desconhecida'),
      ),
    });
    return total;
  }, []);

export default categoriasRecorte;
