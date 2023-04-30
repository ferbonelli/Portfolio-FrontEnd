import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { faPen } from '@fortawesome/free-solid-svg-icons';

// Importo servicios
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  // Declaraciones
  esta_logueado: boolean = false;
  faPen=faPen;
  // En este caso como es mi porfolio voy a usar solo el id de mi persona
  id: number=1;
  persona: Persona = new Persona(0,'','','','','','','','','');


  constructor(private datosPersona:PersonaService) {}

    ngOnInit(): void {
      this.mostraracerca();
      if (localStorage.getItem("estado_login"))
            {
              this.esta_logueado=true;
            }
            else
              {
              this.esta_logueado=false;
              }
    }

    mostraracerca(): void {

      this.datosPersona.obtenerPersona(this.id).subscribe(
        data => {
          this.persona=data;
        });
    }

}
