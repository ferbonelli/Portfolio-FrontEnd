import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

  esta_logueado: boolean = false;
  

  constructor(private ruta:Router
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
    localStorage.removeItem('estado_login');
    alert('Te desconectaste correctamente');
    window.location.reload();
    this.ruta.navigate(['']);
    


            
  }


}
