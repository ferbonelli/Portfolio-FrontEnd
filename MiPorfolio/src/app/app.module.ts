import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
