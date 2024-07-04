import Pessoa from './pessoa';

type Grupo = {
  ID?: number;
  Nome?: string;
  Descricao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Participantes?: Pessoa[];
};

export default Grupo;
