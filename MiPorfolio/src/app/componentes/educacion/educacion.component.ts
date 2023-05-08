import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Lo necesito para sección Educación
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  // Declaraciones
  educacionArray: Educacion[] = [];
  educacionBorrar: Educacion = new Educacion(0,'','','','','',0);
  esta_logueado: boolean = false;
  faPen=faPen;
  faTrashCan=faTrashCan;
  

  constructor(private datosEducacion:EducacionService,
              private ruta:Router
             ) {}

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

    this.datosEducacion.borrarEducacion(id).subscribe({
      next: data => {
        alert("Se borró el curso correctamente")
        this.mostrarEducacion();
      }, 
      error: error => {
        alert("No se pudo borrar el curso");
      }
  })
  }
}

onOpenModal(id?: number) {

  if(id != undefined){
    this.datosEducacion.obtenerEducacion(id).subscribe({
      next: data =>{
        this.educacionBorrar = data;      
      },

      error: error=>{
        alert("No se pudo borrar el curso");
        this.ruta.navigate(['/portfolio']);
      }
    })
  }
  
 }

}
