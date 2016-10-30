import { Component, OnInit } from '@angular/core';

import { Persona } from '../../clases/persona';
import { PersonaObservableService } from '../../servicios/persona-observable.service';

@Component({
  selector: 'padre',
  template: `
    <h2>Interacción Ej. 2 - Pasar datos de padre a hijo mediante Input</h2>
    <h2>Componente Padre</h2>
    <h2>El curso {{cursoP}} tiene {{personasP.length}} estudiantes</h2>
    <h2>Componentes Hijos</h2>
    <hijo *ngFor="let personaP of personasP"
      [persona]="personaP"
      [curso]="cursoP">
    </hijo>
  `
})

export class PadreComponent implements OnInit {


    cursoP: string = 'Angular 2';
    personasP: Persona[] = [];


  constructor(private personaService: PersonaObservableService) { }

  ngOnInit(): void {
      this.personaService.getPersonas()
      .subscribe(res => {
        this.personasP = res;
      })
  }


}
