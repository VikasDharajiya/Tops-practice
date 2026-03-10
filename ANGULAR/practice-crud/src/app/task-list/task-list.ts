import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  tasks: Task[] = [];
  newTaskName: string = '';
  editingId: number | null = null;
  editingName: string = '';

  constructor(private taskservice: TaskService) {
    this.tasks = this.taskservice.getTasks();
  }

  addTask() {
    if (!this.newTaskName) return;
    this.taskservice.addTask(this.newTaskName);
    this.tasks = this.taskservice.getTasks();

    this.newTaskName = '';
  }

  deleteTask(id: number) {
    this.taskservice.deleteTask(id);
    this.tasks = this.taskservice.getTasks();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
    this.taskservice.updateTask(task);
    this.tasks = this.taskservice.getTasks();
  }

  startEdit(task: Task) {
    this.editingId = task.id;
    this.editingName = task.name;
  }

  saveEdit(task: Task) {
    task.name = this.editingName;
    this.taskservice.updateTask(task);
    this.taskservice.getTasks();
    this.editingId = null;
  }
  cancleEdit() {
    this.editingId = null;
    this.editingName = '';
  }
}
