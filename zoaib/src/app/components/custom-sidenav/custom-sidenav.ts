import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};


@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
})


export class CustomSidenav {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val)
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100'); 

  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'ondemand_video',
      label: 'Content',
      route: '/content',
    },
    {
      icon: 'bar_chart',
      label: 'Analytics',
      route: '/analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: '/comments',
    },
  ];
}
