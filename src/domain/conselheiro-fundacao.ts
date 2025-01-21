import MandatoFundacao from './mandato_fundacao';
import Person from './person';

type ConselheiroFundacao = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoFundacao[];
};

export default ConselheiroFundacao;
