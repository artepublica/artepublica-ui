import MandatoFundacao from './mandato_fundacao';
import Person from './person';

type PresidenteFundacao = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoFundacao[];
};

export default PresidenteFundacao;
