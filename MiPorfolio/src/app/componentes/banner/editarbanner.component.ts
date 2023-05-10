import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Lo necesito para los datos de la persona
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/model/persona.model';


@Component({
  selector: 'app-editarbanner',
  templateUrl: './editarbanner.component.html',
  styleUrls: ['./editarbanner.component.css']
})
export class EditarbannerComponent implements OnInit {

  // Declaraciones
  personaEditar: Persona = new Persona(0,'','','','','','','','','');
  formularioBanner: FormGroup;
 

  constructor(private formBuilder:FormBuilder,
              private datosPersona:PersonaService,
              private rutaActiva:ActivatedRoute,
              private ruta:Router
            ){
              this.formularioBanner=this.formBuilder.group(
                {
                  nombre: ['',[Validators.required]],
                  apellido: ['',[Validators.required]],
                  profesion: ['',[Validators.required]],
                  url_foto: ['',[Validators.required]],
                }
              )
            }

ngOnInit(): void {
  this.traerPersona();
}

get Nombre(){
  return this.formularioBanner.get('nombre');
}

get Apellido(){
  return this.formularioBanner.get('apellido');
}

get Profesion(){
  return this.formularioBanner.get('profesion');
}

get Url_foto(){
  return this.formularioBanner.get('url_foto');
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
    alert("Se actualizó el banner");
    this.ruta.navigate(['/portfolio']);
  },
  error: error =>{
     alert("Error al modificar el banner");
     this.ruta.navigate(['/portfolio']);
  }
})

}


}
