import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';

// Importo servicios
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit{
  
  experienciaEditar: Experiencia = new Experiencia(0,'','','','','','',1);

  constructor(
              private datosExperiencia:ExperienciaService,
              private rutaActiva:ActivatedRoute,
              private ruta:Router
  ){}

  ngOnInit(): void {
    this.traerExperiencia();
  }

  traerExperiencia() {
    const id = this.rutaActiva.snapshot.params['id'];
      
      this.datosExperiencia.obtenerExperiencia(id).subscribe(
        data =>{
          this.experienciaEditar = data;
          
          
        }, err =>{
          alert("Error al modificar la experiencia");
          this.ruta.navigate(['/portfolio']);
        }
      )
  }
  
  onUpdate() {
    
    this.datosExperiencia.actualizarExperiencia(this.experienciaEditar).subscribe(
      data => {
        alert("Se actualizó la expriencia");
        this.ruta.navigate(['/portfolio']);
      }, err =>{
         alert("Error al modificar la experiencia");
         this.ruta.navigate(['/portfolio']);
      }
    )
  
  }
}
