import Obra from './obra';

type ObraPorDecada = {
  ID?: number;
  Decada: number;
  Obras: (Obra | undefined)[];
};

export default ObraPorDecada;
