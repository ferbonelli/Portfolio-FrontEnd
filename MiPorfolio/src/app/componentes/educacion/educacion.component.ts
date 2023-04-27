import { Component,OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Importo servicios
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  // Declaraciones
  educacionArray: Educacion[] = [];
  esta_logueado: boolean = false;
  faPen=faPen;
  faTrashCan=faTrashCan;
  

  constructor(private datosEducacion:EducacionService) {}

  ngOnInit(): void {
    this.mostrarEducacion();
    if (localStorage.getItem("estado_login"))
        {
          this.esta_logueado=true;
        }
        else
          {
           this.esta_logueado=false;
          }
}

mostrarEducacion(): void {
  this.datosEducacion.obtenerEducaciones().subscribe(
    datae => {
      this.educacionArray = datae;
                              
  });
}

onDelete(id?: number){
    
  if(id != undefined){

    this.datosEducacion.borrarEducacion(id).subscribe(
      data => {
        alert("Se borró la educacion correctamente")
        this.mostrarEducacion();
      }, err => {
        alert("No se pudo borrar la educacion");
      }
    )
  }
}


}
