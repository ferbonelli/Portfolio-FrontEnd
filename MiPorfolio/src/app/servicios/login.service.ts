import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Para autorizar el usuario
  url:string="http://localhost:8080/";

  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    };
  
  

  constructor(private http:HttpClient) { }

  public enviarCredenciales(usuarioAutorizar: Usuario):Observable<any>{
    console.log("en el servicio");
    return this.http.post<any>(this.url + 'usuario/login',JSON.stringify(usuarioAutorizar),this.httpOptions) 
    
  }   

}
