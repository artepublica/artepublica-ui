import * as pessoas from './pessoa';
import ArtigoJornal from '../../domain/artigo-jornal';

export const HelenaSevro_JornalDoBrasil_CidadeAberta: ArtigoJornal = {
  Jornal: 'Jornal do Brasil',
  Titulo: 'Cidade Aberta', // TODO ???
  Autores: [pessoas.HelenaMariaPortoSeveroDaCosta],
  Cidade: 'Rio de Janeiro',
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Data: '30/12/1994',
};

export const OBommOPosBoomODisBoom: ArtigoJornal = {
  Jornal: 'Opinião',
  Titulo: 'O Boom, o Pós-Boom, o Dis-Boom', // TODO ???
  Autores: [
    pessoas.RonaldoBrito,
    pessoas.JoseResende,
    pessoas.WaltercioCaldas,
    //pessoas.CarlosZilio
  ],
  Cidade: 'Rio de Janeiro', // TODO ???
  Estado: 'Rio de Janeiro',
  Pais: 'Brasil',
  Data: '03/09/1976',
};
