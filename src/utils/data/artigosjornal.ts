import * as persons from './persons';
import ArtigoJornal from '../../domain/artigo-jornal';

export const HelenaSevro_JornalDoBrasil_CidadeAberta: ArtigoJornal = {
  Jornal: 'Jornal do Brasil',
  Titulo: 'Cidade Aberta', // TODO ???
  Autores: [persons.HelenaMariaPortoSeveroDaCosta],
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Data: '30/12/1994',
};

export const OBommOPosBoomODisBoom: ArtigoJornal = {
  Jornal: 'Opinião',
  Titulo: 'O Boom, o Pós-Boom, o Dis-Boom', // TODO ???
  Autores: [
    persons.RonaldoBrito,
    persons.JoseResende,
    persons.WaltercioCaldas,
    //persons.CarlosZilio
  ],
  Cidade: 'Rio de Janeiro', // TODO ???
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Data: '03/09/1976',
};
