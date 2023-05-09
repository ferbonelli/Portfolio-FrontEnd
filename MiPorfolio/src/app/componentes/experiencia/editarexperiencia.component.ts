import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Lo necesito para la sección de Experiencia
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit{
  
  // Declaraciones
  formularioExperiencia: FormGroup;
  experienciaEditar: Experiencia = new Experiencia(0,'','','','','','',0);
  esactual: boolean = false;

  constructor(private formBuilder:FormBuilder,
              private datosExperiencia:ExperienciaService,
              private rutaActiva:ActivatedRoute,
              private ruta:Router
            ){
              this.formularioExperiencia=this.formBuilder.group(
                {
                  empresa: ['',[Validators.required]],
                  puesto: ['',[Validators.required]],
                  descripcion: ['',[Validators.required]],
                  url_logo: ['',[Validators.required]],
                  fecha_desde: ['',[Validators.required,
                    Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                    ]],
                  fecha_hasta: ['',[Validators.required,
                    Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                    ]],
                    trabajoactual: [null,[]],
                }
              )
            }


            
  ngOnInit(): void {
    this.traerExperiencia();
  }

  get Empresa(){
    return this.formularioExperiencia.get('empresa');
  }
  
  get Puesto() {
    return this.formularioExperiencia.get('puesto');
  }

  get Descripcion() {
    return this.formularioExperiencia.get('descripcion');
  }

  get Url_logo() {
    return this.formularioExperiencia.get('url_logo');
  }

  get Fecha_desde(){
    return this.formularioExperiencia.get('fecha_desde');
  }
  
  get Fecha_hasta() {
    return this.formularioExperiencia.get('fecha_hasta');
  }

  traerExperiencia() {
    const id = this.rutaActiva.snapshot.params['id'];
      
      this.datosExperiencia.obtenerExperiencia(id).subscribe(
        data =>{
          this.experienciaEditar = data;
          }
      )
  }
  
  onUpdate(event: Event) {
    
    if (this.esactual)
      {
        this.experienciaEditar.fecha_hasta='Actualidad';
      }
    this.datosExperiencia.actualizarExperiencia(this.experienciaEditar).subscribe({
      next: data => {
        alert("Se actualizó la expriencia");
        this.ruta.navigate(['/portfolio']);
      }, 
      error: error =>{
         alert("Error al modificar la experiencia");
         this.ruta.navigate(['/portfolio']);
      }
  })
  
  }
}
