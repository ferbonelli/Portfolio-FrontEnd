import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nuevaexperiencia',
  templateUrl: './nuevaexperiencia.component.html',
  styleUrls: ['./nuevaexperiencia.component.css']
})
export class NuevaexperienciaComponent implements OnInit{

  empresa: string='';
  puesto: string='';
  descripcion: string='';
  url_logo: string='';
  fecha_desde: string='';
  fecha_hasta: string='';
  id_persona: number= 1;

  constructor(private altaExperiencia:ExperienciaService,
    private ruta:Router
     ) {}

  ngOnInit(): void {}
    
    onCreate () {

      const nuevaExperiencia= new Experiencia(0,this.empresa, this.puesto, this.descripcion,
           this.fecha_desde, this.fecha_hasta, this.url_logo, this.id_persona);
        
      console.log(nuevaExperiencia);
      this.altaExperiencia.agregarExperiencia(nuevaExperiencia).subscribe(
        data => {
          alert("Se agregó una nueva experiencia");
          this.ruta.navigate(['/portfolio']);
        }, err => {
          alert("No se pudo agregar la experiencia debido a un error");
          this.ruta.navigate(['/portfolio']);
        }
      )
      
    
  }

}
