import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function curadores(exposicao: Exposicao): string[] {
  return exposicao.Curadores != null
    ? exposicao.Curadores.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default curadores;
