import { Fabricante } from '@domain';

import * as pessoas from './pessoa';

export const FundicaoValDOsne: Fabricante = {
  ID: undefined,
  Nome: `Fundição Val D'Osne`,
  Fundacao: '1836',
  Cidade: 'Osne-le-Val',
  Extinao: '1986',
  Descriçao: 'Fabrica direcionada fundição artística.',
  Fatos: [
    {
      DataInicio: '05/04/1836',
      DataFim: undefined,
      Tipo: 'Autorização',
      Descrição:
        'Recebeu autorizaçao para construir um alto-forno no Val DOsne',
      Pessoas: [pessoas.PierreVictorAndre],
      Cidade: 'Rio de Janeiro',
    },
    {
      DataInicio: '1870',
      DataFim: '1892',
      Tipo: 'Autorização',
      Descrição: 'Societé Anonyme des Fonderies dart du Val dOsne',
      Pessoas: undefined,
      Cidade: 'Haute-Marne',
    },
    {
      DataInicio: undefined,
      DataFim: undefined,
      Tipo: 'Fundição artística',
      Descrição: undefined,
      Pessoas: [
        pessoas.MathurinMoreau,
        pessoas.LouisSauvageau,
        pessoas.AugusteMartin,
        pessoas.HenriFredericIselin,
      ],
      Cidade: 'Haute-Marne',
    },
    {
      DataInicio: undefined,
      DataFim: undefined,
      Tipo: undefined,
      Descrição:
        'Existem no Brasil cerca de 130 obras, entre estátuas, fontes, e peças de mobiliário urbano',
      Pessoas: [
        pessoas.MathurinMoreau,
        pessoas.LouisSauvageau,
        pessoas.AugusteMartin,
        pessoas.HenriFredericIselin,
      ],
      Cidade: 'Rio de Janeiro',
    },
  ],
};

export const ZaniFundiçãoArtísticaEMetalúrgica: Fabricante = {
  ID: undefined,
  Nome: `Zani Fundição Artística E Metalúrgica Ltda.`,
  Cidade: 'Rio de Janeiro',
};
