import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ShoppingEdit } from './shopping-edit/shopping-edit';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingServices } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingEdit, ButtonModule],
  templateUrl: './shopping-list.html',
  styleUrls: ['./shopping-list.css'],
})
export class ShoppingList {
  ingredients: Ingredients[] = [];

  constructor(private shoppingservice: ShoppingServices) {}

  ngOnInit() {
    this.ingredients = this.shoppingservice.getIngredients();

    this.shoppingservice.ingredientsChanged.subscribe((ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    });
  }

  onEdit(index: number) {
    this.shoppingservice.startedEditing.next(index);
  }

  onDelete(index: number) {
    this.shoppingservice.deleteIngredient(index);
    this.ingredients = this.shoppingservice.getIngredients();
  }
}
