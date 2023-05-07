import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  nombre: string = '';
  porcentaje: number = 0;
  personaArray: Persona[] = [];
  
  constructor (private altaHabilidad:HabilidadService,
               private datosPersona:PersonaService,
               private ruta:Router
    ) { }

  ngOnInit(): void {
    this.traerPersona();
  }

  onCreate () {

    const nuevaHabilidad= new Habilidad(0,this.nombre,this.porcentaje, this.personaArray[0].id_persona);
    
    this.altaHabilidad.agregarHabilidad(nuevaHabilidad).subscribe(
      data => {
        alert("Se agregó una nueva habilidad");
        this.ruta.navigate(['/portfolio']);
      }, err => {
        alert("No se pudo agregar habilidad debido a un error");
        this.ruta.navigate(['/portfolio']);
      }
    )
  }

  traerPersona() :void{

    this.datosPersona.obtenerPersonas().subscribe(
      datap => {
        this.personaArray = datap;
                                
    })
  }

}
