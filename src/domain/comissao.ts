import Pessoa from './pessoa';

type Comissao = {
  ID?: number;
  Nome?: string;
  Descricao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Coordenadores?: Pessoa[];
  Participantes?: Pessoa[];
  IntituicsoesEnvolvidas?: string[];
};

export default Comissao;
