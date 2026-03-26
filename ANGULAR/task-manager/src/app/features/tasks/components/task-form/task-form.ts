import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() closeForm = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<Omit<Task, 'id'>>();

  task: Omit<Task, 'id'> = {
    title: '',
    description: '',
    status: 'pending',
    assignedTo: '',
    priority: 'medium',
  };

  onSubmit() {
    this.addTask.emit(this.task);
    console.log(this.task);
  }

  close() {
    this.closeForm.emit();
  }
}
