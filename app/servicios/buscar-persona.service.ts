import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Persona }           from '../clases/persona';

@Injectable()
export class BuscarPersonaService {

  constructor(private http: Http) {}

  search(term: string): Observable<Persona[]> {
    return this.http
               .get(`app/personas/?nombre=${term}`)
               .map((r: Response) => r.json().data as Persona[]);
  }
}
