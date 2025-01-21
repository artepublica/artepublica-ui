import { Artista, Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesAutoresRecorte: string[] = obrasRecorte
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

const autoresRecorte: { name: string; heritages: Obra[] }[] =
  nomesAutoresRecorte.reduce<{ name: string; heritages: Obra[] }[]>(function (
    total,
    nomeAutor,
  ) {
    total.push({
      name: nomeAutor,
      heritages: obrasRecorte.filter(
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

export default autoresRecorte;
