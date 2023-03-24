import * as pessoas from './pessoa';
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
        pessoas.JoseResende,
        //pessoas.WesleyDuckLee
        //pessoas.NelsonLeimer
        //pessoas.GeraldoBarros
        //pessoas.FredericoNasser
        //pessoas.CarlosFajardo
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
        pessoas.FranzWeissmann,
        pessoas.IvanSerpa,
        pessoas.AluisioCarvao,
        //pessoas.CarlosVal
        pessoas.DecioVieira,
        //pessoas.JoaoJoseDaSilvaCosta,
        pessoas.LygiaClark,
        pessoas.LygiaPape,
        //pessoas.VicentIbberson,
    ],
};

export const GrupoNeoconcreto: Grupo = {
    Nome: 'Grupo Neoconcreto',
    Descricao: undefined,
    DataInicio: undefined,
    DataFim: undefined,
    Participantes: [
        pessoas.FranzWeissmann,
    ],
};
