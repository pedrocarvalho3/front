import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 520,
      md: 720, // Novo breakpoint
      lg: 1140,
      xl: 1536,
    },
  },
});
export default theme;
