import { Injectable } from '@nestjs/common';
import { contentfulLicense } from '../../../../config/contentful';
import { Recipe } from '../models/Recipe';

const contentful = require("contentful");

@Injectable()
export class CookbookService {

  async getAllRecipes() {
    const client = contentful.createClient(contentfulLicense);
    return await client.getEntries("recipe").then(entry => entry.items).then((recipes: Recipe[]) => {
      return recipes.map((recipe: Recipe) => {
        return {
          title: recipe.fields.title,
          amount: recipe.fields.amount,
          ingredients: recipe.fields.ingredients,
          instructions: recipe.fields.instructions,
          kcal: recipe.fields.kcal,
          protein: recipe.fields.protein,
          fat: recipe.fields.fat,
          carbohydrates: recipe.fields.carbohydrates
        };
      })
    });
  }
}
