import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './servicios/in-memory-data.service';

import { AppComponent }  from './app.component';
import { DetallePersonaComponent } from './componentes/detalle-persona/detalle-persona.component';
import { PersonasComponent }     from './componentes/personas/personas.component';
import { DashboardComponent }     from './componentes/dashboard/dashboard.component';

import { PersonaService }     from './servicios/persona.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
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
