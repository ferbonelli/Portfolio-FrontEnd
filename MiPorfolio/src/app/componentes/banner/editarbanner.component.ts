import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';

// Importo servicios
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-editarbanner',
  templateUrl: './editarbanner.component.html',
  styleUrls: ['./editarbanner.component.css']
})
export class EditarbannerComponent implements OnInit {

  // Declaraciones
  personaEditar: Persona = new Persona(0,'','','','','','','','','');
 

  constructor(
    private datosPersona:PersonaService,
    private rutaActiva:ActivatedRoute,
    private ruta:Router
  ){}

ngOnInit(): void {
  this.traerPersona();
}

traerPersona() {
  const id = this.rutaActiva.snapshot.params['id'];

  this.datosPersona.obtenerPersona(id).subscribe(
    data =>{
      this.personaEditar = data;
            
    }, err =>{
      alert("Error al modificar el banner");
      this.ruta.navigate(['/portfolio']);
    }
  )
}

onUpdate() {

this.datosPersona.actualizarPersona(this.personaEditar).subscribe(
  data => {
    alert("Se actualizó el banner");
    this.ruta.navigate(['/portfolio']);
  }, err =>{
     alert("Error al modificar el banner");
     this.ruta.navigate(['/portfolio']);
  }
)

}


}
