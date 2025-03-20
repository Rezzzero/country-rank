export interface CountryType {
  area: number;
  borders?: string[];
  capital: string[];
  flags: {
    svg: string;
  };
  independent: boolean;
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  continents: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  unMember: boolean;
  subregion?: string;
}

export interface FilterProps {
  selectedCol: string;
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectedRegions: string[];
  handleSelectRegion: (region: string) => void;
  unMember: boolean;
  setUnMember: (unMember: boolean) => void;
  independent: boolean;
  setIndependent: (independent: boolean) => void;
}

export interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  text: string;
  id: string;
}
