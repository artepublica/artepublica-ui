import MandatoCoordenadoriaMuseu from './mandato_coordenadoria_museu';
import Pessoa from './pessoa';

type CoordenadorNucleMuseu = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoCoordenadoriaMuseu[];
};

export default CoordenadorNucleMuseu;
