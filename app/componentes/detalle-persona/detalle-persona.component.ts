import { Component, Input, OnInit  } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Persona } from '../../clases/persona';

import { PersonaService } from '../../servicios/persona.service';

@Component({
  moduleId: module.id,
  selector: 'mi-detalle-persona',
  templateUrl: 'detalle-persona.component.html',
  styleUrls: ['detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {
  @Input()
  persona: Persona;

  constructor(
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.personaService.getPersona(id)
        .then(persona => this.persona = persona);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
