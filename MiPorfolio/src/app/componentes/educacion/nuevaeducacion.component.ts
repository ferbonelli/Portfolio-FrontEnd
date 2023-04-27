import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {

  institucion: string= '';
  titulo: string='';
  fecha_inicio: string='';
  fecha_final: string='';
  url_logoinst: string='';
  id_persona: number= 1;

  constructor (private altaEducacion:EducacionService,
    private ruta:Router

  ) {}

  ngOnInit(): void {  
  }
  onCreate () {

    const nuevaEducacion= new Educacion(0,this.institucion, this.titulo, 
         this.fecha_inicio, this.fecha_final, this.url_logoinst, this.id_persona);
      
    console.log(nuevaEducacion);
    this.altaEducacion.agregarEducacion(nuevaEducacion).subscribe(
      data => {
        alert("Se agregó una nueva educacion");
        this.ruta.navigate(['/portfolio']);
      }, err => {
        alert("No se pudo agregar la educacion debido a un error");
        this.ruta.navigate(['/portfolio']);
      }
    )
    
  
}

}
