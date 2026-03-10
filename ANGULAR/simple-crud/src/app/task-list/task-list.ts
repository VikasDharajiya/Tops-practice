import { Component, OnInit } from '@angular/core';
import { Task } from './task-list.model';
import { TaskService } from '../tsak.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = ''; // for the input field
  editedTaskId: number | null = null;
  editedTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTask();
  }

  addTask() {
    if (!this.newTaskTitle) return;

    const newTask: Task = {
      id: Date.now(), // auto-generate ID
      title: this.newTaskTitle,
      completed: false,
    };

    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTask(); // refresh local list
    this.newTaskTitle = ''; // reset input
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTask(); // refresh
  }

  toggleTask(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.taskService.updateTask(task);
      this.tasks = this.taskService.getTask(); // refresh
    }
  }

  startEdit(task: Task) {
    this.editedTaskId = task.id;
    this.editedTaskTitle = task.title;
  }

  saveEdit() {
    if (this.editedTaskId !== null && this.editedTaskTitle.trim() !== '') {
      const task = this.tasks.find((t) => t.id === this.editedTaskId);
      if (task) {
        task.title = this.editedTaskTitle.trim();
        this.taskService.updateTask(task);
      }
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editedTaskId = null;
    this.editedTaskTitle = '';
  }

  // editTask(task: Task) {
  //   const newTitle = prompt('Edit Task', task.title);

  //   if (newTitle !== null && newTitle.trim() !== '') {
  //     task.title = newTitle.trim();
  //     this.taskService.updateTask(task);
  //     this.tasks = this.taskService.getTask(); // refresh
  //   }
  // }
}
