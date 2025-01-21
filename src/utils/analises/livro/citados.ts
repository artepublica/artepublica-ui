import { Livro } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function citados(artigoJornal: Livro): string[] {
  return artigoJornal.Citados != null
    ? artigoJornal.Citados.map((person) => person.Name).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default citados;
