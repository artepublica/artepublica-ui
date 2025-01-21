import MandatoPresidenteTeatro from './mandato_presidente_teatro';
import Person from './person';

type PresidenteTeatro = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoPresidenteTeatro[];
};

export default PresidenteTeatro;
