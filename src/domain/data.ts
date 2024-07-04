export default class Data {
  constructor(dataobra: string, evento: string) {
    this.ID = undefined;
    this.DataObra = dataobra;
    this.Evento = evento;
  }
  ID?: number;
  DataObra?: string;
  Evento?: string;
}
