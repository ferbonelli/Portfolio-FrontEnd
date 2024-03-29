import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { MiportfolioComponent } from './componentes/miportfolio/miportfolio.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NuevahabilidadComponent } from './componentes/habilidades/nuevahabilidad.component';
import { EditarhabilidadComponent } from './componentes/habilidades/editarhabilidad.component';
import { EditarproyectoComponent } from './componentes/proyectos/editarproyecto.component';
import { NuevoproyectoComponent } from './componentes/proyectos/nuevoproyecto.component';
import { NuevaexperienciaComponent } from './componentes/experiencia/nuevaexperiencia.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion.component';
import { NuevaeducacionComponent } from './componentes/educacion/nuevaeducacion.component';
import { EditaracercaDeComponent } from './componentes/acerca-de/editaracerca-de.component';
import { EditarbannerComponent } from './componentes/banner/editarbanner.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerComponent,
    LoginComponent,
    MiportfolioComponent,
    HabilidadesComponent,
    NuevahabilidadComponent,
    EditarhabilidadComponent,
    EditarproyectoComponent,
    NuevoproyectoComponent,
    NuevaexperienciaComponent,
    EditarexperienciaComponent,
    EditareducacionComponent,
    NuevaeducacionComponent,
    EditaracercaDeComponent,
    EditarbannerComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
