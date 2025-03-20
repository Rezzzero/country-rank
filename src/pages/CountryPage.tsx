import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/utils";
import logo from "../assets/logo/logo.svg";
import { useCountry } from "../hooks/useCountry";

export const CountryPage = () => {
  const { name } = useParams();
  const { country, borders } = useCountry({ name: name || "" });

  if (!country) return <p>Loading...</p>;

  return (
    <div className="md:mx-auto md:mx-[6px] flex flex-col items-center pt-10 pb-12 md:px-2 gap-20 md:pt-15 md:gap-22 lg:px-6 lg:pt-24 lg:gap-26">
      <img src={logo} alt="logo" className="mx-auto w-[130px] md:w-[150px]" />
      <div className="bg-[#1b1d1f] flex flex-col w-full h-full text-[#D2D5DA] md:px-6 pt-36 pb-16 md:pb-2 border-y-2 md:border-2 border-[#282B30] md:rounded-xl relative">
        <img
          src={country.flags.svg}
          alt="flag"
          className="absolute top-[-45px] left-1/2 -translate-x-1/2 w-[250px] rounded-xl"
        />
        <h1 className="text-center text-2xl">{country.name.common}</h1>
        <p className="text-center mb-6">{country.name.official}</p>
        <div className="flex mx-auto gap-10 mb-8">
          <div className="flex bg-[#2c3037] rounded-lg px-4 py-1">
            <p className="mr-3 pr-3 border-r-2 border-[#1f2023] py-2 text-[14px]">
              Population
            </p>
            <p className="py-2">{formatNumber(country.population)}</p>
          </div>
          <div className="flex bg-[#2c3037] rounded-lg px-4 py-1">
            <p className="mr-3 pr-3 border-r-2 border-[#1f2023] py-2 text-[14px]">
              Area (km²)
            </p>
            <p className="py-2">{formatNumber(country.area)}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between p-4 border-y-2 border-[#282B30]">
            <p>Capital</p>
            <p>{country.capital}</p>
          </div>
          <div className="flex justify-between p-4 border-b-2 border-[#282B30]">
            <p>Subregion</p>
            <p>{country.subregion}</p>
          </div>
          <div className="flex justify-between p-4 border-b-2 border-[#282B30]">
            <p>Language</p>
            <p>
              {country.languages && Object.values(country.languages).join(", ")}
            </p>
          </div>
          <div className="flex justify-between p-4 border-b-2 border-[#282B30]">
            <p>Currencies</p>
            <p>
              {country.currencies &&
                Object.values(country.currencies).map(
                  (currency) => currency.name
                )}
            </p>
          </div>
          <div className="flex justify-between p-4 border-b-2 border-[#282B30]">
            <p>Continents</p>
            <p>{country.continents}</p>
          </div>
        </div>
        <h2 className="p-4">Neighboring Countries:</h2>
        <ul className="flex flex-wrap gap-4 px-4">
          {borders.length > 0 ? (
            borders.map((border) => (
              <li key={border.name.common} className="text-[11px]">
                <img
                  src={border.flags.svg}
                  alt={`${border.name.common} flag`}
                  className="w-16 h-10 rounded-sm mb-1"
                />
                {border.name.common}
              </li>
            ))
          ) : (
            <p>No neighboring countries found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
