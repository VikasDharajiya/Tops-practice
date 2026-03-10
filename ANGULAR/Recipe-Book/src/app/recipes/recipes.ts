import { Component, OnInit } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { CardModule } from 'primeng/card';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeList, RecipeDetail, CardModule],
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css'],
})
export class Recipes {
  selectedRecipe?: Recipe;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  onDelete(index: number) {
    const deletedRecipe = this.recipeService.getRecipes()[index];

    this.recipeService.deleteRecipe(index);

    if (this.selectedRecipe === deletedRecipe) {
      this.selectedRecipe = undefined;
    }
  }
}
