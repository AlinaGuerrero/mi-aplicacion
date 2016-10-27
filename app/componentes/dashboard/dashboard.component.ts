import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Persona } from '../../clases/persona';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  moduleId: module.id,
  selector: 'mi-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.personaService.getPersonas()
      .then(personas => this.personas = personas.slice(1, 5));
  }

  abrirDetalle(persona: Persona): void {
    let link = ['/detalle', persona.id];
    this.router.navigate(link);
  }

}
