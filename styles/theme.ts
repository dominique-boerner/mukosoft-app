import { createTheme, ThemeOptions } from "@mui/material";
import { orange, teal } from "@mui/material/colors";

const themeOptions: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: orange,
    background: {
      default: "#F6F7FB",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          lineHeight: "1.2",
        },
        h2: {
          lineHeight: "1.2",
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
