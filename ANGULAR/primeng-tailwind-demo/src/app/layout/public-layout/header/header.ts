import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { DialogModule } from 'primeng/dialog';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
import { DialogService } from '../../../dialog.service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Emit an event when user clicks Sign In
  // @Output() openDialog = new EventEmitter<void>();
  constructor(private dialogservice: DialogService) {}
  openDialog() {
    this.dialogservice.openDialog();
  }
}
