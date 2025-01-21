import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function expositores(exposicao: Exposicao): string[] {
  return exposicao.Expositores != null
    ? exposicao.Expositores.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default expositores;
