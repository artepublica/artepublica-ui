import { Heritage } from '@domain';

import heritages from './heritages';

const typologyNames: string[] = heritages
  .map((heritage) => heritage.Typology ?? 'Desconhecida')
  .reduce<string[]>((typologies, typology) => {
    if (!typologies.includes(typology)) {
      typologies.push(typology);
    }
    return typologies;
  }, []);

const typologies: { name: string; heritages: Heritage[] }[] = typologyNames.reduce<
  { name: string; heritages: Heritage[] }[]
>(function (total, typology) {
  total.push({
    name: typology,
    heritages: heritages.filter(
      (heritage) => heritage.Typology === typology || (heritage.Typology == null && typology === 'Desconhecida'),
    ),
  });
  return total;
}, []);

export default typologies;
