import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-revenue',
  imports: [MatIcon],
  template: `
    <div class="row mb-8 mt-8">
      <p class="stat">25,050</p>
      <mat-icon class="text-green">check_circle</mat-icon>
    </div>

    <div class="text-dim-gray stat-subtext">
      <span class="text-green">+502</span> in the last 28 days
    </div>
  `,
  styles: ``,
})
export class Revenue {}
