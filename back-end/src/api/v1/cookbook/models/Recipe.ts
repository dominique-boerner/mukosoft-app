export interface Recipe {
  metadata: {
    tags: string[]
  };

  fields: {
    title: string;
    amount: string;
    ingredients: string[];
    instructions: string[];
    kcal: number;
    protein: number;
    fat: number;
    carbohydrates: number;
  }
}