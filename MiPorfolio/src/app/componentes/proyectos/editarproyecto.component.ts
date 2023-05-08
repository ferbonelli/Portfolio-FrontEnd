import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Lo necesito para la sección proyectos
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/app/model/proyecto.model';


@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {

// Declaraciones
formularioProyecto: FormGroup;  
proyectoEditar: Proyecto = new Proyecto(0,'','','','','',0);

constructor(private formBuilder:FormBuilder,
            private datosProyecto:ProyectoService,
            private rutaActiva:ActivatedRoute,
            private ruta:Router

           ) {
            this.formularioProyecto=this.formBuilder.group(
              {
                nombre: ['',[Validators.required]],
                descripcion: ['',[Validators.required]],
                url_proyecto: ['',[Validators.required]],
                fecha_inicio: ['',[Validators.required,
                  Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                  ]],
                fecha_final: ['',[Validators.required,
                  Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                  ]],
              }
            )
           }

ngOnInit() {
  this.traerProyecto();
}

get Nombre(){
  return this.formularioProyecto.get('nombre');
}

get Descripcion() {
  return this.formularioProyecto.get('descripcion');
}

get Url_proyecto() {
  return this.formularioProyecto.get('url_proyecto');
}

get Fecha_inicio(){
  return this.formularioProyecto.get('fecha_inicio');
}

get Fecha_final() {
  return this.formularioProyecto.get('fecha_final');
}


traerProyecto() {
  const id = this.rutaActiva.snapshot.params['id'];
    
    this.datosProyecto.obtenerProyecto(id).subscribe(
      
      data =>{
        this.proyectoEditar = data;   
      }
     )
}

onUpdate(event: Event) {
  
  this.datosProyecto.actualizarProyecto(this.proyectoEditar).subscribe({
    
    next: data => {
      alert("Se actualizó el proyecto");
      this.ruta.navigate(['/portfolio']);
    },
    
    error:  error =>{
       alert("Error al modificar el proyecto");
       this.ruta.navigate(['/portfolio']);
    }
  })

}


}
