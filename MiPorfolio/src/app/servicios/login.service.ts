import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Para obtener el estado login
  url:string="http://localhost:8080/ver/usuarios";
  
  

  constructor(private http:HttpClient) { }

  obtenerCredenciales():Observable<any>{
    return this.http.get(this.url);
    };

     

}
