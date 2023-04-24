import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';

// Importo servicios
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {

proyectoEditar: Proyecto = new Proyecto(0,'','','','','',1);

constructor(
            private datosProyecto:ProyectoService,
            private rutaActiva:ActivatedRoute,
            private ruta:Router

) {}

ngOnInit() {
  this.traerProyecto();
}

traerProyecto() {
  const id = this.rutaActiva.snapshot.params['id'];
    
    this.datosProyecto.obtenerProyecto(id).subscribe(
      data =>{
        this.proyectoEditar = data;
        
        
      }, err =>{
        alert("Error al modificar el proyecto");
        this.ruta.navigate(['/portfolio']);
      }
    )
}

onUpdate() {
  
  this.datosProyecto.actualizarProyecto(this.proyectoEditar).subscribe(
    data => {
      alert("Se actualizó el proyecto");
      this.ruta.navigate(['/portfolio']);
    }, err =>{
       alert("Error al modificar el proyecto");
       this.ruta.navigate(['/portfolio']);
    }
  )

}


}
