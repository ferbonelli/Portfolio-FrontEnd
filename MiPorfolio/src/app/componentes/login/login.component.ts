import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

// Importo servicios
import { UsuarioService } from 'src/app/servicios/usuario.service';

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
              private datos:UsuarioService
    ) { 

    this.formularioLogin=this.formBuilder.group(
      {
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
      }
    )
  }

  ngOnInit(): void{
    this.datos.obtenerUsuarios().subscribe(
      datau=>{
        this.usuarioArray=datau;
            
    });
  }
  

get Username(){
  return this.formularioLogin.get('username');
}

get Password() {
  return this.formularioLogin.get('password');
}
 
onLogin(event: Event){
  if (this.formularioLogin.value.password===this.usuarioArray[0].password && 
    
    this.formularioLogin.value.username===this.usuarioArray[0].username)
  {    
    localStorage.setItem('estado_login','logueado');
    alert('Te logueaste correctamente');
    this.ruta.navigate(['/portfolio']);
  }
  else {
    alert('Ingreso incorrecto');
    this.ruta.navigate(['/portfolio']);
     }
}

}
