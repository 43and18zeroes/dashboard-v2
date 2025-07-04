import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget-component/widget-component';
import { Widget } from '../../models/dashboard';
import { DashboardService } from '../../services/dashboard';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent, MatButtonModule, MatIcon],
  providers: [DashboardService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  store = inject(DashboardService)


}
