import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingServices } from '../shopping.service';
import { ButtonModule } from 'primeng/button';
import { Ingredients } from '../../shared/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule, ButtonModule],
  templateUrl: './shopping-edit.html',
})
export class ShoppingEdit implements OnInit, OnDestroy {
  private subscription!: Subscription;

  editIndex: number = -1;
  name: string = '';
  amount: number | null = null;

  constructor(private shoppingService: ShoppingServices) {}

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe((index: number) => {
      const ingredient = this.shoppingService.getIngredients()[index];

      this.editIndex = index;
      this.name = ingredient.name;
      this.amount = ingredient.amount;
    });
  }

  onAddOrUpdate() {
    if (!this.name.trim() || !this.amount) return;

    if (this.editIndex >= 0) {
      this.shoppingService.updateIngredient(
        this.editIndex,
        new Ingredients(this.name, this.amount),
      );
    } else {
      this.shoppingService.addIngredient(new Ingredients(this.name, this.amount));
    }

    this.onClear();
  }

  onClear() {
    this.name = '';
    this.amount = null;
    this.editIndex = -1;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
