import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
// import { signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingServices {
  private ingredients: Ingredients[] = [
    new Ingredients('Pasta', 200),
    new Ingredients('Tomatoes', 3),
    new Ingredients('Capsicum', 4),
  ];

  startedEditing = new Subject<number>();
  // ingredientsChanged: any;
  ingredientsChanged = new Subject<Ingredients[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  startEdit(index: number) {
    this.startedEditing.next(index);
  }
}
