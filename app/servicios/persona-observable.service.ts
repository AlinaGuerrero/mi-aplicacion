import { Injectable }    from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Persona } from '../clases/persona';



@Injectable()
export class PersonaObservableService {

  private personasUrl = 'app/personas';

	//private personasUrlServer = 'http://172.16.225.138:8082/rest/personas';

	//private personasUrlId = 'http://172.16.225.138:8083/rest/persona/buscarPorId';

	//private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

  getPersonas(): Observable<Persona[]> {
      return this.http
        .get(this.personasUrl)
				.map((r: Response) => r.json().data as Persona[])
				.filter(r => r.length > 0)
        .catch(this.handleError)
  }

	getPersona(id: number): Observable<Persona> {
		const url = `${this.personasUrl}/${id}`;
		return this.http.get(url)
					 .map(response => response.json().data as Persona)
					 .catch(this.handleError);
	}

  private handleError(error: any): Promise<any> {
	  console.error('Ha ocurrido un error.', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }

}
