import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget-component/widget-component';
import { Widget } from '../../models/dashboard';
import { DashboardService } from '../../services/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent],
  providers: [DashboardService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  store = inject(DashboardService)


}
