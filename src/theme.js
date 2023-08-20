import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },

    secondary: {
      main: "#e1f5fe",
    },

    thirdColor: {
      main: "#ffab40",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
