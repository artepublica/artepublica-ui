import * as persons from './persons';
import DiretorFaculade from '../../domain/diretor_faculdade';

export const LuizPauloFernandezConde: DiretorFaculade = {
  Person: persons.LuizPauloFernandezConde,
  Mandatos: [
    {
      Faculdade: 'Universidade Federal do Rio de Janeiro',
      AbreviacaoFaculdade: 'UFRJ',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      Departamento: undefined,
      Curso: 'Faculdade de Arquitetura de Urbanismo',
      DataInicio: '1990',
      DataFim: '1992',
    },
  ],
};
