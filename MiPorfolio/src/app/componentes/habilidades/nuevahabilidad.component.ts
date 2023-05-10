import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Lo necesario para habilidades
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

// Para relacionarlo con la persona
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-nuevahabilidad',
  templateUrl: './nuevahabilidad.component.html',
  styleUrls: ['./nuevahabilidad.component.css']
})
export class NuevahabilidadComponent implements OnInit {

  // Declaraciones
  formularioHabilidad: FormGroup;
  personaArray: Persona[] = [];
  
  constructor (private formBuilder:FormBuilder,
              private altaHabilidad:HabilidadService,
               private datosPersona:PersonaService,
               private ruta:Router
    ) { 
      
      this.formularioHabilidad=this.formBuilder.group(
        {
          nombre: ['',[Validators.required]],
          porcentaje: ['',[Validators.required,Validators.max(100),Validators.min(1)]],
        }
      )

    }

  ngOnInit(): void {
    this.traerPersona();
  }

  get Nombre(){
    return this.formularioHabilidad.get('nombre');
  }
  
  get Porcentaje() {
    return this.formularioHabilidad.get('porcentaje');
  }

  onCreate (event: Event) {

    this.formularioHabilidad.markAllAsTouched();
    this.formularioHabilidad.updateValueAndValidity();

    if( this.formularioHabilidad.valid )
       {
          const nuevaHabilidad= new Habilidad(0,this.formularioHabilidad.value.nombre,
          this.formularioHabilidad.value.porcentaje,
          this.personaArray[0].id_persona);

            this.altaHabilidad.agregarHabilidad(nuevaHabilidad).subscribe({
            next: data => {
            alert("Se agregó una nueva habilidad");
            this.ruta.navigate(['/portfolio']);
            }, 

            error: error => {
            alert("No se pudo agregar habilidad debido a un error");
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
