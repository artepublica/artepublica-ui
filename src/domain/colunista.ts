import Pessoa from './pessoa';

type Colunista = {
  ID?: number;
  Pessoa?: Pessoa;
  Jornal?: string;
  Coluna?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Artigos?: {
    Titulo?: string;
    Data?: string;
  }[];
};

export default Colunista;
