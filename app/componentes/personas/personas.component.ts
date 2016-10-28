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

  agregar(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.personaService.crear(nombre)
      .then(persona => {
        this.personas.push(persona);
        this.selectedPersona = null;
      });
  }

  delete(persona: Persona): void {
    this.personaService
        .eliminar(persona.id)
        .then(() => {
          this.personas = this.personas.filter(p => p !== persona);
          if (this.selectedPersona === persona) { this.selectedPersona = null; }
        });
  }


}
