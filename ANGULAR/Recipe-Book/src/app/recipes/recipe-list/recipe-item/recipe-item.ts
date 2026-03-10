import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';
import { ButtonModule } from 'primeng/button';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './recipe-item.html',
  styleUrls: ['./recipe-item.css'],
})
export class RecipeItem {
  @Input() recipe!: Recipe;
  @Input() index!: number;

  @Output() recipeDeleted = new EventEmitter<number>();
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // constructor(private recipeservice: RecipeService) {} // inject service

  onDelete() {
    this.recipeDeleted.emit(this.index); // emit instead of deleting
    // console.log('Item delete emitted');
  }

  onSelect() {
    // console.log('Item clicked');
    this.recipeSelected.emit(this.recipe);
  }
}
