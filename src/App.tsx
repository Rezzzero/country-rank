import { useEffect, useState } from "react";
import logo from "../src/assets/logo/logo.svg";
import { CountryList } from "./components/country-list/CountryList";
import { CountryType } from "./types/types";

function App() {
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
    <div className="container mx-auto flex flex-col items-center pt-30 px-8 gap-23">
      <img src={logo} alt="logo" className="mx-auto" />
      <div className="bg-[#1b1d1f] w-full text-white px-6 pt-6 pb-2 border-2 border-[#282B30] rounded-xl">
        {data ? <CountryList data={data} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
