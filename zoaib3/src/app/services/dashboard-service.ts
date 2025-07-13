import { computed, Injectable, signal } from '@angular/core';
import { Subscribers } from '../pages/dashboard/widgets/subscribers';
import { Widget } from '../models/dashboard';
import { Views } from '../pages/dashboard/widgets/views';

@Injectable()
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

  addedWidgets = signal<Widget[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  })
}
