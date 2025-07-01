import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme'; // Standard-Modus

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyTheme(this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme); // Speichern im Local Storage
  }

  applyTheme(theme: 'light-theme' | 'dark-theme'): void {
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');
    this.renderer.addClass(document.body, theme);
  }

  // Beim Start der App den gespeicherten Modus laden
  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.applyTheme(this.currentTheme);
    }
  }

  getCurrentTheme(): 'light-theme' | 'dark-theme' {
    return this.currentTheme;
  }
}