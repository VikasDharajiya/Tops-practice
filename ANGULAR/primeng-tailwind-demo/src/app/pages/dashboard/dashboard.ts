import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, ChartModule, SkeletonModule, TableModule, CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  // users: any[] = [];
  users$!: Observable<any[]>;
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  // Using promis .topromise()
  // fetchUsers() {
  //   this.loading = true;

  //   this.http
  //     .get<any[]>('https://jsonplaceholder.typicode.com/users')
  //     .toPromise()
  //     .then((data: any[] | undefined) => {
  //       // Ensure data is defined
  //       if (!data) {
  //         console.error('No data received');
  //         return;
  //       }

  //       this.users = data.map((u) => ({
  //         name: u.name,
  //         email: u.email,
  //         status: Math.random() > 0.5 ? 'Active' : 'Inactive',
  //       }));
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching users:', err);
  //     })
  //     .finally(() => {
  //       this.loading = false;
  //     });
  // }

  // using subcribe (observable)
  // fetchUsers() {
  //   this.loading = true;

  //   this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
  //     next: (data) => {
  //       // Wrap in setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
  //       setTimeout(() => {
  //         this.users = data.map((u) => ({
  //           name: u.name,
  //           email: u.email,
  //           status: Math.random() > 0.5 ? 'Active' : 'Inactive',
  //         }));
  //         this.loading = false;
  //       });
  //     },
  //     error: (err) => {
  //       console.error('Error fetching users:', err);
  //       this.loading = false;
  //     },
  //   });
  // }

  //  firstvaluefrom with async-await

  // async fetchUsers() {
  //   this.loading = true;
  //   try {
  //     const data = await firstValueFrom(
  //       this.http.get<any[]>('https://jsonplaceholder.typicode.com/users'),
  //     );
  //     this.users = data.map((u) => ({
  //       name: u.name,
  //       email: u.email,
  //       status: Math.random() > 0.5 ? 'Active' : 'Inactive',
  //     }));
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  // modern way
  fetchUsers() {
    this.loading = true;
    this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((users) =>
        users.map((u) => ({
          name: u.name,
          email: u.email,
          status: Math.random() > 0.5 ? 'Active' : 'Inactive',
        })),
      ),
    );
  }

  // users = [
  //   { name: 'John Doe', email: 'john@mail.com' },
  //   { name: 'Jane Smith', email: 'jane@mail.com' },
  //   { name: 'Michael Brown', email: 'michael@mail.com' },
  // ];
  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 6000, 8000, 7000, 12000, 1430, 12178],
        borderColor: '#7c3aed',
        tension: 0.3,
        // fill: true,
        // backgroundColor: 'rgba(124, 58, 237, 0.2)',
        pointBackgroundColor: '#7c3aed',
        pointBorderColor: '#fff',
        // pointRadius: 4,
        // interaction: {
        //   mode: 'index',
        //   intersect: false,
        // },
        animation: {
          duration: 800,
          easing: 'easeInOutQuart',
        },
      },
    ],
  };

  barChartData = {
    labels: ['Direct', 'Social', 'Email', 'Ads'],
    datasets: [
      {
        label: 'Visitors',
        // backgroundColor: '#6366f1',
        data: [540, 325, 702, 620],

        backgroundColor: [
          'rgba(249, 115, 22, 0.2)',
          'rgba(6, 182, 212, 0.2)',
          'rgb(107, 114, 128, 0.2)',
          'rgba(139, 92, 246, 0.2)',
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(6, 182, 212)',
          'rgb(107, 114, 128)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 2,
      },
    ],
  };

  chartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.9,

    plugins: {
      legend: {
        labels: { color: '#cbd5e1' },
      },
    },

    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: '#1e293b' },
      },
      y: {
        beginAtZero: true,

        ticks: { color: '#94a3b8' },
        grid: { color: '#1e293b' },
      },
    },
  };
}
