import Person from './person';

export default class Fact {
  constructor(
    startDate: string,
    endDate: string,
    type: string,
    description: string,
    persons: Person[],
    city: string,
  ) {
    this.ID = undefined;
    this.StartDate = startDate;
    this.EndDate = endDate;
    this.Type = type;
    this.Description = description;
    this.Persons = persons;
    this.City = city;
  }
  ID?: number;
  StartDate?: string;
  EndDate?: string;
  Type?: string;
  Description?: string;
  Persons?: Person[];
  City?: string;
}
