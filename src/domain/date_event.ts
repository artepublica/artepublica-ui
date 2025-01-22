export default class DateEvent {
  constructor(date: string, event: string) {
    this.ID = undefined;
    this.Date = date;
    this.Event = event;
  }
  ID?: number;
  Date?: string;
  Event?: string;
}
