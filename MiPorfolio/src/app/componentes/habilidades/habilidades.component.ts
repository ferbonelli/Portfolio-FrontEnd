import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Importo servicios
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  // Declaraciones
  habilidadesArray: Habilidad[] = [];
  esta_logueado: boolean = false;
  faPen=faPen;
  faTrashCan=faTrashCan;

  constructor(
              private datosHabilidad:HabilidadService
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
        console.log("Esta es la habilidad recuperada:");
        console.log(this.habilidadesArray)
                        
    });
  }

  onDelete(id?: number){
    console.log(id);

    if(id != undefined){

      this.datosHabilidad.borrarHabilidad(id).subscribe(
        data => {
          alert("Se borró la habilidad correctamente")
          this.mostrarHabilidades();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }

          
  }

}