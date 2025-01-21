import * as persons from './persons';
import RevistaIndependentes from '../../domain/revista_independente';

export const Malasartes: RevistaIndependentes = {
  Nome: 'Malasartes',
  Participantes: [
    persons.RonaldoBrito,
    persons.JoseResende,
    persons.WaltercioCaldas,
    //... outros criticos TODO
  ],
  DataInicio: '1975',
  DataFim: '1976',
};
