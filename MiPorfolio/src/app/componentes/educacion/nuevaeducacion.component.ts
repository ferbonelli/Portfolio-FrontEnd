import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Lo necesito para Educacion
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

// Para relacionarlo con la persona
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {

 // Declaraciones
 formularioEducacion: FormGroup;
 personaArray: Persona[] = [];

  

  constructor (private formBuilder:FormBuilder,
               private altaEducacion:EducacionService,
               private datosPersona:PersonaService,
               private ruta:Router
              ) {
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

  ngOnInit(): void {  
    this.traerPersona();
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

  onCreate (event: Event) {

    this.formularioEducacion.markAllAsTouched();
    this.formularioEducacion.updateValueAndValidity();

    if( this.formularioEducacion.valid )
       {
        const nuevaEducacion= new Educacion(0,
                                            this.formularioEducacion.value.institucion,
                                              this.formularioEducacion.value.titulo,
                                              this.formularioEducacion.value.url_logoinst,
                                              this.formularioEducacion.value.fecha_inicio,
                                              this.formularioEducacion.value.fecha_final,
                                              this.personaArray[0].id_persona);
          
            
        this.altaEducacion.agregarEducacion(nuevaEducacion).subscribe({
          next: data => {
            alert("Se agregó un nuevo curso");
            this.ruta.navigate(['/portfolio']);
          }, 
          
          error: error => {
            alert("No se pudo agregar ek nuevo curso debido a un error");
            this.ruta.navigate(['/portfolio']);
          }
        })
       }
       else{
        alert('No se puede grabar formulario con campos vacios');
        this.ruta.navigate(['/portfolio']);
      }
    
  }

  traerPersona() :void{

    this.datosPersona.obtenerPersonas().subscribe(
      datap => {
        this.personaArray = datap;
                                
    })
  }
}
