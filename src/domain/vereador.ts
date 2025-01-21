import MandatoVereador from './mandato_vereador';
import Person from './person';

type Vereador = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoVereador[];
};

export default Vereador;
