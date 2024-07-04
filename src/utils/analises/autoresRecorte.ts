import { Artista, Obra } from '@domain';

import obrasRecorte from './obrasRecorte';

const nomesAutoresRecorte: string[] = obrasRecorte
  .map((obra) =>
    obra.Autores && obra.Autores.length > 0
      ? obra.Autores
      : [{ Pessoa: { Nome: 'Desconhecida' } } as Artista],
  )
  .reduce<string[]>((autores, autores_obra) => {
    Array.prototype.push.apply(
      autores,
      autores_obra
        .map((autor) => autor.Pessoa?.Nome ?? 'Desconhecida')
        .filter((autor) => !autores.includes(autor)),
    );
    return autores;
  }, []);

const autoresRecorte: { nome: string; obras: Obra[] }[] =
  nomesAutoresRecorte.reduce<{ nome: string; obras: Obra[] }[]>(function (
    total,
    nomeAutor,
  ) {
    total.push({
      nome: nomeAutor,
      obras: obrasRecorte.filter(
        (obra) =>
          (obra.Autores &&
            obra.Autores.length > 0 &&
            obra.Autores.map(
              (autor) => autor.Pessoa?.Nome ?? 'Desconecida',
            ).includes(nomeAutor)) ||
          ((obra.Autores == null || obra.Autores.length === 0) &&
            nomeAutor === 'Desconhecida'),
      ),
    });
    return total;
  }, []);

export default autoresRecorte;
