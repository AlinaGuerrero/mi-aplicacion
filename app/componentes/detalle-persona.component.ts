import { Component, Input } from '@angular/core';
import { Persona } from '../clases/persona';

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
  `
})
export class DetallePersonaComponent {
  @Input()
  persona: Persona;
}
