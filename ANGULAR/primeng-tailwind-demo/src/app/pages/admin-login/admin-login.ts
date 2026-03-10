import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
// import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    // RippleModule,
  ],
  templateUrl: './admin-login.html',
  providers: [MessageService],
})
export class AdminLogin {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
  ) {}
  // showError = false;
  login() {
    if (this.username === '123' && this.password === '123') {
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Login Successfull',
      //   detail: 'logging wait',
      //   life: 2000,
      // });
      this.router.navigate(['/admin']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Login Failed',
        detail: 'Invalid username or password!',
        life: 3000, // shows for 3 seconds
      });
    }
  }
}
