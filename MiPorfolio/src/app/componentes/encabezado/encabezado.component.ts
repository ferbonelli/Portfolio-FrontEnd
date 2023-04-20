import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

  logindatos:any;
  esta_logueado: boolean = false;
  

  constructor(private datosLogin: LoginService,
              private ruta:Router
               ){}

  ngOnInit(): void {

    if (localStorage.getItem("estado_login"))
        {
          this.esta_logueado=true;
        }
        else
          {
           this.esta_logueado=false;
          }
   
  }
       

  onlogin() {
    this.ruta.navigate(['/login']);
    
  }

  onlogout(){
    //localStorage.setItem('estado_login','no_logueado');
    localStorage.removeItem('estado_login')
    console.log('tiene que cerrar');
    window.location.reload();


            
  }


}
