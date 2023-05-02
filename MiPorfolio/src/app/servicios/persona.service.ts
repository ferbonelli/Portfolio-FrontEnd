import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  // Métodos de acceso a la api

  public obtenerPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + 'persona');
    };

  public obtenerPersona(id: number):Observable<Persona>{
    return this.http.get<Persona>(this.url + `persona/${id}`);
    };

  
  public actualizarPersona(personaActualizar:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url + 'persona',personaActualizar);
    };

}
