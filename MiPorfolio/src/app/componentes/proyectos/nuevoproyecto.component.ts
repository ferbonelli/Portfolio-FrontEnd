import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit  {

  nombre: string = '';
  descripcion: string ='';
  url_proyecto: string = '';
  fecha_inicio: string = '';
  fecha_final: string = '';
  id_persona: number = 1;

  constructor(private altaProyecto:ProyectoService,
    private ruta:Router
    ){}

  ngOnInit(): void {
    
  }

  onCreate () {

    const nuevoProyecto= new Proyecto(0,this.nombre,this.descripcion,this.url_proyecto,
                                       this.fecha_inicio,this.fecha_final,this.id_persona);
      
    console.log(nuevoProyecto);
    this.altaProyecto.agregarProyecto(nuevoProyecto).subscribe(
      data => {
        alert("Se agregó una nuevo proyecto");
        this.ruta.navigate(['/portfolio']);
      }, err => {
        alert("No se pudo agregar el proyecto debido a un error");
        this.ruta.navigate(['/portfolio']);
      }
    )
    
  }

}
