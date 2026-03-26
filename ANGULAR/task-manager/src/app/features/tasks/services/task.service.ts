import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  private httpClient = inject(HttpClient);
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  getTaskFromApi(): Observable<Task[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      delay(1500),
      map((data) =>
        data.slice(0, 11).map((item) => ({
          id: item.id,
          title: item.title,
          status: item.completed ? 'done' : 'pending',
          assignedTo: 'API User',
          description: 'From API',
          priority: 'medium',
        })),
      ),
    );
  }

  loadTask() {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    this.getTaskFromApi().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.tasksSubject.next(this.tasks);
        this.loadingSubject.next(false);
      },
      error: () => {
        this.errorSubject.next('Failed to load tasks');
        this.loadingSubject.next(false);
      },
    });
  }

  // getTasks() {
  //   return this.tasks;
  // }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }
}
