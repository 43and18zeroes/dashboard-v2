import { Component, inject } from '@angular/core';
import { WidgetComponent } from '../../components/widget-component/widget-component';
import { Widget } from '../../models/dashboard';
import { DashboardService } from '../../services/dashboard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent, MatButtonModule, MatIconModule ],
  providers: [DashboardService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  store = inject(DashboardService)


}
