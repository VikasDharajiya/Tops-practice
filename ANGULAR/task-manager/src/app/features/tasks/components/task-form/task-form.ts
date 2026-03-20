import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() closeForm = new EventEmitter<void>();

  task = {
    title: '',
    description: '',
    status: 'pending',
    assignedTo: '',
    priority: 'medium',
  };

  onSubmit() {
    console.log(this.task);
  }

  close() {
    this.closeForm.emit();
  }
}
