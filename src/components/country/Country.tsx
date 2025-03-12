import { CountryType } from "../../types/types";

export const Country = ({ country }: { country: CountryType }) => {
  return (
    <div className="flex items-center gap-6 mb-2">
      <img
        src={country.flags.svg}
        alt="flag"
        className="w-[50px] h-[35px] rounded-sm"
      />
      <p>{country.name.common}</p>
      <p>{country.population}</p>
      <p>{country.area}</p>
      <p>{country.region}</p>
    </div>
  );
};
