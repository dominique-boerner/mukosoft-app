import { Components, Theme } from "@mui/material";
import { themeGlobals } from "../theme.globals";

export const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    outlined: {
      background: "#eaf4dc",
    },
    root: {
      textTransform: "none",
      padding: ".8rem",
      borderRadius: themeGlobals.borderRadius,
      boxShadow: "none",
    },
  },
};
