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
  estadologin: string = 'no_logueado';
  logueado: boolean = false;
  

  constructor(private datosLogin: LoginService,
              private ruta:Router
               ){}

  ngOnInit(): void {
    const estado = localStorage.getItem("estado_login");
    
    if (estado) {
        this.estadologin = estado;
        console.log('Estado del login en encabezado:');
          console.log(this.estadologin);
            }
    
    if (this.estadologin=== 'logueado' )
    {
      this.logueado=true;
      console.log('DEL if:');
      console.log(this.logueado);

    }
            else {this.logueado=false};

  }
       

  onlogin() {
    this.ruta.navigate(['/login']);
    
  }

  onlogout(){
    localStorage.setItem('estado_login','no_logueado');
    console.log('tiene que cerrar');
    window.location.reload();


            
  }


}
