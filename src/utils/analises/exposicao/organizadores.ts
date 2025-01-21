import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function organizadores(exposicao: Exposicao): string[] {
  return exposicao.Organizadores != null
    ? exposicao.Organizadores.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default organizadores;
