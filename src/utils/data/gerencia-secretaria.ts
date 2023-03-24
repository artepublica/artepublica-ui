import * as pessoas from './pessoa';
import GenenteSecretaria from '../../domain/gerente_secretaria';

export const EverardoMiranda: GenenteSecretaria = {
    Pessoa: pessoas.EverardoMiranda,
    Mandatos: [
        {
            NomeSecretaria: 'Secretaria Municipal de Cultura',
            NomeGerencia: 'Gerente Projetos Especiais',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '1990',
            DataFim: '1993',
        },
    ],
};

export const MauroMonizFreire: GenenteSecretaria = {
    Pessoa: pessoas.MauroMonizFreire,
    Mandatos: [
        {
            NomeSecretaria: 'Secretaria Municipal de Obras', //TODO
            NomeGerencia: 'Gerente de Monumentos e Chafarizes',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: undefined,
            DataFim: undefined,
        },
    ],
};
