import { differenceInMilliseconds } from 'date-fns';
import sharp from 'sharp';

import { Obra } from '@domain';

import * as obras from './utils/data/obra_artepublica';
const typedObras: Record<string, Obra> = obras;

const imgs: string[] = Object.keys(obras).reduce<string[]>((resultado, key) => {
  const obra = typedObras[key];

  if (obra.Imagem) {
    resultado.push(obra.Imagem);
  }
  return resultado;
}, []);

(async () => {
  console.log('init');
  const inicio = new Date();

  for (const img of imgs) {
    const index = imgs.indexOf(img);

    if (index > -1) {
      const antes = new Date();
      await readFile(img);
      const depois = new Date();

      const diff = differenceInMilliseconds(depois, antes);
      console.log(`${index}: ${img} (${diff / 1000})`);
    }
  }

  const fim = new Date();

  const diff = differenceInMilliseconds(fim, inicio);

  console.log(`${imgs.length}: ${diff / 1000}`);
})();

async function readFile(file: string): Promise<void> {
  const local = `/Users/stefanobassan/Projects/artepublica-ui/assets/heritage/${file}`;

  const img = sharp(local);

  const { width, height } = await img.metadata();

  await saveImage(
    file,
    img,
    height! > width! ? undefined : 272,
    height! > width! ? 272 : undefined,
  );
}

async function saveImage(
  file: string,
  img: sharp.Sharp,
  width?: number,
  height?: number,
): Promise<void> {
  const [name] = file.split('.');
  await img
    .resize(width, height)
    .toFormat('jpeg')
    .jpeg({
      quality: 100,
      // chromaSubsampling: '4:4:4',
      force: true,
    })
    .toFile(
      `/Users/stefanobassan/Projects/artepublica-ui/assets/obras_resized/${name}.jpeg`,
    );
}
