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
  standalone: true,
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  template: `
    <div class="sidenav-header">
      <img
        [width]="profilePicSize()"
        [height]="profilePicSize()"
        src="/assets/user.webp"
      />
      <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
        <h2>Your channel</h2>
        <p>Christoph</p>
      </div>
    </div>
    <mat-nav-list>
      <a
        mat-list-item
        *ngFor="let item of menuItems()"
        [routerLink]="item.route"
        routerLinkActive
        #rla="routerLinkActive"
        [activated]="rla.isActive"
      >
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle *ngIf="!sideNavCollapsed()">{{
          item.label
        }}</span>
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

      > h2 {
        margin: 0;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      > p {
        margin: 0;
        font-size: 0.8rem;
      }
    }
  }

  .hide-header-text {
    opacity: 0;
    height: 0px;
  }
  
  `,
})
export class CustomSidenav {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

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

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));
}
