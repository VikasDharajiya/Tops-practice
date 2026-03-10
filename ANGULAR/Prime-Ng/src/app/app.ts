import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormGroup,
  Validator,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    SelectModule,
    InputText,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('Prime-Ng');
  // roles: any;
  // onSubmit(form: any) {
  //   console.log(form.value);
  // }
  // registerForm = new FormGroup({
  //   username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  // });
  // get f() {
  //   return this.registerForm.controls;
  // }
  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     console.log(this.registerForm.value);
  //   }
  // }
}
