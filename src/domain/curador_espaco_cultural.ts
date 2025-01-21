import MandatoCuradorEspacoCultural from './mandato_curador_espaco_cultural';
import Person from './person';

type CuradorEspacoCultural = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoCuradorEspacoCultural[];
};

export default CuradorEspacoCultural;
