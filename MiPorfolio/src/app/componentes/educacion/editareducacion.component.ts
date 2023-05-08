import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Lo necesito para Educacion
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})

export class EditareducacionComponent implements OnInit {

  // Declaraciones
  formularioEducacion: FormGroup;
  educacionEditar: Educacion = new Educacion(0,'','','','','',0);

constructor ( private formBuilder:FormBuilder,
              private datosEducacion:EducacionService,
              private rutaActiva:ActivatedRoute,
              private ruta:Router
            ){
              this.formularioEducacion=this.formBuilder.group(
                {
                  institucion: ['',[Validators.required]],
                  titulo: ['',[Validators.required]],
                  url_logoinst: ['',[Validators.required]],
                  fecha_inicio: ['',[Validators.required,
                    Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                    ]],
                  fecha_final: ['',[Validators.required,
                    Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                    ]],
                }
              )
            }

ngOnInit(){
  this.traerEducacion();
  
}

get Institucion(){
  return this.formularioEducacion.get('institucion');
}

get Titulo() {
  return this.formularioEducacion.get('titulo');
}

get Url_logoinst() {
  return this.formularioEducacion.get('url_logoinst');
}

get Fecha_inicio(){
  return this.formularioEducacion.get('fecha_inicio');
}

get Fecha_final() {
  return this.formularioEducacion.get('fecha_final');
}

traerEducacion() {
  const id = this.rutaActiva.snapshot.params['id'];
    
    this.datosEducacion.obtenerEducacion(id).subscribe(
      data =>{
        this.educacionEditar = data;
               
      }
    )
}

onUpdate(event: Event) {
  
  this.datosEducacion.actualizarEducacion(this.educacionEditar).subscribe({
    next: data => {
      alert("Se actualizó el curso");
      this.ruta.navigate(['/portfolio']);
    }, 
    
    error: error =>{
       alert("Error al modificar el curso");
       this.ruta.navigate(['/portfolio']);
    }
  })

}

}
