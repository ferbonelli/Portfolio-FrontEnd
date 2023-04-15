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
  estadologin: boolean = false;
  

  constructor(private datosLogin: LoginService,
              private ruta:Router
               ){}

  ngOnInit(): void {
    this.datosLogin.obtenerCredenciales().subscribe(
      data => {
        this.logindatos = data;
        console.log(this.logindatos);
                
    });
    
  }

  onlogin() {
    this.ruta.navigate(['/login']);       
  }

  onlogout(){
            
  }


}
