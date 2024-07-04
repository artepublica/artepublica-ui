import Pessoa from './pessoa';

export default class Fato {
  constructor(
    datainicio: string,
    datafim: string,
    tipo: string,
    descrição: string,
    pessoas: Pessoa[],
    cidade: string,
  ) {
    this.ID = undefined;
    this.DataInicio = datainicio;
    this.DataFim = datafim;
    this.Tipo = tipo;
    this.Descrição = descrição;
    this.Pessoas = pessoas;
    this.Cidade = cidade;
  }
  ID?: number;
  DataInicio?: string;
  DataFim?: string;
  Tipo?: string;
  Descrição?: string;
  Pessoas?: Pessoa[];
  Cidade?: string;
}
