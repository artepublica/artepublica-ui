import MandatoSecretario from './mandato_secretario';
import Person from './person';
import Profession from './profession';

type Secretario = {
  ID?: number;
  Person?: Person;
  IDSecretaria?: string;
  Profession?: Profession;
  Mandatos?: MandatoSecretario[];
};

export default Secretario;
