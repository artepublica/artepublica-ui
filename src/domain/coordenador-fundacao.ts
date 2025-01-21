import MandatoFundacao from './mandato_fundacao';
import Person from './person';

type CoordenadorFundacao = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoFundacao[];
};

export default CoordenadorFundacao;
