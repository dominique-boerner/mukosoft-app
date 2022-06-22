import { Button, Typography } from "@mui/material";
import { RecipeList } from "@module/cookbook/components/recipeList/RecipeList";
import { recipeMock } from "@module/cookbook/mocks/recipe-mock";
import React from "react";

export default function Recipes() {
  return (
    <>
      <Typography variant="h2" color="secondary.main">
        Rezepte
      </Typography>
      <RecipeList recipes={recipeMock} />
      <Button variant="contained" className="w-full" color="secondary">
        Alle Rezepte
      </Button>
    </>
  );
}
