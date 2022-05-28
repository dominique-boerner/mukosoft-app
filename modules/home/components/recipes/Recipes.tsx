import { Box, Button, Typography } from "@mui/material";
import RecipeList from "@common/components/recipeList/RecipeList";
import { recipeMock } from "../../../../mocks/recipe-mock";
import React from "react";

export default function Recipes() {
  return (
    <Box px="1rem" pt="2rem" pb="8rem">
      <Typography variant="h2" color="secondary.main">
        Rezepte
      </Typography>
      <RecipeList recipes={recipeMock} />
      <Button variant="contained" className="w-full" color="secondary">
        Alle Rezepte
      </Button>
    </Box>
  );
}
