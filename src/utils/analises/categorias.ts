import { Obra } from '@domain';

import obras from './obras';

const nomesCategorias: string[] = obras
  .map((obra) => obra.Categoria ?? 'Desconhecida')
  .reduce<string[]>((categorias, categoria) => {
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
    return categorias;
  }, []);

const categorias: { nome: string; obras: Obra[] }[] = nomesCategorias.reduce<
  { nome: string; obras: Obra[] }[]
>(function (total, categoria) {
  total.push({
    nome: categoria,
    obras: obras.filter(
      (obra) =>
        obra.Categoria === categoria ||
        (obra.Categoria == null && categoria === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default categorias;
