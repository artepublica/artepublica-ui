import MandatoDiretorMuseu from './mandato_diretor_museu';
import Person from './person';

type DiretorMuseu = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoDiretorMuseu[];
};

export default DiretorMuseu;
