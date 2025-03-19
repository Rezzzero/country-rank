import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#1b1d1f",
  borderBottom: "3px solid #282B30",
  "& td, & th": {
    fontSize: "12px",
    padding: "14px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px",
    },
  },
}));
