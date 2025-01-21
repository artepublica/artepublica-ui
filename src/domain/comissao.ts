import Person from './person';

type Comissao = {
  ID?: number;
  Nome?: string;
  Descricao?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Coordenadores?: Person[];
  Participantes?: Person[];
  IntituicsoesEnvolvidas?: string[];
};

export default Comissao;
