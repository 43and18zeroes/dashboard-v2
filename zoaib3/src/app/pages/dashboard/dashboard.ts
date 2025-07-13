import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget-component/widget-component';
import { DashboardService } from '../../services/dashboard-service';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent],
  providers: [DashboardService],
  template: `
    <h2>Channel Dashboard</h2>

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
  `,
})
export class Dashboard {
  store = inject(DashboardService);
}
