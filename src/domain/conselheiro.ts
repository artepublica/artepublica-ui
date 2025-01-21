import MandatoConselheiro from './mandato_conselheiro';
import Person from './person';

type Conselheiro = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoConselheiro[];
};

export default Conselheiro;
