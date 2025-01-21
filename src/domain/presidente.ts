import Person from './person';
import PresidentTerm from './president_term';

type Presidente = {
  ID?: number;
  Person?: Person;
  Mandatos?: PresidentTerm[];
};

export default Presidente;
