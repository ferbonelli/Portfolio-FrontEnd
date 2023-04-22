import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  estadologin: string = 'no_logueado';
  usuario: string = '';
  clave: string = '';
  

  logindatos:any;
  
  constructor(private datosLogin: LoginService,
              private ruta:Router,
              ) { }

  ngOnInit(): void {
    this.datosLogin.obtenerCredenciales().subscribe(
      data => {
        this.logindatos = data;
        console.log("ESte es el usuario recuperado:");
        console.log(this.logindatos);
                        
    });
  }

  onClick() {
    if (this.clave===this.logindatos[0].password && this.usuario===this.logindatos[0].username)
    {
      
      localStorage.setItem('estado_login','logueado');

      //Esto es por si es null
      const estado = localStorage.getItem("estado_login");
      if (estado) {
          this.estadologin = estado;
          console.log('Estado del login:');
          console.log(this.estadologin);
      }
      
      alert('Te logueaste correctamente');

      this.ruta.navigate(['/portfolio']);
          }
    else {
        alert('Ingreso incorrecto');
        this.ruta.navigate(['/portfolio']);
         }
  }
}
