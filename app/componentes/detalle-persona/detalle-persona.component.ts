import { Component, Input, OnInit  } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Persona } from '../../clases/persona';

import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'mi-detalle-persona',
  template: `
    <div *ngIf="persona">
      <h2>{{persona.nombre}} - detalles!</h2>
      <div><label>Id: </label>{{persona.id}}</div>
      <div>
        <label>Nombre: </label>
        <input [(ngModel)]="persona.nombre" placeholder="nombre"/>
      </div>
    </div>
    <button (click)="goBack()">Volver</button>
  `
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
