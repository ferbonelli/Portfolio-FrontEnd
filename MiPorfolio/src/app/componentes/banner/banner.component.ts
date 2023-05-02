import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Importo servicios
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  
   // Declaraciones
   esta_logueado: boolean = false;
   personaArray: Persona[] = [];
  
  
  constructor(private datosPersona:PersonaService) {}

  ngOnInit(): void {
    this.mostrarPersona();
    if (localStorage.getItem("estado_login"))
            {
              this.esta_logueado=true;
            }
            else
              {
              this.esta_logueado=false;
              }
  }

  mostrarPersona():void {
    this.datosPersona.obtenerPersonas().subscribe(
      data => {
        this.personaArray=data;
                
    });
  }
  
  
}
