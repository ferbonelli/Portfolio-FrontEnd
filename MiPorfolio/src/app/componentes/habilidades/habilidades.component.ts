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
  estadologin: string = 'no_logueado';
  logueado: boolean = false; 

  constructor(private datosPorfolio:PortfolioService,
              private datosHabilidad:HabilidadService
    ) {}

  ngOnInit(): void {
    this.mostrarHabilidades();
    const estado = localStorage.getItem("estado_login");
    
    if (estado) {
        this.estadologin = estado;
                    }
    
    if (this.estadologin=== 'logueado' )
    {
      this.logueado=true;
          }
            else {this.logueado=false};
    
   
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