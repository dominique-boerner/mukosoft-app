import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { Recipe } from "@models/recipe";
import { Box } from "@mui/system";

interface RecipeListProps {
  recipes?: Recipe[];
}

export default function RecipeList({ recipes = [] }: RecipeListProps) {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={20}>
        {recipes.map((recipe) => (
          <ImageListItem
            key={recipe.title}
            className="shadow-md rounded-md overflow-hidden"
          >
            <img
              src={`${recipe.image}?fit=crop&auto=format`}
              srcSet={`${recipe.image}?auto=format&dpr=2 2x`}
              alt={recipe.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
