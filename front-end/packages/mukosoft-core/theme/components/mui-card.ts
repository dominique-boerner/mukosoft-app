import { Components, Theme } from "@mui/material";

export const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: {
      boxShadow: "0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06);",
    },
  },
};
