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
      <div className="flex items-center justify-between mb-6">
        <h1>Found {data.length} countries</h1>
        <Search />
      </div>
      <div className="flex">
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
          sx={{
            overflow: "auto",
            maxHeight: "670px",
            scrollbarWidth: "none",
          }}
        >
          <Table
            sx={{
              minWidth: 650,
              "& th, & td": {
                color: "white",
                borderBottom: "none",
                px: 0,
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#1b1d1f",
                  borderBottom: "3px solid #282B30",
                }}
              >
                <TableCell sx={{ width: "100px" }}>Flag</TableCell>
                <TableCell sx={{ width: "200px" }}>Name</TableCell>
                <TableCell>Population</TableCell>
                <TableCell>
                  Area (km<sup>2</sup>)
                </TableCell>
                <TableCell>Region</TableCell>
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
                  <TableCell component="th" scope="row" sx={{ width: "100px" }}>
                    <img
                      src={country.flags.svg}
                      alt="flag"
                      className="w-[50px] h-[35px] rounded-sm"
                    />
                  </TableCell>
                  <TableCell sx={{ width: "200px" }}>
                    {country.name.common}
                  </TableCell>
                  <TableCell>{country.population}</TableCell>
                  <TableCell>{country.area}</TableCell>
                  <TableCell>{country.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
