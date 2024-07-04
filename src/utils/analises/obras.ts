import { Obra } from '@domain';

import * as mapObras from '../data/obra';
import * as mapObrasRecorte from '../data/obra_artepublica';

const typedObras: Record<string, Obra> = mapObras;
const typedObrasRecorte: Record<string, Obra> = mapObrasRecorte;

const obras: Obra[] = Object.keys(typedObras).map((key) => typedObras[key]);
const obrasRecorte: Obra[] = Object.keys(typedObrasRecorte).map(
  (key) => typedObrasRecorte[key],
);

export default [...obras, ...obrasRecorte];
