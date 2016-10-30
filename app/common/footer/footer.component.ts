import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-footer',
  template: `
    <footer class="footer">
          © 2016 Universidad de Cuenca.
    </footer>
  `,
  styles: [
    `
    .footer{
      width: inherit;
      height: 50px;
      background-color: #bfd3e4;
      margin-top:50px;
      text-align: center;
      padding-top: 10px
    }
    `
  ]
})

export class FooterComponent {}
