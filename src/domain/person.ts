import Fact from './fact';
import Profession from './profession';
import Specialty from './specialty';

type Person = {
  ID?: number;
  Name?: string;
  Birth?: string;
  BirthCountryCity?: string;
  Death?: string;
  DeathCountryCity?: string;
  Description?: string;
  Professions?: Profession[];
  Specialties?: Specialty[];
  Facts?: Fact[];
};

export default Person;
