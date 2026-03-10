import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
// import { DialogModule } from 'primeng/dialog';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Header } from './layout//public-layout/header/header';
// import { Footer } from './layout/public-layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
