import { Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget-options',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './widget-options.html',
  styleUrl: './widget-options.scss'
})
export class WidgetOptions {
  showOptions = model<boolean>(false)
}
