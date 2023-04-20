import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url:string="http://localhost:8080/";


  constructor(private http:HttpClient) { }

  // Métodos de acceso a la api

  obtenerHabilidad():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url + 'habilidad');
    };
}
