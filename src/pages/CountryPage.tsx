import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CountryType } from "../types/types";

export const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryType | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const json = await response.json();
        setCountry(json[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (name) {
      fetchCountry();
    }
  }, [name]);

  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt="flag" />
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <p>Region: {country.region}</p>
    </div>
  );
};
