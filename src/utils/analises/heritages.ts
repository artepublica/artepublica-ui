import { Obra } from '@domain';

import * as heritageMap from '../data/heritages';
import * as thesisHeritageMap from '../data/thesisHeritages';

const typedHeritageMap: Record<string, Obra> = heritageMap;
const typedThesisHeritageMap: Record<string, Obra> = thesisHeritageMap;

const heritages: Obra[] = Object.keys(typedHeritageMap).map(
  (key) => typedHeritageMap[key],
);
const thesisHeritages: Obra[] = Object.keys(typedThesisHeritageMap).map(
  (key) => typedThesisHeritageMap[key],
);

export default [...heritages, ...thesisHeritages];
