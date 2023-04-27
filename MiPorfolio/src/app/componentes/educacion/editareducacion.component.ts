import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';

// Importo servicios
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})

export class EditareducacionComponent implements OnInit {

  educacionEditar: Educacion = new Educacion(0,'','','','','',1);

constructor (
              private datosEducacion:EducacionService,
              private rutaActiva:ActivatedRoute,
              private ruta:Router
){}

ngOnInit(){
  this.traerEducacion();
  
}

traerEducacion() {
  const id = this.rutaActiva.snapshot.params['id'];
    
    this.datosEducacion.obtenerEducacion(id).subscribe(
      data =>{
        this.educacionEditar = data;
        
        
      }, err =>{
        alert("Error al modificar la educacion");
        this.ruta.navigate(['/portfolio']);
      }
    )
}

onUpdate() {
  
  this.datosEducacion.actualizarEducacion(this.educacionEditar).subscribe(
    data => {
      alert("Se actualizó la educacion");
      this.ruta.navigate(['/portfolio']);
    }, err =>{
       alert("Error al modificar la educacion");
       this.ruta.navigate(['/portfolio']);
    }
  )

}

}
