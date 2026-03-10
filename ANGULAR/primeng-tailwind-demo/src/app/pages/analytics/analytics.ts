import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [ChartModule, TableModule],
  templateUrl: './analytics.html',
})
export class Analytics {
  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 6000, 8000, 7500, 12000, 15000],
        borderColor: '#7c3aed',
        tension: 0.4,
      },
    ],
  };

  donutData = {
    labels: ['Direct', 'Social', 'Email', 'Ads'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ['#7c3aed', '#22c55e', '#3b82f6', '#f97316'],
      },
    ],
  };

  chartOptions = {
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
        ticks: { color: '#94a3b8' },
        grid: { color: '#1e293b' },
      },
    },
  };

  products = [
    { name: 'Premium Plan', sales: 320, revenue: 6400 },
    { name: 'Pro Subscription', sales: 210, revenue: 4200 },
    { name: 'Basic Plan', sales: 150, revenue: 1500 },
  ];
}
