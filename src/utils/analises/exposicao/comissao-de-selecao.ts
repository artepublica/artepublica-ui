import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function comissaoDeSelecao(exposicao: Exposicao): string[] {
  return exposicao.ComissaoDeSelecao != null
    ? exposicao.ComissaoDeSelecao.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default comissaoDeSelecao;
