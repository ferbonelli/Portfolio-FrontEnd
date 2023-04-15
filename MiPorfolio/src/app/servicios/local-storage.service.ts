import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public guardarLocal(estado: string) {
    localStorage.setItem('estado_login', estado);
  }

  public obtenerLocal(estado: string) {
    return localStorage.getItem(estado)
  }

  public limpiarLocal() {
    localStorage.clear();
  }
}
