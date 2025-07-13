import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget-component/widget-component';
import { DashboardService } from '../../services/dashboard-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent, MatButtonModule, MatIconModule],
  providers: [DashboardService],
  template: `
<div class="header">
    <h2>Channel Dashboard</h2>
<button mat-raised-button color="primary">
  <mat-icon>add_circle</mat-icon>
  Add widget
</button>
</div>
    <div class="dashboard-widgets">
      @for (w of store.widgets(); track w.id) {
      <app-widget-component [data]="w"></app-widget-component>
      }
    </div>
  `,
  styles: `
    .dashboard-widgets {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
})
export class Dashboard {
  store = inject(DashboardService);
}
