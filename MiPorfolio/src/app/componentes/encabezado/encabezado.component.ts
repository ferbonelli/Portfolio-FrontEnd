import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{

  constructor(private ruta:Router){}

  ngOnInit(): void {}

  onClick() {
    this.ruta.navigate(['/login'])
  }


}
