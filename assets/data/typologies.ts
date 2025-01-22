import { Obra } from '@domain';

import heritages from './heritages';

const typologyNames: string[] = heritages
  .map((obra) => obra.Typology ?? 'Desconhecida')
  .reduce<string[]>((typologies, typology) => {
    if (!typologies.includes(typology)) {
      typologies.push(typology);
    }
    return typologies;
  }, []);

const typologies: { name: string; heritages: Obra[] }[] = typologyNames.reduce<
  { name: string; heritages: Obra[] }[]
>(function (total, typology) {
  total.push({
    name: typology,
    heritages: heritages.filter(
      (obra) =>
        obra.Typology === typology ||
        (obra.Typology == null && typology === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default typologies;
