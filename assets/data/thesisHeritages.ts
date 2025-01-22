import { Obra } from '@domain';

import * as heritageMap from './raw/thesisHeritages';

const typedHeritageMap: Record<string, Obra> = heritageMap;

const heritages: Obra[] = Object.keys(typedHeritageMap).map(
  (key) => typedHeritageMap[key],
);

export default heritages;
