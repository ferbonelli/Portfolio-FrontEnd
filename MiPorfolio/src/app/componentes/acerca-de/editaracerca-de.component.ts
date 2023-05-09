import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Lo necesito para los datos de la persona
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona.model';


@Component({
  selector: 'app-editaracerca-de',
  templateUrl: './editaracerca-de.component.html',
  styleUrls: ['./editaracerca-de.component.css']
})
export class EditaracercaDeComponent implements OnInit{

  // Declaraciones
  personaEditar: Persona = new Persona(0,'','','','','','','','','');
  formularioAcercade: FormGroup;
  

  constructor(private formBuilder:FormBuilder,
              private datosPersona:PersonaService,
              private rutaActiva:ActivatedRoute,
              private ruta:Router
             ){
              this.formularioAcercade=this.formBuilder.group(
                {
                  acercade: ['',[Validators.required]],
                }
              )
             }

ngOnInit(): void {
  this.traerPersona();
  
}

get Acercade(){
  return this.formularioAcercade.get('acercade');
}

traerPersona() {
      
  const id = this.rutaActiva.snapshot.params['id'];

  this.datosPersona.obtenerPersona(id).subscribe(
    data =>{
      this.personaEditar = data;
    }  
    
  )
}

onUpdate(event: Event) {
  
  this.datosPersona.actualizarPersona(this.personaEditar).subscribe({
    next: data => {
      alert("Se actualizó acerca de");
      this.ruta.navigate(['/portfolio']);
    },
    error: error =>{
       alert("Error al modificar acerca de");
       this.ruta.navigate(['/portfolio']);
    }
  })

}

}
