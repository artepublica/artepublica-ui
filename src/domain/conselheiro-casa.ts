import MandatoCasa from './mandato_casa';
import Person from './person';

type ConselheiroCasa = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoCasa[];
};

export default ConselheiroCasa;
