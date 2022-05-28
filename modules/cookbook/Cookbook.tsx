import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/system";
import { recipeMockLarge } from "../../mocks/recipe-mock";
import RecipeList from "@common/components/recipeList/RecipeList";

const Cookbook = () => {
  const palette = useTheme().palette;

  return (
    <Box
      px="1rem"
      pt="2rem"
      pb="8rem"
      className="min-h-screen "
      style={{ background: palette.background.default }}
    >
      <Typography variant="h1">Kochbuch</Typography>
      <Box
        className={`flex flex-row justify-between py-3 sticky top-0 z-50`}
        style={{ background: palette.background.default }}
      >
        <Button color="secondary" variant="contained">
          Frühstück
        </Button>
        <Button color="primary" variant="contained">
          Mittag
        </Button>
        <Button color="primary" variant="contained">
          Abend
        </Button>
        <Button color="primary" variant="contained">
          Snack
        </Button>
      </Box>
      <RecipeList cols={2} recipes={recipeMockLarge}></RecipeList>
    </Box>
  );
};

export default Cookbook;
