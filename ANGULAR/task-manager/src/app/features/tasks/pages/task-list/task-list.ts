import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskTable } from '../../components/task-table/task-table';
import { TaskForm } from '../../components/task-form/task-form';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskTable, TaskForm],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'Understand basics',
      status: 'pending',
      assignedTo: 'Vikas',
      priority: 'low',
    },
    {
      id: 2,
      title: 'Build Project',
      description: 'Task manager app',
      status: 'in-progress',
      assignedTo: 'John',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'diployed Project',
      description: 'Task manager app',
      status: 'done',
      assignedTo: 'John',
      priority: 'high',
    },
  ];

  isFormOpen = false;
}
