import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  items: MenuItem[] = [
    { label: 'Recipes', icon: 'pi pi-book', routerLink: '/recipes' },
    { label: 'Shopping List', icon: 'pi pi-cart-plus', routerLink: '/shopping-list' },
  ];
}
