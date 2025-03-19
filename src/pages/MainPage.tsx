import { useEffect, useState } from "react";
import { CountryList } from "../components/country-list/CountryList";
import { CountryType } from "../types/types";

export const MainPage = () => {
  const [data, setData] = useState<CountryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?sort=population"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#1b1d1f] w-full text-white px-4 md:px-6 pt-6 pb-2 border-2 border-[#282B30] rounded-xl">
      {data ? <CountryList data={data} /> : <p>Loading...</p>}
    </div>
  );
};
