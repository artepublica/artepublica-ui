import { Fabricante } from '@domain';

import * as persons from './persons';

export const FundicaoValDOsne: Fabricante = {
  ID: undefined,
  Nome: `Fundição Val D'Osne`,
  Fundacao: '1836',
  Cidade: 'Osne-le-Val',
  Extinao: '1986',
  Descriçao: 'Fabrica direcionada fundição artística.',
  Fatos: [
    {
      StartDate: '05/04/1836',
      EndDate: undefined,
      Type: 'Autorização',
      Description:
        'Recebeu autorizaçao para construir um alto-forno no Val DOsne',
      Persons: [persons.PierreVictorAndre],
      City: 'Rio de Janeiro',
    },
    {
      StartDate: '1870',
      EndDate: '1892',
      Type: 'Autorização',
      Description: 'Societé Anonyme des Fonderies dart du Val dOsne',
      Persons: undefined,
      City: 'Haute-Marne',
    },
    {
      StartDate: undefined,
      EndDate: undefined,
      Type: 'Fundição artística',
      Description: undefined,
      Persons: [
        persons.MathurinMoreau,
        persons.LouisSauvageau,
        persons.AugusteMartin,
        persons.HenriFredericIselin,
      ],
      City: 'Haute-Marne',
    },
    {
      StartDate: undefined,
      EndDate: undefined,
      Type: undefined,
      Description:
        'Existem no Brasil cerca de 130 obras, entre estátuas, fontes, e peças de mobiliário urbano',
      Persons: [
        persons.MathurinMoreau,
        persons.LouisSauvageau,
        persons.AugusteMartin,
        persons.HenriFredericIselin,
      ],
      City: 'Rio de Janeiro',
    },
  ],
};

export const ZaniFundiçãoArtísticaEMetalúrgica: Fabricante = {
  ID: undefined,
  Nome: `Zani Fundição Artística E Metalúrgica Ltda.`,
  Cidade: 'Rio de Janeiro',
};
