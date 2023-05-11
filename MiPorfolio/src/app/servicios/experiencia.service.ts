import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments.prod';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url: string =environment.apiURL;
  
  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    };

  constructor(private http:HttpClient) { }

// Métodos de acceso a la api

public obtenerExperiencias():Observable<Experiencia[]>{
  return this.http.get<Experiencia[]>(this.url + 'experiencia');
  };

public agregarExperiencia(nuevaExperiencia: Experiencia):Observable<any>{
  console.log(JSON.stringify(nuevaExperiencia));
     
  return this.http.post<any>(this.url + 'experiencia', JSON.stringify(nuevaExperiencia),this.httpOptions);
  };

  public obtenerExperiencia(id: number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `experiencia/${id}`);
    };


  public actualizarExperiencia(experienciaActualizar:Experiencia):Observable<Experiencia>{
      return this.http.put<Experiencia>(this.url + 'experiencia',experienciaActualizar);
      };

  
  public borrarExperiencia(id: number):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.url + `experiencia/${id}`);
  }

}
