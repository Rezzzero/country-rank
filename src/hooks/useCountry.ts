import { useEffect, useState } from "react";
import { CountryType } from "../types/types";

export const useCountry = ({ name }: { name: string }) => {
  const [country, setCountry] = useState<CountryType | null>(null);
  const [borders, setBorders] = useState<CountryType[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const json = await response.json();

        if (!json || json.length === 0) {
          throw new Error("Country not found");
        }

        const countryData = json[0];
        setCountry(countryData);

        if (countryData.borders?.length) {
          const bordersResponse = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
              ","
            )}`
          );
          const bordersData = await bordersResponse.json();
          setBorders(bordersData);
        } else {
          setBorders([]);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountry();
  }, [name]);

  return { country, borders };
};
