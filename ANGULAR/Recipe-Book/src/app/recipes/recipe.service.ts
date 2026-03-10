import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pasta',
      'Italian style pasta',
      'https://plus.unsplash.com/premium_photo-1664478288635-b9703a502393?q=80&w=880&auto=format&fit=crop',
    ),
    new Recipe(
      'Burger',
      'Cheese loaded burger',
      'https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?q=80&w=687&auto=format&fit=crop',
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
