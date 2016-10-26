import { Component,OnInit  } from '@angular/core';
import { Persona } from './clases/persona';

import { PersonaService } from './servicios/persona.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Listado de Personas</h2>
    <ul class="personas">
      <li *ngFor="let persona of personas"
        [class.selected]="persona === selectedPersona"
        (click)="onSelect(persona)">
        <span class="badge">{{persona.id}}</span> {{persona.nombre}}
      </li>
    </ul>
    <mi-detalle-persona [persona]="selectedPersona"></mi-detalle-persona>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .personas {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .personas li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .personas li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .personas li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .personas .text {
      position: relative;
      top: -3px;
    }
    .personas .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [PersonaService]
})

export class AppComponent {
  title = 'Mi Aplicación';
  personas : Persona[];
  selectedPersona: Persona;

  constructor(private personaService: PersonaService) { }

  getPersonas(): void {
    this.personaService.getPersonas().then(personas => this.personas = personas);
  }

  ngOnInit(): void {
    this.getPersonas();
  }
  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }
}
