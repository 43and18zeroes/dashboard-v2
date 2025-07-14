import { Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-widget-options',
  imports: [MatButtonModule, MatIcon],
  template: `
    <button mat-icon-button class="close-button" (click)="showOptions.set(false)">
      <mat-icon>close</mat-icon>
    </button>
  `,
  styles: `
  :host {
    position: absolute;
    z-index: 2;
    background: whitesmoke;
    color: black;
    top: 0;
    left: 0;
    border-radius: inherit;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    > div {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-bottom: 8px;
    }
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
  }
  `,
})
export class WidgetOptions {

  showOptions = model<boolean>(false);

}
