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

  constructor(private datosLogin: LoginService,
              private ruta:Router
               ){}

  ngOnInit(): void {
    this.datosLogin.obtenerCredenciales().subscribe(
      data => {
        this.logindatos = data;
        console.log(this.logindatos[0].estadologin);
                
    });
  }

  onClick() {
    this.ruta.navigate(['/login'])
  }

  logout(){
    this.datosLogin.cambiarFalso().subscribe(
      data2 => {
        this.logindatos = data2;
        console.log(data2);
        console.log(this.logindatos[0].estadologin);
                       
    });
    
    
    //this.ngOnInit();
  
    //this.ruta.navigateByUrl('/EncabezadoComponent', {skipLocationChange: true})
    //.then(()=> this.ruta.navigate(['/portfolio']));

    
  }


}
