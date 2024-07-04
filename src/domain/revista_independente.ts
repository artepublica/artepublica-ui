import Pessoa from './pessoa';

type RevistaIndependente = {
  ID?: number;
  Nome?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  Participantes?: Pessoa[];
  DataInicio?: string;
  DataFim?: string;
};

export default RevistaIndependente;
