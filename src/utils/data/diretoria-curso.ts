import * as persons from './persons';
import DiretorCurso from '../../domain/diretor_curso';

export const ReynaldoRoels: DiretorCurso = {
  // TODO: n seria reitor??
  Person: persons.ReynaldoRoels,
  Mandatos: [
    {
      Instituicao: 'Escola de Artes Visuais do Parque Laje',
      AbreviacaoInstituicao: undefined,
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      Curso: undefined,
      DataInicio: '2002',
      DataFim: '2006',
    },
  ],
};

export const AmilcarDeCastro: DiretorCurso = {
  // TODO: n seria reitor??
  Person: persons.AmilcarDeCastro,
  Mandatos: [
    {
      Instituicao: 'Escola Guinard',
      AbreviacaoInstituicao: undefined,
      Cidade: 'Belo Horizonte',
      Estado: 'Minas Gerais',
      Pais: 'Brasil',
      Curso: undefined,
      DataInicio: undefined,
      DataFim: undefined,
    },
  ],
};
