import { Component } from '@angular/core';
import { WidgetComponent } from "../../components/widget-component/widget-component";
import { Widget } from '../../models/dashboard';
import { Subscribers } from './widgets/subscribers';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent],
  template: `
    <h1>Dashboard</h1>

    <app-widget-component [data]=data></app-widget-component>
  `,
  styles: ``
})
export class Dashboard {

  data: Widget = {
    id: 1,
    label: 'Subscribers',
    content: Subscribers
  }

}
