import Fato from './fato';

type Fabricante = {
    ID?: number;
    Nome?: string;
    Fundacao?: string;
    Extinao?: string;
    Cidade?: string;
    Descriçao?: string;
    Fatos?: Fato[];
};

export default Fabricante;
