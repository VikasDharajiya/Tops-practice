import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  imports: [TableModule, InputTextModule, ButtonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {}
