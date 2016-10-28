import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { BuscarPersonaService } from '../../servicios/buscar-persona.service';
import { Persona } from '../../clases/persona';

@Component({
  moduleId: module.id,
  selector: 'buscar-persona',
  templateUrl: 'buscar-persona.component.html',
  styleUrls: [ 'buscar-persona.component.css' ],
  providers: [BuscarPersonaService]
})

export class BuscarPersonaComponent implements OnInit {

  personas: Observable<Persona[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private buscarPersonaService: BuscarPersonaService,
    private router: Router) {}

  // Agregar un término al flujo observable
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.personas = this.searchTerms
      .debounceTime(200)        // esperar
      .distinctUntilChanged()   // ignorar si no hay cambios en el término
      .switchMap(term => term   // cambiar a un nuevo observable cada vez
        ? this.buscarPersonaService.search(term)
        // o aun un observable vacío si no hay término de búsqueda
        : Observable.of<Persona[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Persona[]>([]);
      });
  }

  abrirDetalle(persona: Persona): void {
    let link = ['/detalle', persona.id];
    this.router.navigate(link);
  }
}
