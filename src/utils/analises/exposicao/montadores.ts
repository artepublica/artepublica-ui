import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function muntadores(exposicao: Exposicao): string[] {
  return exposicao.Montadores != null
    ? exposicao.Montadores.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default muntadores;
