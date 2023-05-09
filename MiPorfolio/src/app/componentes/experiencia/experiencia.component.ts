import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Lo necesito para la sección Experiencia
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia.model';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  // Declaraciones
  experienciaArray: Experiencia[] = [];
  experienciaBorrar: Experiencia = new Experiencia(0,'','','','','','',0);
  esta_logueado: boolean = false;
  faPen=faPen;
  faTrashCan=faTrashCan;
  

  constructor(private datosExperiencia:ExperienciaService,
              private ruta:Router
              ) {}

  ngOnInit(): void {
    
    this.mostrarExperiencia();
    if (localStorage.getItem("estado_login"))
        {
          this.esta_logueado=true;
        }
        else
          {
           this.esta_logueado=false;
          }
  }

  mostrarExperiencia(): void {
    this.datosExperiencia.obtenerExperiencias().subscribe(
      datae => {
        this.experienciaArray = datae;
                                
    });
  }
  
  onDelete(id?: number){
      
    if(id != undefined){
  
      this.datosExperiencia.borrarExperiencia(id).subscribe({
        next: data => {
          alert("Se borró la experiencia correctamente")
          this.mostrarExperiencia();
        }, 
        
        error: error => {
          alert("No se pudo borrar la experiencia");
        }
       })
    }
  }

  onOpenModal(id?: number) {

    if(id != undefined){
      this.datosExperiencia.obtenerExperiencia(id).subscribe({
        next: data =>{
          this.experienciaBorrar = data;      
        },
  
        error: error=>{
          alert("No se pudo borrar la experiencia");
          this.ruta.navigate(['/portfolio']);
        }
      })
    }
    
   }
  
}
