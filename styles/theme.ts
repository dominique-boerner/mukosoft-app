import {createTheme} from "@mui/material";
import {ThemeOptions} from "@mui/material";

const borderRadius = "10px";

const primary = {
  main: "#E6DCF4",
  light: "#ffffff",
  dark: "#b4aac1",
};

const secondary = {
  main: "#00152b",
  light: "#2a3b54",
  dark: "#000000",
  contrastText: "#fff",
};

const tertiary = {
  main: "#20cfa2",
  light: "#69ffd3",
  dark: "#009d73",
  contrastText: "#fff",
};

// #20cfa2
// #ffebdc

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary,
    secondary,
    tertiary,
    background: {
      default: "#F6F7FB",
    },
    warning: {
      main: "#e2035a",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          background: "#eaf4dc",
        },
        root: {
          textTransform: "none",
          padding: ".8rem",
          borderRadius,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06);",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          lineHeight: "1.3",
        },
        h2: {
          lineHeight: "1.3",
        },
        h3: {
          lineHeight: "1.4",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: "white",
          color: "teal",
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "1.953rem",
    },
    h2: {
      fontSize: "1.563rem",
    },
    h3: {
      fontSize: "1.25rem",
    },
    h4: {
      fontSize: "1.1rem",
    },
  },
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
