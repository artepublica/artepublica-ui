import { ArtigoJornal } from '@domain';
import onlyUniqueNotUndefinedString from '@utils/list/unique-not-undefined-string';

function autores(artigoJornal: ArtigoJornal): string[] {
  return artigoJornal.Autores != null
    ? artigoJornal.Autores.map((pessoa) => pessoa.Nome).filter(
        onlyUniqueNotUndefinedString,
      )
    : [];
}

export default autores;
