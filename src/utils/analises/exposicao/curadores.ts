import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function curadores(exposicao: Exposicao): string[] {
  return exposicao.Curadores != null
    ? exposicao.Curadores.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default curadores;
