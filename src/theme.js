import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let themes = createTheme({
  palette: {
    action: {
      disabled: "#A0A0A0",
      disabledbackgroundColor: "#737373",
    },
    primary: {
      main: "#D1FF1A",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    background: {
      default: "#F4F4F4",
      footerGrey: "#D7D7D7",
    },
    pink: {
      main: "#FF43CA",
      light: "#FFEAF9",
    },
    lightGreen: {
      main: "#E7FFDC",
    },
    columbiaBlue: {
      main: "#B0FFFA",
    },
    cyan: {
      main: "#2BFFF2",
    },
    onahauBlue: {
      main: "#C3FFFB",
    },
  },
  typography: {
    fontFamily: "Karla, Roboto, sans-serif",
    h1: {
      fontFamily: "Rubik",
      fontSize: "2.813rem",
    },
    h2: {
      fontFamily: "Rubik",
      fontSize: "2.1875rem",
    },
    h3: {
      fontFamily: "Rubik",
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: "Karla",
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h5: {
      fontFamily: "Karla",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h6: {
      fontFamily: "Karla",
      fontSize: "1.375rem",
      fontWeight: "normal",
    },
    subtitle1: {
      fontFamily: "Karla",
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    body1: {
      fontFamily: "Karla",
      fontSize: "1.125rem",
    },
    body2: {
      fontFamily: "Karla",
      fontSize: "1rem",
    },
    body3: {
      fontFamily: "Karla",
      fontSize: "1rem",
      wordBreak: "break-word",
    },
  },
});

let theme = responsiveFontSizes(themes);
export default theme;
