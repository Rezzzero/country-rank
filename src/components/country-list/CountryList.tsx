import { CountryType } from "../../types/types";
import { Country } from "../country/Country";

export const CountryList = ({ data }: { data: CountryType[] }) => {
  console.log(data);
  return (
    <div className="flex flex-col">
      <tr>
        <td>Flag</td>
        <td>Name</td>
        <td>Population</td>
        <td>Area</td>
        <td>Region</td>
      </tr>
      {data.map((country: CountryType) => (
        <Country key={country.name.common} country={country} />
      ))}
    </div>
  );
};
