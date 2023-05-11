import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments.prod';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string =environment.apiURL;

  constructor(private http:HttpClient) { }

  // Métodos de acceso a la api
  
  public obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + 'usuario');
    };

  public obtenerUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url + `usuario/${id}`);
    };

}
