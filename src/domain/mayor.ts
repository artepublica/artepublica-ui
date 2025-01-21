import MayorTerm from './mayor_term';
import Person from './person';

type Mayor = {
  ID?: number;
  Person?: Person;
  Mandatos?: MayorTerm[];
};

export default Mayor;
