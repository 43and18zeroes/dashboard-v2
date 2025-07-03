import { Component } from '@angular/core';
import { WidgetComponent } from '../../components/widget-component/widget-component';
import { Widget } from '../../models/dashboard';
import { Subscribers } from './widgets/subscribers';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  data: Widget = {
    id: 1,
    label: 'Subscribers',
    content: Subscribers
  };

}
