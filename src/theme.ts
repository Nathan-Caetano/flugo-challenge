import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#22C55E",
    },
    secondary: {
      main: "#FF66CC"
    },
    text: {
      primary: "#212B36",
      secondary: "#637381",
    },
    background: {
      paper: "#F4F6F8",
    }
  },
});

export default theme;
