import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Lo necesito para habilidad
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from 'src/app/model/habilidad.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  // Declaraciones
  habilidadesArray: Habilidad[] = [];
  habilidadBorrar: Habilidad = new Habilidad(0,'',0,0);
  esta_logueado: boolean = false;
  faPen=faPen;
  faTrashCan=faTrashCan;

  constructor(
              private datosHabilidad:HabilidadService,
              private ruta:Router
    ) {}

  ngOnInit(): void {
    this.mostrarHabilidades();
    if (localStorage.getItem("estado_login"))
        {
          this.esta_logueado=true;
        }
        else
          {
           this.esta_logueado=false;
          }
   
   
  }

  mostrarHabilidades(): void {
    this.datosHabilidad.obtenerHabilidades().subscribe(
      datah => {
        this.habilidadesArray = datah;
                                
    });
  }

  onDelete(id?: number){
    
    if(id != undefined){

      this.datosHabilidad.borrarHabilidad(id).subscribe({
        
        next: data => {
          alert("Se borró la habilidad correctamente")
          this.mostrarHabilidades();
        },
        
        error: error => {
          alert("No se pudo borrar la habilidad");
          this.ruta.navigate(['/portfolio']);
        }
    })
    }
  }

  onOpenModal(id?: number) {

    if(id != undefined){
      this.datosHabilidad.obtenerHabilidad(id).subscribe({
        next: data =>{
          this.habilidadBorrar = data;      
        },

        error: error=>{
          alert("No se pudo borrar la habilidad");
          this.ruta.navigate(['/portfolio']);
        }
      })
    }
    
   }

}