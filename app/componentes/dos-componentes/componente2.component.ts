import { Component,Input } from '@angular/core';

import { Persona } from '../../clases/persona';

@Component({
  moduleId: module.id,
  selector: 'componente2',
  templateUrl: 'componente2.component.html',
  styleUrls: ['componente2.component.css'],
})

export class Componente2Component {

  persona: Persona;

  setPersona(persona:Persona) {
     this.persona=persona;
  }


}
