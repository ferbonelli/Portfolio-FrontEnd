import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

// Importo servicios
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Declaraciones
  formularioLogin: FormGroup;
  usuarioArray: Usuario[] = [];
  
    
  constructor(private formBuilder:FormBuilder,
              private ruta:Router,
              private login:LoginService,
    ) { 

    this.formularioLogin=this.formBuilder.group(
      {
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
      }
    )
  }

  ngOnInit(): void{}
  
    
  

get Username(){
  return this.formularioLogin.get('username');
}

get Password() {
  return this.formularioLogin.get('password');
}
 
onLogin(event: Event){
  
  const usuarioAutorizar= new Usuario(0,this.formularioLogin.value.username,this.formularioLogin.value.password, 0);
  
  this.login.enviarCredenciales(usuarioAutorizar).subscribe({

          next: data=>{
            localStorage.setItem('estado_login','logueado');
            alert('Te logueaste correctamente');
            this.ruta.navigate(['/portfolio']);
          },
          
          error: error =>{
            alert("Error en la autenticación");
            this.ruta.navigate(['/portfolio']);
          } 
          
        })
        
 
}



}
