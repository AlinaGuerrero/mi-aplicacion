import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { DetallePersonaComponent } from './componentes/detalle-persona/detalle-persona.component';
import { PersonasComponent }     from './componentes/personas/personas.component';
import { DashboardComponent }     from './componentes/dashboard/dashboard.component';

import { PersonaService }     from './servicios/persona.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'personas',
        component: PersonasComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detalle/:id',
        component: DetallePersonaComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    DetallePersonaComponent,
    PersonasComponent,
    DashboardComponent
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
