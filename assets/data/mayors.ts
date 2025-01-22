import { Mayor } from '@domain';

import * as mayorsMao from './raw/mayors';

const typedMayorsMap: Record<string, Mayor> = mayorsMao;

const mayors: Mayor[] = Object.keys(typedMayorsMap).map((key) => typedMayorsMap[key]);

export default mayors;
