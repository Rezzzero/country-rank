import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CountryType } from "../types/types";
import { formatNumber } from "../utils/utils";
import logo from "../assets/logo/logo.svg";

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
    <div className="mx-auto md:mx-[6px] flex flex-col items-center pt-10 pb-12 px-2 gap-20 md:pt-15 lg:px-6 lg:pt-24 lg:gap-26">
      <img src={logo} alt="logo" className="mx-auto w-[130px] md:w-[150px]" />
      <div className="bg-[#1b1d1f] flex flex-col w-[660px] h-full text-white px-4 md:px-6 pt-36 pb-2 border-2 border-[#282B30] rounded-xl relative">
        <img
          src={country.flags.svg}
          alt="flag"
          className="absolute top-[-45px] left-1/2 -translate-x-1/2 w-[250px] rounded-lg"
        />
        <h1 className="text-center text-2xl mb-6">{country.name.common}</h1>
        <div className="flex mx-auto gap-10">
          <div className="flex bg-[#282B30] rounded-lg px-4 py-2">
            <p className="mr-2 pr-2 border-r-3 border-[#1b1d1f]">Population</p>
            <p>{formatNumber(country.population)}</p>
          </div>
          <div className="flex bg-[#282B30] rounded-lg px-4 py-2">
            <p className="mr-2 pr-2 border-r-3 border-[#1b1d1f]">Area (km²)</p>
            <p>{formatNumber(country.area)}</p>
          </div>
        </div>
        <p>Region: {country.region}</p>
      </div>
    </div>
  );
};
