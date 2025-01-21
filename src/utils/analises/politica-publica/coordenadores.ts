import { PoliticaPublica } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function coordenadores(politicaPublica: PoliticaPublica): string[] {
  return politicaPublica.Coordenadores != null
    ? politicaPublica.Coordenadores.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default coordenadores;
