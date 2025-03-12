export interface CountryType {
  area: number;
  capital: string[];
  flags: {
    svg: string;
  };
  independent: boolean;
  name: {
    common: string;
  };
  population: number;
  region: string;
  continents: string[];
  language: {
    [key: string]: string;
  };
}
