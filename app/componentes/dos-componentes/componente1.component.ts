import { Component, Output, EventEmitter } from '@angular/core';

import { Persona } from '../../clases/persona';
import { PersonaObservableService } from '../../servicios/persona-observable.service';

@Component({
  moduleId: module.id,
  selector: 'componente1',
  templateUrl: 'componente1.component.html',
  styleUrls: ['componente1.component.css'],
})

export class Componente1Component {  
  personas: Persona[];
  @Output() selectedPersona: EventEmitter<Persona> = new EventEmitter<Persona>();

  constructor(private personaService: PersonaObservableService) { }

  getPersonas(): void {
    this.personaService
      .getPersonas() .subscribe(res => { this.personas = res; })
  }

  selectPersona(persona: Persona)  {
    this.selectedPersona.emit(persona);
  }
}
