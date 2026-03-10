import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { TaskList } from './task-list/task-list';
@Component({
  selector: 'app-root',
  imports: [Header, Footer, TaskList],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
