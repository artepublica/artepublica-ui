import { TipoCapital, TrocaCapital } from '@domain';

function trocaCapital(
  arr1: string[],
  arr2: string[],
  tipo: string,
  capitais: TipoCapital[],
): TrocaCapital[] {
  const associacoes: TrocaCapital[] = [];

  arr1.forEach((nome1) => {
    arr2.forEach((nome2) => {
      if (
        nome1 !== nome2 &&
        associacoes.find((associacao) => associacao.person1 === nome2) == null
      ) {
        associacoes.push({
          person1: nome1,
          person2: nome2,
          tipo,
          capitais,
        });
      }
    });
  });

  return associacoes;
}

export default trocaCapital;
