import { Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard';
import { Subscribers } from '../pages/dashboard/widgets/subscribers';
import { Views } from '../pages/dashboard/widgets/views';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: Subscribers,
    },
    {
      id: 2,
      label: 'Views',
      content: Views,
    },
  ]);

  constructor() {}
}
