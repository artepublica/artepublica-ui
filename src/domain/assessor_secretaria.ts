import MandatoAssessorSecretaria from './mandato_assessor_secretaria';
import Pessoa from './pessoa';

type AssessorSecretaria = {
  ID?: number;
  Pessoa?: Pessoa;
  Mandatos?: MandatoAssessorSecretaria[];
};

export default AssessorSecretaria;
