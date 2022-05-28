import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";

export default function Header() {
  const palette = useTheme().palette;

  return (
    <Box
      px="1rem"
      py="2rem"
      width="100vw"
      style={{ background: palette.primary.main }}
    >
      <Typography variant="h1" color="secondary.main" fontWeight="bold">
        Hallo, Dominique!
      </Typography>
      <Typography variant="subtitle1" color="secondary.main">
        Wie geht es dir heute?
      </Typography>
    </Box>
  );
}
