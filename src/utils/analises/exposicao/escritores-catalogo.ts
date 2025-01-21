import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function escritoresCatalogo(exposicao: Exposicao): string[] {
  return exposicao.CatalogoEscritoPor != null
    ? exposicao.CatalogoEscritoPor.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default escritoresCatalogo;
