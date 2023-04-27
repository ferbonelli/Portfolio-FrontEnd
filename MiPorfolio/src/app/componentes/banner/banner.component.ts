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

  // En este caso como es mi porfolio voy a usar solo el id de mi persona
  id: number=1;
  persona: Persona = new Persona(0,'','','','','','','','','');

  constructor(private datosPersona:PersonaService) {}

  ngOnInit(): void {
    this.datosPersona.obtenerPersona(this.id).subscribe(
      data => {
        this.persona=data;
                
    });
  }

}
