import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CountryType } from "../../types/types";
import Paper from "@mui/material/Paper";

export const CountryList = ({ data }: { data: CountryType[] }) => {
  return (
    <TableContainer component={Paper}>
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
            <TableCell align="left">Area</TableCell>
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
  );
};
