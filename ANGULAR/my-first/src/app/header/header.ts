import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // constructor() {
  //   console.log('constructer called!!');
  // }
  title = 'Angular Learning App';
  // ngOnInit() {
  //   console.log('ngOnInit called');
  // }
}
