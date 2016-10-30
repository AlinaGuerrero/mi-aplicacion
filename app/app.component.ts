import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/personas" routerLinkActive="active">Personas</a>
     <a routerLink="/servicios" routerLinkActive="active">Dos servicios</a>
     <a routerLink="/componentes" routerLinkActive="active">Interaccion Ej. 1</a>
     <a routerLink="/padre-hijo" routerLinkActive="active">Interaccion Ej. 2</a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'Mi Aplicación';
}
