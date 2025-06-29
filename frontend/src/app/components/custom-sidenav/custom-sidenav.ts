import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '/settings',
    },
    {
      icon: 'info',
      label: 'About',
      route: '/about',
    },
  ];
}
