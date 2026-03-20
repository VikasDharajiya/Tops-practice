import { Component, inject, OnInit } from '@angular/core';
import { ApiTestService } from '../services/api-test.service';
import { map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Post, User } from '../models/api-test.model';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  private apitestservice = inject(ApiTestService);

  users$: Observable<User[]> = this.apitestservice.getUsers().pipe(
    map((users) =>
      users.map((user) => ({
        ...user,
        displayName: user.name + ' (' + user.email + ')',
      })),
    ),
    //  map(users => users.filter(u => u.address.city === 'Gwenborough')),
    tap((users) => console.log('Fetched users', users)),
  );

  // loading: boolean = true;
  // error = true;

  posts$: Observable<Post[]> = this.apitestservice
    .getPosts(10)
    .pipe(tap((posts) => console.log('Fetched users', posts)));
}
