import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments.prod';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url: string =environment.apiURL;

  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    };


  constructor(private http:HttpClient) { }

  // Métodos de acceso a la api

  public obtenerHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url + 'habilidad');
    };

  public agregarHabilidad(nuevaHabilidad: Habilidad):Observable<any>{
    console.log(JSON.stringify(nuevaHabilidad));
       
    return this.http.post<any>(this.url + 'habilidad', JSON.stringify(nuevaHabilidad),this.httpOptions);
    };

    public obtenerHabilidad(id: number):Observable<Habilidad>{
      return this.http.get<Habilidad>(this.url + `habilidad/${id}`);
      };


    public actualizarHabilidad(habilidadActualizar:Habilidad):Observable<Habilidad>{
        return this.http.put<Habilidad>(this.url + 'habilidad',habilidadActualizar);
        };

    
    public borrarHabilidad(id: number):Observable<Habilidad>{
      return this.http.delete<Habilidad>(this.url + `habilidad/${id}`);
    }

}
