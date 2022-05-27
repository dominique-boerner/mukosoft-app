import { Components, Theme } from "@mui/material";

export const MuiTypography: Components<Theme>["MuiTypography"] = {
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
};
