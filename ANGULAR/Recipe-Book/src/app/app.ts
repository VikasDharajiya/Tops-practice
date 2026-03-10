import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './navbar/navbar';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
// import { RecipeList } from './recipes/recipe-list/recipe-list';
// import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ButtonModule, Recipes, ShoppingList],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // protected readonly title = signal('Recipe-Book');
}
