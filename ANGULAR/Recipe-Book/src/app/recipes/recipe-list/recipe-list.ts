import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RecipeService } from '../recipe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItem, CommonModule, ButtonModule, FormsModule, CommonModule],
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.css'],
})
export class RecipeList {
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() recipeDeleted = new EventEmitter<number>();

  newRecipeName: string = '';
  newRecipeDiscription: string = '';
  newRecipeImage: string = '';
  addRecipeBtn: boolean = false;

  constructor(private recipeservice: RecipeService) {
    this.recipes = this.recipeservice.getRecipes(); //inject service
  }

  addRecipe() {
    if (
      !this.newRecipeName.trim() ||
      !this.newRecipeDiscription.trim() ||
      !this.newRecipeImage.trim()
    )
      return;
    const recipe = new Recipe(this.newRecipeName, this.newRecipeDiscription, this.newRecipeImage);
    this.recipeservice.addRecipes(recipe);

    this.recipes = this.recipeservice.getRecipes();
    this.newRecipeName = '';
    this.newRecipeDiscription = '';
    this.newRecipeImage = '';
    this.addRecipeBtn = false;
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
  onRecipeDeleted(index: number) {
    this.recipeDeleted.emit(index);
    // console.log('List received delete');
  }

  // onDelete() {
  //   this.recipeDeleted.emit(this.index); // emit instead of deleting
  // }
}
