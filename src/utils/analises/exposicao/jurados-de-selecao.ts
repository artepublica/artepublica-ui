import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function juradosDeSelecao(exposicao: Exposicao): string[] {
  return exposicao.JuriDeSelecao != null
    ? exposicao.JuriDeSelecao.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default juradosDeSelecao;
