import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Lo necesito para los poryectos
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

// Para relacionarlo con la persona
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit  {

  // Declaraciones
  formularioProyecto: FormGroup;
  personaArray: Persona[] = [];

    constructor(private formBuilder:FormBuilder,
              private altaProyecto:ProyectoService,
              private datosPersona:PersonaService,
              private ruta:Router
             ){
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

  ngOnInit(): void {
    this.traerPersona();
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


  onCreate (event: Event) {

    const nuevoProyecto= new Proyecto(0,
                                      this.formularioProyecto.value.nombre,
                                          this.formularioProyecto.value.descripcion,
                                          this.formularioProyecto.value.url_proyecto,
                                          this.formularioProyecto.value.fecha_inicio,
                                          this.formularioProyecto.value.fecha_final,
                                          this.personaArray[0].id_persona);
      
          
    this.altaProyecto.agregarProyecto(nuevoProyecto).subscribe({
      next: data => {
        alert("Se agregó una nuevo proyecto");
        this.ruta.navigate(['/portfolio']);
      }, 
      
      error: error => {
        alert("No se pudo agregar el proyecto debido a un error");
        this.ruta.navigate(['/portfolio']);
      }
     })
    
  }

  traerPersona() :void{

    this.datosPersona.obtenerPersonas().subscribe(
      datap => {
        this.personaArray = datap;
                                
    })
  }
}
