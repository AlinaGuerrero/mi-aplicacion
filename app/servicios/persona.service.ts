import { Injectable } from '@angular/core';
import { Persona } from '../clases/persona';
import { PERSONAS } from './mock-personas';

@Injectable()
export class PersonaService {
  getPersonas(): Promise<Persona[]> {
    return Promise.resolve(PERSONAS);
  }
}
