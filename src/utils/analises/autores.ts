import { Artista, Obra } from '@domain';

import obras from './obras';

const nomesAutores: string[] = obras
  .map((obra) =>
    obra.Autores && obra.Autores.length > 0
      ? obra.Autores
      : [{ Person: { Name: 'Desconhecida' } } as Artista],
  )
  .reduce<string[]>((autores, autores_obra) => {
    Array.prototype.push.apply(
      autores,
      autores_obra
        .map((autor) => autor.Person?.Name ?? 'Desconhecida')
        .filter((autor) => !autores.includes(autor)),
    );
    return autores;
  }, []);

const autores: { nome: string; obras: Obra[] }[] = nomesAutores.reduce<
  { nome: string; obras: Obra[] }[]
>(function (total, nomeAutor) {
  total.push({
    nome: nomeAutor,
    obras: obras.filter(
      (obra) =>
        (obra.Autores &&
          obra.Autores.length > 0 &&
          obra.Autores.map(
            (autor) => autor.Person?.Name ?? 'Desconecida',
          ).includes(nomeAutor)) ||
        ((obra.Autores == null || obra.Autores.length === 0) &&
          nomeAutor === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default autores;
