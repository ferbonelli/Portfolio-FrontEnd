import { Component, OnInit} from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Importo servicios
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  // Declaraciones
  experienciaArray: Experiencia[] = [];
  esta_logueado: boolean = false;
  faPen=faPen;
  faTrashCan=faTrashCan;
  

  constructor(private datosExperiencia:ExperienciaService) {}

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
  
      this.datosExperiencia.borrarExperiencia(id).subscribe(
        data => {
          alert("Se borró la experiencia correctamente")
          this.mostrarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
  
}
