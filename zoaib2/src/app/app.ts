import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  template: `
  <mat-toolbar class="mat-elevation-z3">
    <button matButton="elevated">Basic</button>
  </mat-toolbar>
  <router-outlet /> `,
  styles: [],
})
export class App {
  protected title = 'zoaib2';
}
