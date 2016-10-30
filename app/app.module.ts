import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule }    from '@angular/http';

import './rxjs-extensions';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './servicios/in-memory-data.service';

import { AppComponent }  from './app.component';
import { DetallePersonaComponent } from './componentes/detalle-persona/detalle-persona.component';
import { PersonasComponent }     from './componentes/personas/personas.component';
import { BuscarPersonaComponent }     from './componentes/buscar-persona/buscar-persona.component';
import { DashboardComponent }     from './componentes/dashboard/dashboard.component';

import { DosComponentesComponent }  from './componentes/dos-componentes/dos-componentes.component';
import {Componente1Component} from './componentes/dos-componentes/componente1.component';
import {Componente2Component} from './componentes/dos-componentes/componente2.component';

import { DosServiciosComponent }  from './componentes/dos-servicios/dos-servicios.component';

import { PadreComponent }  from './componentes/padre-hijo/padre.component';
import { HijoComponent }  from './componentes/padre-hijo/hijo.component';

import { PersonaService }     from './servicios/persona.service';
import { PersonaObservableService }     from './servicios/persona-observable.service';

import { AppRoutingModule }     from './app-routing.module';

import {CommonModule} from "./common/common.module";

import { HelloWorld } from "ucuenca-pruebas-angular/components";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    DetallePersonaComponent,
    PersonasComponent,
    DashboardComponent,
    BuscarPersonaComponent,
    DosComponentesComponent,
    Componente1Component,
    Componente2Component,
    DosServiciosComponent,
    PadreComponent,
    HijoComponent,
    HelloWorld
  ],
  providers: [
    PersonaService,
    PersonaObservableService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
