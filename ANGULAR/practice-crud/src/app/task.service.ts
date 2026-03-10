import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      name: name,
      completed: false,
    };
    this.tasks.push(newTask);
  }
  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
