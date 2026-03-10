import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [TaskList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  users$!: Observable<any[]>;
  // constructor(private http: HttpClient) {
  //   const data = this.http
  //     .get<any[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((users) => {
  //       // console.log(users);
  //       this.users = users;
  //     });
  //   // console.log(data);
  // }
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      tap((users) => {
        console.log('user names:');
        users.forEach((user) => console.log(user.name));
      }),
    );
  }
}
