import * as exposicoes from './exposicoes';
import * as obras from './obra_artepublica';
import * as persons from './persons';
import Premio from '../../domain/premio';

export const MedalhaDeOuroSalaoOficial1934: Premio = {
  Nome: 'Medalha de Ouro',
  Evento: exposicoes.SalaoOficial1934,
  Data: '1934',
  Persons: [
    persons.HildegardoLeaoVelloso,
    persons.ManoelConstantino,
    persons.HaydeaSantiago,
    persons.GasparMagalhaes,
  ],
  Descricao: undefined,
};

export const BienalDeSaoPaulo1957: Premio = {
  Nome: 'Melhor escultor brasileiro',
  Evento: exposicoes.SalaoDeArteModerna1958,
  Data: '1957',
  Persons: [persons.FranzWeissmann],
  Descricao: undefined,
};

export const ViagemAoExteriorSalaoDeArteModerna1958: Premio = {
  Nome: 'Viagem ao exterior',
  Evento: exposicoes.SalaoDeArteModerna1958,
  Data: '1958',
  Persons: [persons.FranzWeissmann],
  Descricao: undefined,
};

export const PrêmioNacionalDeArteDoMinistérioDaCultura1993: Premio = {
  Nome: 'Prêmio Nacional de Arte do Ministério da Cultura',
  Evento: exposicoes.SalaoNacionalDeArtesPlasticas1993,
  Data: '02/12/1993',
  Persons: [persons.FranzWeissmann],
  Descricao:
    'Criado pelo Ibac, o prêmio no valor de CR$900mil foi entregue na abertura do 13 Salão Nacional de Artes Plásticas, no Palácio Gustavo Capanema',
};

export const OrdemAoMeritoDoMinistérioDaCultura1998: Premio = {
  Nome: 'Ordem do Mérito do Ministério da Cultura',
  Instituicao: 'Ministério da Cultura',
  Cidade: undefined,
  Data: '05/11/1998',
  Persons: [persons.FranzWeissmann],
  Descricao: 'O prêmio foi entregue ao escultor pelo presidente da República',
};

export const PremioNacionalDeArte1995: Premio = {
  Nome: 'Prêmio Nacional de Arte',
  Instituicao: 'Ministério da Cultura', // TODO??
  Cidade: 'Rio de Janeiro',
  Data: '05/12/1995',
  Persons: [persons.AmilcarDeCastro],
  Descricao:
    'Amilcar é o terceiro artista brasileiro a receber o prêmio, criado em 1993 pelo então Ministro da Cultura, Antonio Houaiss, a pedido de Ferreira Gullar, na época presidente da Ibac, hoje FUNARTE',
};

export const ViagemAoExteriorSalaoDeArteModerna1967: Premio = {
  Nome: 'Viagem ao exterior',
  Evento: exposicoes.SalaoDeArteModerna1967,
  Data: '1967',
  Persons: [persons.AmilcarDeCastro],
  Descricao: undefined,
};

export const BienalDeSaoPaulo1953: Premio = {
  Nome: undefined,
  Evento: exposicoes.BienalDeSaoPaulo1953,
  Data: '1953',
  Persons: [persons.AmilcarDeCastro],
  Obra: obras.SemTitulo_AmilcarDeCastro,
  Descricao: undefined,
};

export const PrêmioNacionalDeArteDoMinistérioDaCultura1995: Premio = {
  Nome: 'Prêmio Nacional de Arte do Ministério da Cultura', //TODO?? esse mesmo?
  Evento: undefined,
  Data: '1995',
  Persons: [persons.AmilcarDeCastro],
  Descricao:
    'Amílcar de Castro recebe Prêmio Nacional de Arte. Jornal do Commercio, Rio de Janeiro, 06 de dez. de 1995',
};
