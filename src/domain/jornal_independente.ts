import Pessoa from './pessoa';

type JornalIndependente = {
  ID?: number;
  Nome?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Participantes?: Pessoa[];
  DataInicio?: string;
  DataFim?: string;
};

export default JornalIndependente;
