import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {

  habilidadesList:any;
  
  constructor(private datosPorfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>
      {this.habilidadesList = data.habilidades;})
}

}
