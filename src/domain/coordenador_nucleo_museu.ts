import MandatoCoordenadoriaMuseu from './mandato_coordenadoria_museu';
import Person from './person';

type CoordenadorNucleMuseu = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoCoordenadoriaMuseu[];
};

export default CoordenadorNucleMuseu;
