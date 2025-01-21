import MandatoDiretorDivisaoSecretaria from './mandato_diretor_divisao_secretaria';
import Person from './person';

type DiretorSecretaria = {
  ID?: number;
  Person?: Person;
  Mandatos?: MandatoDiretorDivisaoSecretaria[];
};

export default DiretorSecretaria;
