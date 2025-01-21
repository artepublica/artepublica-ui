import * as persons from './persons';
import JornalIndependente from '../../domain/jornal_independente';

export const AParteDoFogo: JornalIndependente = {
  Nome: 'A parte do Fogo',
  Cidade: undefined,
  Estado: undefined,
  Pais: undefined,
  Participantes: [
    persons.RonaldoBrito,
    persons.JoseResende,
    persons.WaltercioCaldas, //TODO n aparece na citacao 272 mas aparece na biografia dele e na 252
    persons.PauloVenancioFilho,
    //persons.CildoMeireles
    //persons.JoaoMouraJunior
    persons.PauloSergioDuarte,
    //persons.RodrigoNeves
    persons.Tunga,
  ],
  DataInicio: undefined,
  DataFim: undefined,
};
