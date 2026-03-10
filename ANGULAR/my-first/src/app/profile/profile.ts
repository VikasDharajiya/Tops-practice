import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { profileService } from '../services/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  editedName = '';
  editedRole = '';

  constructor(public profileService: profileService) {}

  ngOnInit(): void {
    console.log('profile loaded! succssesfully');
  }

  startEdit() {
    this.editedName = this.profileService.name;
    this.editedRole = this.profileService.role;
    this.profileService.startEdit();
  }
  saveProfile() {
    this.profileService.saveProfile(this.editedName, this.editedRole);
  }

  cancelEdit() {
    this.profileService.cancelEdit();
  }

  // changeRole() {
  //   this.role = 'Software Developer';
  // }
  // addHobbies() {
  //   this.hobbies = 'Playing Games';
  // }

  // removeSkill(skill: string) {
  //   this.skills = this.skills.filter((s) => s !== skill);
  // }
}
