import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function comissaoDePremiacao(exposicao: Exposicao): string[] {
  return exposicao.ComissaoDePremiacao != null
    ? exposicao.ComissaoDePremiacao.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default comissaoDePremiacao;
