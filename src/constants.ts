import { CountryType } from "./types/types";

export const Regions = [
  "Americas",
  "Antarctic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];

export const Columns: (keyof CountryType)[] = [
  "population",
  "area",
  "region",
  "name",
];
