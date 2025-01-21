import MandatoAssessorSecretaria from './mandato_assessor_secretaria';
import Person from './person';

type AssessorSecretaria = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoAssessorSecretaria[];
};

export default AssessorSecretaria;
