import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { DetallePersonaComponent } from './componentes/detalle-persona.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DetallePersonaComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
