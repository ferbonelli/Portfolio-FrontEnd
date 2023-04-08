import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  clave: string = '';


  logindatos:any;
  
  constructor(private datosLogin: LoginService) { }

  ngOnInit(): void {
    this.datosLogin.obtenerCredenciales().subscribe(
      data => {
        this.logindatos = data;
        console.log(this.logindatos);
        console.log(this.logindatos[0].username);
                
    });
  }

  onClick() {
    if (this.clave===this.logindatos[0].password && this.usuario===this.logindatos[0].username)
    {
      alert('Ingreso correcto');
      this.datosLogin.cambiarVerdadero().subscribe(
        data1 => {
          this.logindatos = data1;
          console.log(this.logindatos[0].estadologin);
                  
      });

    }
    else {
        alert('Ingreso incorrecto');
        this.datosLogin.cambiarFalso().subscribe(
          data2 => {
            this.logindatos = data2;
            console.log(this.logindatos[0].estadologin);
                    
        });
    }
  }
}
