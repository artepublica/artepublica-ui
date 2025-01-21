import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function jurados(exposicao: Exposicao): string[] {
  return exposicao.Juri != null
    ? exposicao.Juri.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default jurados;
