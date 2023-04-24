import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url:string="http://localhost:8080/";
  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    };

  constructor(private http:HttpClient) { }

  // Métodos de acceso a la api

  public obtenerProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + 'proyecto');
    };

  public agregarProyecto(nuevoProyecto: Proyecto):Observable<any>{
    console.log(JSON.stringify(nuevoProyecto));
       
    return this.http.post<any>(this.url + 'proyecto', JSON.stringify(nuevoProyecto),this.httpOptions);
    };

    public obtenerProyecto(id: number):Observable<Proyecto>{
      return this.http.get<Proyecto>(this.url + `proyecto/${id}`);
      };


    public actualizarProyecto(proyectoActualizar:Proyecto):Observable<Proyecto>{
        return this.http.put<Proyecto>(this.url + 'proyecto',proyectoActualizar);
        };

    
    public borrarProyecto(id: number):Observable<Proyecto>{
      return this.http.delete<Proyecto>(this.url + `proyecto/${id}`);
    }

}
