import Pessoa from './pessoa';

type Graduacao = {
  ID?: number;
  Pessoa?: Pessoa;
  Faculdade?: string;
  AbreviacaoFaculdade?: string;
  Departamento?: string;
  Curso?: string;
  Cidade?: string;
  Estado?: string;
  Pais?: string;
  DataInicio?: string;
  DataFim?: string;
  Finalizou?: boolean;
};

export default Graduacao;
