import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad.model';

// Importo servicios
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editarhabilidad',
  templateUrl: './editarhabilidad.component.html',
  styleUrls: ['./editarhabilidad.component.css']
})
export class EditarhabilidadComponent implements OnInit {

habilidadEditar: Habilidad = new Habilidad(0,'',0,1);

constructor(
             private datosHabilidad:HabilidadService,
             private rutaActiva:ActivatedRoute,
             private ruta:Router
){}

ngOnInit(): void {

  this.traerHabilidad();
  
}

traerHabilidad() {
  const id = this.rutaActiva.snapshot.params['id'];
    
    this.datosHabilidad.obtenerHabilidad(id).subscribe(
      data =>{
        this.habilidadEditar = data;
        
        
      }, err =>{
        alert("Error al modificar la habilidad");
        this.ruta.navigate(['/portfolio']);
      }
    )
}

onUpdate() {
  
  this.datosHabilidad.actualizarHabilidad(this.habilidadEditar).subscribe(
    data => {
      alert("Se actualizó la habilidad");
      this.ruta.navigate(['/portfolio']);
    }, err =>{
       alert("Error al modificar la habilidad");
       this.ruta.navigate(['/portfolio']);
    }
  )

}


}
