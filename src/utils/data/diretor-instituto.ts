import * as pessoas from './pessoa';
import DiretorInstituto from '../../domain/diretor-instituto';

export const LauroCavalcanti: DiretorInstituto = {
  Pessoa: pessoas.LauroCavalcanti,
  Mandatos: [
    {
      NomeInstituto: 'Instituto Casa Roberto Marinho',
      AbreviacaoInstituto: undefined,
      Cidade: undefined,
      Estado: undefined,
      Pais: 'Brasil',
      DataInicio: '2016',
      DataFim: '...',
    },
  ],
};
