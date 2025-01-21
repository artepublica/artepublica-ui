import MandatoGerenteSecretaria from './mandato_gerente_secretaria';
import Person from './person';

type GerenteSecretaria = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoGerenteSecretaria[];
};

export default GerenteSecretaria;
