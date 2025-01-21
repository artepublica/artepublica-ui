import { TrocaCapital } from '@domain';

function compararNoData(o1: TrocaCapital, o2: TrocaCapital): boolean {
  return o1.person1 === o2.person1 && o1.person2 === o2.person2; // || (o1.person1 === o2.person2 && o1.person2 === o2.person1);
}

function juntarTrocas(
  arr1: TrocaCapital[],
  arr2: TrocaCapital[],
): TrocaCapital[] {
  const trocas = [...arr1];

  trocas.forEach((troca1) => {
    arr2.forEach((troca2) => {
      const exist = trocas.find((_troca1) => compararNoData(_troca1, troca2));
      if (exist) {
        Array.prototype.push.apply(troca1.capitais, troca2.capitais);
      } else {
        trocas.push(troca2);
      }
    });
  });

  return trocas;
}

export default juntarTrocas;
