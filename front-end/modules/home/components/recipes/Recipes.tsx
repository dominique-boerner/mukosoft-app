import { Button, Typography } from "@mui/material";
import { RecipeList } from "@mukosoft/cookbook";
import { recipeMock } from "@mukosoft/cookbook/mocks/recipe-mock";
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
