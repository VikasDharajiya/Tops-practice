import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-one',
  imports: [CommonModule, ButtonModule, PasswordModule, InputTextModule],
  templateUrl: './one.html',
  styleUrl: './one.css',
})
export class One {
  isDarkMode = false;
  // isLogin = true;

  // toggleAuth() {
  //   this.isLogin = !this.isLogin;
  // }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
