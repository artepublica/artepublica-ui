import * as persons from './persons';
import CoordenadorNucleMuseu from '../../domain/coordenador_nucleo_museu';

export const ReynaldoRoels: CoordenadorNucleMuseu = {
  Person: persons.ReynaldoRoels,
  Mandatos: [
    {
      NomeMuseu: 'Museu de Arte Moderna do Rio de Janeiro',
      AbreviacaoMuseu: 'MAM Rio',
      NomeCoordenadoria: 'Núcleo de Pesquisa',
      Cidade: 'Rio de Janeiro',
      Estado: 'Rio de Janeiro',
      Pais: 'Brasil',
      DataInicio: '1991',
      DataFim: '1992',
    },
  ],
};
