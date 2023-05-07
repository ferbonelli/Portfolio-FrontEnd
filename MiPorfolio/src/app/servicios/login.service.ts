import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public enviarCredenciales(usuario: string, clave: string):Observable<any>{
    console.log("en el servicio");
    return this.http.post<any>(this.url + `usuario/${usuario}/${clave}`,JSON.stringify(usuario),this.httpOptions) 
    console.log(this.http.get<any>(this.url + `usuario/${usuario}/${clave}`));
  }   

}
