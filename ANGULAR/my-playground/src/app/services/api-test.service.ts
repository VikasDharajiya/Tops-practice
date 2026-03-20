import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post, User } from '../models/api-test.model';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {
  private api = 'https://jsonplaceholder.typicode.com';
  private http = inject(HttpClient);

  // getUsers() {
  //   return this.http.get<User[]>(this.api);
  // }

  getUsers() {
    return this.http.get<User[]>(`${this.api}/users`);
  }

  getPosts(limit: number) {
    return this.http.get<Post[]>(` https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  }
}
