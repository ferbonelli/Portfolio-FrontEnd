import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  clave: string = '';


  logindatos:any;
  
  constructor(private datosLogin: LoginService,
              private ruta:Router
              ) { }

  ngOnInit(): void {
    this.datosLogin.obtenerCredenciales().subscribe(
      data => {
        this.logindatos = data;
        console.log("ESte es el usuario recuperado:"+ this.logindatos);
                        
    });
  }

  onClick() {
    if (this.clave===this.logindatos[0].password && this.usuario===this.logindatos[0].username)
    {
      alert('Te logueaste correctamente');
      this.ruta.navigate(['/portfolio']);
          }
    else {
        alert('Ingreso incorrecto');
        this.ruta.navigate(['/portfolio']);
         }
  }
}
