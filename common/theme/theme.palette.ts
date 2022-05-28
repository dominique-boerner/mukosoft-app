import { PaletteColorOptions, TypeBackground } from "@mui/material";

export const primary: PaletteColorOptions = {
  main: "#E6DCF4",
  light: "#ffffff",
  dark: "#b4aac1",
};

export const secondary: PaletteColorOptions = {
  main: "#00152b",
  light: "#2a3b54",
  dark: "#000000",
  contrastText: "#fff",
};

export const tertiary: PaletteColorOptions = {
  main: "#20cfa2",
  light: "#69ffd3",
  dark: "#009d73",
  contrastText: "#fff",
};

export const background: Partial<TypeBackground> = {
  default: "#F5F6F8",
};

export const warning: PaletteColorOptions = {
  main: "#e2035a",
};
