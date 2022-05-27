import {createTheme, ThemeOptions} from "@mui/material";

const borderRadius = "10px";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#E6DCF4",
      light: "#ffffff",
      dark: "#b4aac1"
    },
    secondary: {
      main: "#00152b",
      light: "#2a3b54",
      dark: "#000000"
    },
    background: {
      default: "#F6F7FB",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: ".8rem",
          borderRadius,
          boxShadow: "none"
        }
      }
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

export const theme = createTheme(themeOptions);
