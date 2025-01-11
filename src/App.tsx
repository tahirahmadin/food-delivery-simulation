import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";
import { DemoSimulation } from "./components/mainComponent/DemoSimulation";
import NewHomePage from "./components/homepageComponents/NewHomePage.jsx";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewHomePage />
    </ThemeProvider>
  );
};
