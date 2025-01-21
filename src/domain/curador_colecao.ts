import MandatoCuradorColecao from './mandato_curador_colecao';
import Person from './person';

type CuradorColecao = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoCuradorColecao[];
};

export default CuradorColecao;
