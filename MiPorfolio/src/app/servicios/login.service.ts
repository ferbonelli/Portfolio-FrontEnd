import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Para obtener el estado login
  url:string="http://localhost:8080/ver/usuarios";
  // Para grabar si estado login ok
  url2:string="http://localhost:8080/modificar/usuario";
  

  constructor(private http:HttpClient) { }

  obtenerCredenciales():Observable<any>{
    return this.http.get(this.url);
    };

  cambiarVerdadero():Observable<any>{
    const cuerpover ={id: 2, username: 'bonelli.fernando@gmail.com', password: 'astroboy', estadologin: true, pers: null};
    return this.http.put<any>(this.url2, cuerpover);
        
  };

  cambiarFalso():Observable<any>{
    const cuerpofal ={id: 2, username: 'bonelli.fernando@gmail.com', password: 'astroboy', estadologin: false, pers: null};
    return this.http.put<any>(this.url2, cuerpofal);
        
  };

  

}
