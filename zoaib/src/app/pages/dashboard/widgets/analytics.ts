import { Component, ElementRef, viewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics',
  imports: [],
  template: `
    <div class="chart-container">
      <canvas #chart></canvas>
    </div>

    <button mat-raised-button class="mt-16">Go to Channel analytics</button>
  `,
  styles: ``,
})
export class Analytics {
  chart = viewChild.required<ElementRef>('chart');

  ngOnInit() {
    new Chart(this.chart().nativeElement, {
      type: 'line',
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
          {
            label: 'Views',
            data: [100, 102, 105, 110, 115, 120],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: 'start',
          },
        ],
      },
    });
  }
}
