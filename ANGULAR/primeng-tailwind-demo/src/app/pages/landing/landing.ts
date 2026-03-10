import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogService } from '../../dialog.service';
// import { Header } from '../../layout/header/header';
// import { OnInit, OnDestroy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Subscription } from 'rxjs';
// import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-landing',
  imports: [
    ButtonModule,
    DialogModule,
    FormsModule,
    CommonModule,
    CardModule,
    // AnimateOnScrollModule,
    ScrollTopModule,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  visible: boolean = false;
  isLoginMode: boolean = false;

  passwordVisible: boolean = false;

  email: string = '';
  password: string = '';
  name: string = '';
  confirmPassword: string = '';

  private subscription!: Subscription;

  constructor(
    private router: Router,
    private dialogservice: DialogService,
  ) {}

  ngOnInit() {
    this.subscription = this.dialogservice.dialogTrigger$.subscribe(() => {
      this.visible = true;
      this.isLoginMode = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog() {
    this.visible = true;
    this.isLoginMode = false;
  }

  closeDialog() {
    this.visible = false;
    // this.isLoginMode = false;
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  get isFormInvalid(): boolean {
    if (!this.email || !this.password) return true;

    if (!this.isLoginMode) {
      return !this.name || !this.confirmPassword || this.password !== this.confirmPassword;
    }

    return false;
  }

  submit() {
    if (!this.isFormInvalid) {
      this.visible = false;
      // this.router.navigate(['/admin/dashboard']);
    }
  }
}
