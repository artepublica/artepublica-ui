import { Livro } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function citados(artigoJornal: Livro): string[] {
  return artigoJornal.Citados != null
    ? artigoJornal.Citados.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default citados;
