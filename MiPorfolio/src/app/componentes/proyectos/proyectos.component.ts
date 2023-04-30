import { Component,OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Importo servicios
import { ProyectoService } from 'src/app/servicios/proyecto.service';

 

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  // Declaraciones
 proyectosArray: Proyecto[] = [];
 esta_logueado: boolean = false;
 faPen=faPen;
 faTrashCan=faTrashCan;
  

  constructor(private datosProyecto:ProyectoService) {}

  ngOnInit(): void {
    this.mostrarProyectos();
   
    if (localStorage.getItem("estado_login"))
        {
          this.esta_logueado=true;
        }
        else
          {
           this.esta_logueado=false;
          }
  }

mostrarProyectos(): void {
  this.datosProyecto.obtenerProyectos().subscribe(
    datap => {
      this.proyectosArray = datap;
                              
  });
}

onDelete(id?: number){
    
  if(id != undefined){

    this.datosProyecto.borrarProyecto(id).subscribe(
      data => {
        alert("Se borró el proyecto correctamente")
        this.mostrarProyectos();
      }, err => {
        alert("No se pudo borrar el proyecto");
      }
    )
  }
}

}
