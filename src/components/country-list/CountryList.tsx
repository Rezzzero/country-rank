import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CountryType } from "../../types/types";
import Paper from "@mui/material/Paper";
import { Search } from "../search/Search";
import { Filter } from "../filters/Filter";
import { useEffect, useState } from "react";
import { Regions, Columns } from "../../constants";

export const CountryList = ({ data }: { data: CountryType[] }) => {
  const [originalData, setOriginalData] = useState<CountryType[]>(data);
  const [filteredData, setFilteredData] = useState<CountryType[]>(data);
  const [selectedCol, setSelectedCol] = useState<keyof CountryType>(Columns[0]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(Regions);
  const [unMember, setUnMember] = useState(false);
  const [independent, setIndependent] = useState(false);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCol(event.target.value as keyof CountryType);
  };

  const handleSelectRegion = (region: string) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  useEffect(() => {
    setOriginalData(data);
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    let updatedData = originalData.filter((country) => {
      const regionMatch = selectedRegions.includes(country.region);
      const independentMatch = independent
        ? country.independent === true
        : true;
      const unMemberMatch = unMember ? country.unMember === true : true;
      return regionMatch && independentMatch && unMemberMatch;
    });

    updatedData = [...updatedData].sort((a, b) =>
      b[selectedCol] > a[selectedCol] ? 1 : -1
    );

    setFilteredData(updatedData);
  }, [selectedRegions, selectedCol, independent, unMember, originalData, data]);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1>Found {data.length} countries</h1>
        <Search />
      </div>
      <div className="flex gap-5">
        <Filter
          selectedCol={selectedCol}
          handleSelectChange={handleSelectChange}
          selectedRegions={selectedRegions}
          handleSelectRegion={handleSelectRegion}
          unMember={unMember}
          setUnMember={setUnMember}
          independent={independent}
          setIndependent={setIndependent}
        />
        <TableContainer
          component={Paper}
          sx={{ overflow: "auto", height: "400px" }}
        >
          <Table
            sx={{
              minWidth: 650,
              "& th, & td": { color: "white", borderBottom: "none" },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#1b1d1f" }}>
                <TableCell>Flag</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Population</TableCell>
                <TableCell align="left">
                  Area (km<sup>2</sup>)
                </TableCell>
                <TableCell align="left">Region</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((country: CountryType) => (
                <TableRow
                  key={country.name.common}
                  sx={{
                    backgroundColor: "#1b1d1f",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={country.flags.svg}
                      alt="flag"
                      className="w-[50px] h-[35px] rounded-sm"
                    />
                  </TableCell>
                  <TableCell align="left">{country.name.common}</TableCell>
                  <TableCell align="left">{country.population}</TableCell>
                  <TableCell align="left">{country.area}</TableCell>
                  <TableCell align="left">{country.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
