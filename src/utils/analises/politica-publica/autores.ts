import { PoliticaPublica } from '@domain';
import reduceListOfList from '@utils/list/reduce-list-of-list';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function autores(politicaPublica: PoliticaPublica): string[] {
  return politicaPublica.Obras != null
    ? politicaPublica.Obras.map((obra) =>
        obra.Autores != null
          ? obra.Autores.map((autor) => autor.Person?.Name)
          : [],
      )
        .reduce(reduceListOfList, [])
        .filter(onlyUniqueNotUndefinedString)
    : [];
}

export default autores;
