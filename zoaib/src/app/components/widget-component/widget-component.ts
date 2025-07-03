import { Component, input } from '@angular/core';
import { Widget } from '../../models/dashboard';

@Component({
  selector: 'app-widget-component',
  imports: [],
  templateUrl: './widget-component.html',
  styleUrl: './widget-component.scss'
})
export class WidgetComponent {
  data = input.required<Widget>();
}
