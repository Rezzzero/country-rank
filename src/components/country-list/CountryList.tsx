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
import { StyledTableRow } from "../styled-table-row/StyledTableRow";
import { formatNumber } from "../../utils/utils";

export const CountryList = ({ data }: { data: CountryType[] }) => {
  const [originalData, setOriginalData] = useState<CountryType[]>(data);
  const [filteredData, setFilteredData] = useState<CountryType[]>(data);
  const [selectedCol, setSelectedCol] = useState<keyof CountryType>(Columns[0]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(Regions);
  const [unMember, setUnMember] = useState(false);
  const [independent, setIndependent] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
      const searchMatch = [
        country.name.common,
        country.region,
        country.subregion,
      ].some((field) =>
        field?.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      return regionMatch && independentMatch && unMemberMatch && searchMatch;
    });

    updatedData = [...updatedData].sort((a, b) => {
      const aValue = selectedCol === "name" ? a.name.common : a[selectedCol];
      const bValue = selectedCol === "name" ? b.name.common : b[selectedCol];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return bValue - aValue;
      }

      return String(aValue ?? "").localeCompare(String(bValue ?? ""));
    });

    setFilteredData(updatedData);
  }, [
    selectedRegions,
    selectedCol,
    independent,
    unMember,
    searchQuery,
    originalData,
    data,
  ]);

  return (
    <>
      <div className="flex flex-col text-gray-300 gap-4 md:gap-0 md:flex-row md:items-center justify-between mb-6">
        <h1 className="font-bold">Found {filteredData.length} countries</h1>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="flex flex-col gap-2 text-gray-300 md:flex-row md:gap-8">
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
            maxHeight: "630px",
            scrollbarWidth: "none",
            backgroundColor: "#1b1d1f",
          }}
        >
          <Table
            sx={{
              minWidth: 650,
              "& th, & td": {
                color: "#D1D5DB",
                borderBottom: "none",
                px: 0,
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <StyledTableRow>
                <TableCell
                  sx={{
                    width: "100px",
                  }}
                >
                  Flag
                </TableCell>
                <TableCell
                  sx={{
                    width: { xs: "140px", md: "180px" },
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    width: { xs: "150px", md: "180px" },
                  }}
                >
                  Population
                </TableCell>
                <TableCell>
                  Area (km<sup>2</sup>)
                </TableCell>
                <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                  Region
                </TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((country: CountryType) => (
                <TableRow
                  key={country.name.common}
                  sx={{
                    backgroundColor: "#1b1d1f",
                    "& td, & th": {
                      fontSize: "16px",
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={country.flags.svg}
                      alt="flag"
                      className="w-[50px] h-[35px] rounded-sm"
                    />
                  </TableCell>
                  <TableCell>{country.name.common}</TableCell>
                  <TableCell>{formatNumber(country.population)}</TableCell>
                  <TableCell>{formatNumber(country.area)}</TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    {country.region}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
