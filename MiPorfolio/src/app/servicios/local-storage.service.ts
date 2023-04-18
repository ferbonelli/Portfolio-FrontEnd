import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public guardarLocal(estado: string) {
    localStorage.setItem('estado_login', estado);
  }

  public  obtenerLocal() {
    
    if (localStorage.getItem('estado_loginn') === null)
    {
      return 'no_logueado';
    }

    else
     {
        return localStorage.getItem('esatdo_login')
     }

    }

  public limpiarLocal() {
    localStorage.clear();
  }
}
