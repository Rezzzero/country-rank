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
import { Columns } from "../../constants";

export const CountryList = ({
  data,
  setData,
}: {
  data: CountryType[];
  setData: React.Dispatch<React.SetStateAction<CountryType[]>>;
}) => {
  const [selectedCol, setSelectedCol] = useState<keyof CountryType>(Columns[0]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCol(event.target.value as keyof CountryType);
  };

  useEffect(() => {
    setData((prevData) =>
      [...prevData].sort((a, b) => (b[selectedCol] > a[selectedCol] ? 1 : -1))
    );
  }, [selectedCol, setData]);

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
        />
        <TableContainer
          component={Paper}
          sx={{ overflow: "auto", height: "300px" }}
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
              {data.map((country: CountryType) => (
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
