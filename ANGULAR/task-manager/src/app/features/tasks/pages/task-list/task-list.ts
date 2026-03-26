import { Component, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TaskTable } from '../../components/task-table/task-table';
import { TaskForm } from '../../components/task-form/task-form';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskTable, TaskForm, AsyncPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private taskservice = inject(TaskService);

  tasks$ = this.taskservice.tasks$;
  loading$ = this.taskservice.loading$;
  error$ = this.taskservice.error$;

  tasks: Task[] = [];

  ngOnInit() {
    // this.tasks = this.taskservice.getTasks();
    this.taskservice.loadTask();
  }

  isFormOpen = false;

  handleAddTask(newTask: Omit<Task, 'id'>) {
    const task: Task = {
      id: this.tasks.length + 1,
      ...newTask,
    };

    this.taskservice.addTask(task);

    // this.tasks = this.taskservice.getTasks();
    this.isFormOpen = false;
  }

  reloadTasks() {
    this.taskservice.loadTask();
  }
}
