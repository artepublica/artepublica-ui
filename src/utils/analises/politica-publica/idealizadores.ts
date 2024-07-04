import { PoliticaPublica } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function idealizadores(politicaPublica: PoliticaPublica): string[] {
  return politicaPublica.Idealizadores != null
    ? politicaPublica.Idealizadores.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default idealizadores;
