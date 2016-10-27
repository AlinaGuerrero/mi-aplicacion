import { Component,OnInit  } from '@angular/core';
import {Router} from '@angular/router';

import { Persona } from '../../clases/persona';

import { PersonaService } from '../../servicios/persona.service';

@Component({
  moduleId: module.id,
  selector: 'mi-personas',
  templateUrl: 'personas.component.html',
  styleUrls: ['personas.component.css']
})

export class PersonasComponent {

  personas : Persona[];
  selectedPersona: Persona;

  constructor(private router: Router, private personaService: PersonaService) { }

  getPersonas(): void {
    this.personaService.getPersonas().then(personas => this.personas = personas);
  }

  ngOnInit(): void {
    this.getPersonas();
  }

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }

  abrirDetalle(): void {
    this.router.navigate(['/detalle', this.selectedPersona.id]);
  }
}
