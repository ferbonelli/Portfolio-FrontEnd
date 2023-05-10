import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Lo necesito para la sección experiencia
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

// Para relacionarlo con la persona
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-nuevaexperiencia',
  templateUrl: './nuevaexperiencia.component.html',
  styleUrls: ['./nuevaexperiencia.component.css']
})
export class NuevaexperienciaComponent implements OnInit{

// Declaraciones
formularioExperiencia: FormGroup;
personaArray: Persona[] = [];
esactual: boolean = false;


  constructor(private formBuilder:FormBuilder,
              private altaExperiencia:ExperienciaService,
              private datosPersona:PersonaService,
              private ruta:Router
             ) {
              this.formularioExperiencia=this.formBuilder.group(
                {
                  empresa: ['',[Validators.required]],
                  puesto: ['',[Validators.required]],
                  descripcion: ['',[Validators.required]],
                  url_logo: ['',[Validators.required]],
                  fecha_desde: ['',[Validators.required,
                    Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                    ]],
                  fecha_hasta: ['',[Validators.required,
                    Validators.pattern (/^(0?[1-9]|[12][0-9]|3[01])[\/-](0?[1-9]|1[012])[\/-]\d{4}$/)
                    ]],
                  trabajoactual: [null,[]],
                  }
              )
             }

  ngOnInit(): void {
    this.traerPersona();
  }

  get Empresa(){
    return this.formularioExperiencia.get('empresa');
  }
  
  get Puesto() {
    return this.formularioExperiencia.get('puesto');
  }

  get Descripcion() {
    return this.formularioExperiencia.get('descripcion');
  }

  get Url_logo() {
    return this.formularioExperiencia.get('url_logo');
  }

  get Fecha_desde(){
    return this.formularioExperiencia.get('fecha_desde');
  }
  
  get Fecha_hasta() {
    return this.formularioExperiencia.get('fecha_hasta');
  }
    
    onCreate (event: Event) {

      if (this.esactual)
      {
        this.formularioExperiencia.value.fecha_hasta='Actualidad';
      }
      
      const nuevaExperiencia= new Experiencia(0,
                                          this.formularioExperiencia.value.empresa,
                                          this.formularioExperiencia.value.puesto,
                                          this.formularioExperiencia.value.descripcion,
                                          this.formularioExperiencia.value.url_logo,
                                          this.formularioExperiencia.value.fecha_desde,
                                          this.formularioExperiencia.value.fecha_hasta,
                                          this.personaArray[0].id_persona);
        
      if (this.verificarNoVacio(this.formularioExperiencia.value.empresa,
                        this.formularioExperiencia.value.puesto,
                        this.formularioExperiencia.value.descripcion,
                        this.formularioExperiencia.value.url_logo,
                        this.formularioExperiencia.value.fecha_desde,
                        this.formularioExperiencia.value.fecha_hasta))
                        
            {
                this.altaExperiencia.agregarExperiencia(nuevaExperiencia).subscribe({
                  next: data => {
                    alert("Se agregó una nueva experiencia");
                    this.ruta.navigate(['/portfolio']);
                  }, 
                  
                  error: error => {
                    alert("No se pudo agregar la experiencia debido a un error");
                    this.ruta.navigate(['/portfolio']);
                  }
              });
            }
            else 
               {
                alert('No se puede grabar formulario con campos vacios');
                this.ruta.navigate(['/portfolio']);
               };
       
    }

  

  traerPersona() :void{

    this.datosPersona.obtenerPersonas().subscribe(
      datap => {
        this.personaArray = datap;
                                
    })
  }

  verificarNoVacio(empresa: string, puesto: string, descripcion: string,
                 url_logo: string, fecha_desde: string, fecha_hasta:string) : boolean
      {
      
       if (empresa != '' && puesto != '' && descripcion != '' &&
          url_logo != '' && fecha_desde!= '' && fecha_hasta != '')

            {return true;}
          
           else {return false;}
      }
    

}
