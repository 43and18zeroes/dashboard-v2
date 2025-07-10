import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule],
  template: `
    <div class="sidenav-header">
      <img width="100" height="100" src="/assets/user.webp" />
      <div class="header-text">
        <h2>Your channel</h2>
        <p>Christoph</p>
      </div>
    </div>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems()">
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle>{{ item.label }}</span>
      </a>
    </mat-nav-list>
  `,
  styles: `
  .sidenav-header {
    padding-top: 24px;
    text-align: center;

    > img {
      border-radius: 100%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .header-text {
      margin: 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    > p {
      margin: 0;
      font-size: 0.8rem;
    }
  }
  `,
})
export class CustomSidenav {
  menuItems = signal<MenuItem[]>([
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
  ]);
}
