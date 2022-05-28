import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material";
import {
  primary,
  secondary,
  tertiary,
  background,
  warning,
} from "./theme.palette";
import { MuiButton, MuiCard, MuiTypography, MuiAppBar } from "./components";
import { typography } from "./theme.typography";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary,
    secondary,
    tertiary,
    background,
    warning,
  },
  components: {
    MuiButton,
    MuiCard,
    MuiTypography,
    MuiAppBar,
  },
  typography,
};

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export const theme = createTheme(themeOptions);
