import { Component, Input } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'hijo',
  template: `
    <h3>{{persona.nombre}} dice:</h3>
    <p>Yo, {{persona.nombre}}, estoy inscrito en el curso, {{curso}}.</p>
  `
})

export class HijoComponent {
  @Input() persona: Persona;
  @Input() curso: string;
}
