import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  template: `
    <mat-toolbar class="mat-elevation-z3">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav> </mat-sidenav>
      <mat-sidenav-content class="content">
        <router-outlet />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      mat-toolbar {
        position: relative;
        z-index: 5;
      }

      .content {
        padding: 24px;
      }

      mat-sidenav-container {
        height: calc(100vh - 64px);
      }
    `,
  ],
})
export class App {
  protected title = 'zoaib3';
}
