import { Component, Input } from '@angular/core';
// import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css'],
})
export class RecipeDetail {
  // selectedRecipeName: string = '';
  // selectedRecipeDescription: string = '';
  // selectedRecipeImage: string = '';
  // selectedRecipe: boolean = false;

  // constructor(private recipeservice: RecipeService) {
  //   //inject service
  // }
  @Input() selectedRecipe?: Recipe;
}
