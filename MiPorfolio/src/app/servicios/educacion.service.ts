import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments.prod';
import { Educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string =environment.apiURL;

  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    };

  constructor(private http:HttpClient) { }

  // Métodos de acceso a la api

public obtenerEducaciones():Observable<Educacion[]>{
  return this.http.get<Educacion[]>(this.url + 'educacion');
  };

public agregarEducacion(nuevaEducacion: Educacion):Observable<any>{
  console.log(JSON.stringify(nuevaEducacion));
     
  return this.http.post<any>(this.url + 'educacion', JSON.stringify(nuevaEducacion),this.httpOptions);
  };

  public obtenerEducacion(id: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `educacion/${id}`);
    };


  public actualizarEducacion(educacionActualizar:Educacion):Observable<Educacion>{
      return this.http.put<Educacion>(this.url + 'educacion',educacionActualizar);
      };

  
  public borrarEducacion(id: number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.url + `educacion/${id}`);
  }




}
