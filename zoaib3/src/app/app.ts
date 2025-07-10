import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
  <mat-toolbar class="mat-elevation-z3"></mat-toolbar>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'zoaib3';
}
