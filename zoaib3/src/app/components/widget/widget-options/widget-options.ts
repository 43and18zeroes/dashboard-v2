import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-options',
  imports: [],
  template: `
    <p>
      widget-options works!
    </p>
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
  }
  `
})
export class WidgetOptions {

}
