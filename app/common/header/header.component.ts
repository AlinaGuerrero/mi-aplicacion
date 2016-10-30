import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-header',
  template: `
    <nav>
      <div class='header'>
        Mi Header
      </div>
    </nav>
  `,
  styles: [
    `
    .header {
      width: inherit;
      height: 50px;
      background-color: #bfd3e4;
      text-align: center;
      padding-top: 10px
    }

    `
  ]
})

export class HeaderComponent {}
