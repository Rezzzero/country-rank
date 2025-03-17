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
  unMember: boolean;
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
