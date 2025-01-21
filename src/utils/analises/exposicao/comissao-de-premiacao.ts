import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function comissaoDePremiacao(exposicao: Exposicao): string[] {
  return exposicao.ComissaoDePremiacao != null
    ? exposicao.ComissaoDePremiacao.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default comissaoDePremiacao;
