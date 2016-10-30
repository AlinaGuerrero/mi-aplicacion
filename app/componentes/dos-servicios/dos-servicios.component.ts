import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Persona } from '../../clases/persona';
import { PersonaObservableService } from '../../servicios/persona-observable.service';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  moduleId: module.id,
  selector: 'dos-servicios',
  templateUrl: 'dos-servicios.component.html',
  styleUrls: ['dos-servicios.component.css'],
})

export class DosServiciosComponent implements OnInit {


  personas: Persona[];

  listaServicio2: Persona[] = [];

  constructor(
    private router: Router,
    private personaObservableService: PersonaObservableService,
    private personaService: PersonaService) { }



  getPersonas(): void {

    this.personaObservableService
      .getPersonas()
      .subscribe(res => {
        this.personas = res;
        res.forEach(persona => {
            this.getInfoPersona(persona.id)
        });
      })
  }

  getInfoPersona(id:number): void {

    this.personaService
      .getPersona(id)
      .then(persona => this.listaServicio2.push(persona));
  }

  ngOnInit(): void {
    this.getPersonas();
  }


}
