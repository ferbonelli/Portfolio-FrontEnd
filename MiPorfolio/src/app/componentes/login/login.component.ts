import { Component } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
}
