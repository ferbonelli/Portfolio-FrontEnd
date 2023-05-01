import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';

// Importo servicios
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-editarbanner',
  templateUrl: './editarbanner.component.html',
  styleUrls: ['./editarbanner.component.css']
})
export class EditarbannerComponent implements OnInit {

  // como es mi porfolio uso solo el id=1
  personaEditar: Persona = new Persona(0,'','','','','','','','','');
  id: number = 1;

  constructor(
    private datosPersona:PersonaService,
    private ruta:Router
  ){}

ngOnInit(): void {
  this.traerPersona();
}

traerPersona() {
      
  this.datosPersona.obtenerPersona(this.id).subscribe(
    data =>{
      this.personaEditar = data;
            
    }
  )
}

onUpdate() {

this.datosPersona.actualizarPersona(this.personaEditar).subscribe(
  data => {
    alert("Se actualizó el banner");
    this.ruta.navigate(['/portfolio']);
  }, err =>{
     alert("Error al modificar acerca de");
     this.ruta.navigate(['/portfolio']);
  }
)

}


}
