import { Component, input } from '@angular/core';
import { Widget } from '../../models/dashboard';

@Component({
  selector: 'app-widget-component',
  imports: [],
  template: `
    <div class="container mat-elevation-z3">
      <h3 class="m-0">{{ data().label }}</h3>
    </div>
  `,
  styles: `
  :host {
    display: block;
    border-radius: 16px;
  }

  .container {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    border-radius: inherit;
    overflow: hidden;
  }
  `
})
export class WidgetComponent {
  data = input.required<Widget>()
}
