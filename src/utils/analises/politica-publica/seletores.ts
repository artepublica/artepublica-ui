import { PoliticaPublica } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function seletores(politicaPublica: PoliticaPublica): string[] {
  return politicaPublica.ComissaoDeSelecao != null
    ? politicaPublica.ComissaoDeSelecao.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default seletores;
