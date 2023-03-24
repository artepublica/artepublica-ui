import * as pessoas from './pessoa';
import CoordenadorNucleMuseu from '../../domain/coordenador_nucleo_museu';

export const ReynaldoRoels: CoordenadorNucleMuseu = {
    Pessoa: pessoas.ReynaldoRoels,
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
