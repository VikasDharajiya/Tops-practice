import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ChartModule,
    ScrollTopModule,
    ToastModule,
    RouterOutlet,
    CommonModule,
    ConfirmDialogModule,
    OverlayBadgeModule,
    RouterModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './admin.html',
})
export class Admin {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  isProfileOpen = false;

  toggleProfileMenu() {
    this.isProfileOpen = !this.isProfileOpen;
  }
  logout() {
    this.confirmationService.confirm({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      icon: 'pi pi-exclamation-triangle !text-red-500',
      acceptLabel: 'Yes, Logout',
      rejectLabel: 'Cancel',
      acceptButtonStyleClass:
        '!bg-purple-600 hover:!bg-purple-700 !border-none !text-white !rounded-lg px-5 py-2 transition shadow-lg shadow-purple-600/20',

      rejectButtonStyleClass:
        '!bg-transparent !border !border-neutral-700 !text-neutral-300 hover:!bg-neutral-800 !rounded-lg px-5 py-2 transition',

      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Logged out',
          detail: 'See you soon!',
        });

        setTimeout(() => this.router.navigate(['/']), 1000);
      },
    });
  }

  // logout() {
  //   console.log('Logging out...');
  //   // clear token
  //   // redirect to login
  // }
}
