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

  formularioLogin: FormGroup;
  // Como es mi ortfolio siempre uso el id 1
  id: number=2;
  datosUsuario: Usuario= new Usuario(0,'','',1);
  
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
    this.datos.obtenerUsuario(this.id).subscribe(
      datau=>{
        this.datosUsuario=datau;
            
    });
  }
  

get Username(){
  return this.formularioLogin.get('username');
}

get Password() {
  return this.formularioLogin.get('password');
}
 
onLogin(event: Event){
  if (this.formularioLogin.value.password===this.datosUsuario.password && 
    
    this.formularioLogin.value.username===this.datosUsuario.username)
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
