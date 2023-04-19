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

  habilidadesList:any;
  habilidadesArray: Habilidad[] = []; 

  constructor(private datosPorfolio:PortfolioService,
              private datosHabilidad:HabilidadService
    ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>
      {this.habilidadesList = data.habilidades;});

      // Recupero desde la api
      this.datosHabilidad.obtenerHabilidad().subscribe(
        datah => {
          this.habilidadesArray = datah;
          console.log("Esta es la habilidad recuperada:");
          console.log(this.habilidadesArray)
                          
      });

}

}
