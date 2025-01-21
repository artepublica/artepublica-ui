import * as persons from './persons';
import Grupo from '../../domain/grupo';

export const GrupoRex: Grupo = {
  Nome: 'Grupo Rex',
  Descricao: undefined,
  Cidade: undefined,
  Estado: undefined,
  Pais: undefined,
  DataInicio: '1966',
  DataFim: undefined,
  Participantes: [
    persons.JoseResende,
    //persons.WesleyDuckLee
    //persons.NelsonLeimer
    //persons.GeraldoBarros
    //persons.FredericoNasser
    //persons.CarlosFajardo
  ],
};

export const GrupoFrente: Grupo = {
  Nome: 'Grupo Frente',
  Descricao: undefined,
  Cidade: undefined,
  Estado: undefined,
  Pais: undefined,
  DataInicio: undefined,
  DataFim: undefined,
  Participantes: [
    persons.FranzWeissmann,
    persons.IvanSerpa,
    persons.AluisioCarvao,
    //persons.CarlosVal
    persons.DecioVieira,
    //persons.JoaoJoseDaSilvaCosta,
    persons.LygiaClark,
    persons.LygiaPape,
    //persons.VicentIbberson,
  ],
};

export const GrupoNeoconcreto: Grupo = {
  Nome: 'Grupo Neoconcreto',
  Descricao: undefined,
  DataInicio: undefined,
  DataFim: undefined,
  Participantes: [persons.FranzWeissmann],
};
