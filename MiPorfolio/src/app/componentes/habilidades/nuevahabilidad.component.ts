import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-nuevahabilidad',
  templateUrl: './nuevahabilidad.component.html',
  styleUrls: ['./nuevahabilidad.component.css']
})
export class NuevahabilidadComponent implements OnInit {

  nombre: string = '';
  porcentaje: number = 0;
  id_persona: number = 1;

  constructor (private altaHabilidad:HabilidadService,
               private ruta:Router
    ) { }

  ngOnInit(): void {}

  onCreate () {

    const nuevaHabilidad= new Habilidad(0,this.nombre,this.porcentaje, this.id_persona);
    console.log(nuevaHabilidad);
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

}
