import { Component } from '@angular/core';
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
  styles: ``
})
export class Analytics {

}
