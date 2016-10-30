import { Component, ViewChild, AfterViewInit,Input  } from '@angular/core';
import { Router } from '@angular/router';

import {Componente1Component} from './componente1.component';
import {Componente2Component} from './componente2.component';

import { Persona } from '../../clases/persona';

@Component({
  moduleId: module.id,
  selector: 'dos-componentes',
  templateUrl: 'dos-componentes.component.html',
  styleUrls: ['dos-componentes.component.css'],
})

export class DosComponentesComponent  {

  @ViewChild(Componente1Component) listaComponent:Componente1Component;
  @ViewChild(Componente2Component) detalleComponent:Componente2Component;

   getPersonas() :void {
     this.listaComponent.getPersonas();
   }

   selectPersona(persona:Persona) {
      this.detalleComponent.setPersona(persona);
   }
}
