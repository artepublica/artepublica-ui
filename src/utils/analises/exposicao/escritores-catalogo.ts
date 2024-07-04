import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function escritoresCatalogo(exposicao: Exposicao): string[] {
  return exposicao.CatalogoEscritoPor != null
    ? exposicao.CatalogoEscritoPor.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default escritoresCatalogo;
