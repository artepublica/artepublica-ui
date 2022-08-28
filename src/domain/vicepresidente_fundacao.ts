import MandatoFundacao from './mandato_fundacao';
import Pessoa from './pessoa';

type VicePresidenteFundacao = {
    ID?: number;
    Pessoa?: Pessoa;
    Mandatos?: MandatoFundacao[];
};

export default VicePresidenteFundacao;
