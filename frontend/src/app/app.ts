import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CustomSidenav } from './components/custom-sidenav/custom-sidenav';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenav,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'dashboard-v2';

  constructor(private themeService: ThemeService) {}

  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '75px' : '250px'));

  ngOnInit(): void {
    this.themeService.loadTheme(); // Thema beim Start laden
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
