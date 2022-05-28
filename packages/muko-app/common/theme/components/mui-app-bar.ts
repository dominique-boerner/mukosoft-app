import { Components, Theme } from "@mui/material";

export const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  styleOverrides: {
    colorInherit: {
      backgroundColor: "white",
      color: "teal",
    },
  },
  defaultProps: {
    color: "inherit",
  },
};
