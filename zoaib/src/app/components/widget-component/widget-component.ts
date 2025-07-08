import { Component, input, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-widget-component',
  imports: [NgComponentOutlet, MatButtonModule, MatIconModule],
  templateUrl: './widget-component.html',
  styleUrl: './widget-component.scss',
})
export class WidgetComponent {
  data = input.required<Widget>();

  showOptions = signal(false);
}
