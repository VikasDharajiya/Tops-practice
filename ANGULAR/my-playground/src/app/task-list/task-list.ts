import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: Task[] = [];

  newTaskTitle: string = '';
  editTaskId: number | null = null;
  editedTaskTitle: string = '';

  constructor(private taskservice: TaskService) {
    this.tasks = this.taskservice.getTasks();
  }

  addTask() {
    if (!this.newTaskTitle) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle,
    };
    this.taskservice.addTask(newTask);
    this.tasks = this.taskservice.getTasks();
    this.newTaskTitle = '';
  }

  deleteTask(id: number) {
    this.taskservice.deleteTask(id);
    this.tasks = this.taskservice.getTasks();
  }
  startEdit(task: Task) {
    this.editTaskId = task.id;
    this.editedTaskTitle = task.title;
  }

  saveEdit() {
    if (!this.editedTaskTitle.trim()) return;

    const task = this.tasks.find((t) => t.id === this.editTaskId);

    if (task) {
      task.title = this.editedTaskTitle;
    }

    this.editTaskId = null;
    this.editedTaskTitle = '';
  }

  cancelEdit() {
    this.editTaskId = null;
    this.editedTaskTitle = '';
  }
}
