import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  roles = [
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'User', value: 'user' },
  ];

  settings = {
    emailNotifications: true,
    smsAlerts: false,
    darkMode: true,
  };
}
