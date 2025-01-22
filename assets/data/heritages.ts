import { Heritage } from '@domain';

import * as heritageMap from './raw/heritages';

const typedHeritageMap: Record<string, Heritage> = heritageMap;

const heritages: Heritage[] = Object.keys(typedHeritageMap).map(
  (key) => typedHeritageMap[key],
);

export default heritages;
