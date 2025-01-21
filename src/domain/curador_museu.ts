import MandatoCuradorMuseu from './mandato_curador_museu';
import Person from './person';

type CuradorMuseu = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoCuradorMuseu[];
};

export default CuradorMuseu;
