import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Persona } from '../clases/persona';


@Injectable()
export class PersonaService {
  private personasUrl = 'app/personas';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPersonas(): Promise<Persona[]> {
    return this.http.get(this.personasUrl)
               .toPromise()
               .then(response => response.json().data as Persona[])
               .catch(this.handleError);
}



  /*getPersonas(): Promise<Persona[]> {
    return Promise.resolve(PERSONAS);
  }*/

  getPersona(id: number): Promise<Persona> {
    return this.getPersonas()
               .then(personas => personas.find(personas => personas.id === id));
  }


  updatePersona(persona: Persona): Promise<Persona> {
    const url = `${this.personasUrl}/${persona.id}`;
    return this.http
      .put(url, JSON.stringify(persona), {headers: this.headers})
      .toPromise()
      .then(() => persona)
      .catch(this.handleError);
  }

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
