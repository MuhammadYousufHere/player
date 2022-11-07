import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import makeTheme from "./makeTheme";
import "./App.scss";

import Player from "./pages/Player";
function App() {
  const [mode] = React.useState("system");
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = makeTheme(
    mode === "system" ? (isDark ? "dark" : "light") : mode
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Player />
    </ThemeProvider>
  );
}

export default App;

