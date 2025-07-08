import { computed, Injectable, signal } from '@angular/core';
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

  addedWidgets = signal<Widget[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    console.log('this.addedWidgets', this.addedWidgets);
    console.log('addedIds', addedIds);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  });

  addWidget(w: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }])
  }

  constructor() {}
}
