import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad.model';

// Importo servicios
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  habilidadesArray: Habilidad[] = [];
  
  esta_logueado: boolean = false;

  constructor(private datosPorfolio:PortfolioService,
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
    this.datosHabilidad.obtenerHabilidad().subscribe(
      datah => {
        this.habilidadesArray = datah;
        console.log("Esta es la habilidad recuperada:");
        console.log(this.habilidadesArray)
                        
    });
  }

}