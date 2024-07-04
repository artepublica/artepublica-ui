import MandatoFundacao from './mandato_fundacao';
import Pessoa from './pessoa';

type PresidenteFundacao = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoFundacao[];
};

export default PresidenteFundacao;
