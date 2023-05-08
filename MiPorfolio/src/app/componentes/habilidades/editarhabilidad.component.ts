import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


// Lo necesario para habilidad
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';



@Component({
  selector: 'app-editarhabilidad',
  templateUrl: './editarhabilidad.component.html',
  styleUrls: ['./editarhabilidad.component.css']
})
export class EditarhabilidadComponent implements OnInit {

// Declaraciones
habilidadEditar: Habilidad = new Habilidad(0,'',0,0);
formularioHabilidad: FormGroup;

constructor( private formBuilder:FormBuilder,
             private datosHabilidad:HabilidadService,
             private rutaActiva:ActivatedRoute,
             private ruta:Router
)
 {
  this.formularioHabilidad=this.formBuilder.group(
    {
      nombre: ['',[Validators.required]],
      porcentaje: ['',[Validators.required,Validators.max(100),Validators.min(1)]],
    }
  )
 }

ngOnInit(): void {

  this.traerHabilidad();
  
}

get Nombre(){
  return this.formularioHabilidad.get('nombre');
}

get Porcentaje() {
  return this.formularioHabilidad.get('porcentaje');
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
    );

}

onUpdate(event: Event) {
  
  this.datosHabilidad.actualizarHabilidad(this.habilidadEditar).subscribe({
    next: data => {
      alert("Se actualizó la habilidad");
      this.ruta.navigate(['/portfolio']);
    }, 
    
    error: error =>{
       alert("Error al modificar la habilidad");
       this.ruta.navigate(['/portfolio']);
    }
    })

}


}
