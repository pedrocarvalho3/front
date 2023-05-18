import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import theme from "./theme";
import { ThemeProvider } from "@mui/material";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
