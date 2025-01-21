import MandatoFundacao from './mandato_fundacao';
import Person from './person';

type VicePresidenteFundacao = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoFundacao[];
};

export default VicePresidenteFundacao;
