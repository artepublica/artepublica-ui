import { Exposicao } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function artistasConvidados(exposicao: Exposicao): string[] {
  return exposicao.ArtistasConvidados != null
    ? exposicao.ArtistasConvidados.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default artistasConvidados;
