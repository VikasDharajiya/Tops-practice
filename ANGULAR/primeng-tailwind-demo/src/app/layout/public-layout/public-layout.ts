import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [Header, Footer, RouterOutlet],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <!-- public page content goes here -->
    <app-footer></app-footer>
  `,
})
export class PublicLayout {}
