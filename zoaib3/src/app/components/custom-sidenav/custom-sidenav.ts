import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-sidenav',
  imports: [],
  template: `
    <div class="sidenav-header">
      <img width="100" height="100" src="/assets/user.webp" />
      <div class="header-text">
        <h2>Your channel</h2>
        <p>Christoph</p>
      </div>
    </div>
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
export class CustomSidenav {}
