import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { 

    this.formularioLogin=this.formBuilder.group(
      {
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
      }
    )
  }

  ngOnInit(): void {
    
  }

 
}
