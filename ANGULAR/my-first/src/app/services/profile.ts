import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class profileService {
  name = 'Vikas';
  age = 22;
  role = 'Frontend Developer';

  hobbies = ['Cricket', 'Games', 'Chess'];
  skills = ['Angular', 'TypeScript', 'Tailwind', 'Git'];

  showHobbies = false;
  isEditing = false;
  isActive = false;

  startEdit() {
    this.isEditing = true;
  }

  saveProfile(name: string, role: string) {
    this.name = name;
    this.role = role;
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}
