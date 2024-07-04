import { Obra } from '@domain';

import * as mapObrasRecorte from '../data/obra_artepublica';

const typedObrasRecorte: Record<string, Obra> = mapObrasRecorte;

const obrasRecorte: Obra[] = Object.keys(typedObrasRecorte).map(
  (key) => typedObrasRecorte[key],
);

export default obrasRecorte;
