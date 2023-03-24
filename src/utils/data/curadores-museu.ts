import * as pessoas from './pessoa';
import CuradorMuseu from '../../domain/curador_museu';

export const FernandoCocchiarale: CuradorMuseu = {
    Pessoa: pessoas.FernandoCocchiarale,
    Mandatos: [
        {
            NomeMuseu: 'Museu de Arte Moderna do Rio de Janeiro',
            AbreviacaoMuseu: 'MAM Rio',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '2000',
            DataFim: '2007',
        },
        {
            NomeMuseu: 'Museu de Arte Moderna do Rio de Janeiro',
            AbreviacaoMuseu: 'MAM Rio',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '2016',
            DataFim: '...',
        },
    ],
};

export const ReynaldoRoels: CuradorMuseu = {
    Pessoa: pessoas.ReynaldoRoels,
    Mandatos: [
        {
            NomeMuseu: 'Museu de Arte Moderna do Rio de Janeiro',
            AbreviacaoMuseu: 'MAM Rio',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '2007',
            DataFim: '2009',
        },
    ],
};

export const PauloHerkenhoff: CuradorMuseu = {
    Pessoa: pessoas.PauloHerkenhoff,
    Mandatos: [
        {
            NomeMuseu: 'Museu de Arte Moderna do Rio de Janeiro',
            AbreviacaoMuseu: 'MAM Rio',
            Cidade: 'Rio de Janeiro',
            Estado: 'Rio de Janeiro',
            Pais: 'Brasil',
            DataInicio: '1985',
            DataFim: '1999',
        },
    ],
};
