import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiportfolioComponent } from './componentes/miportfolio/miportfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevahabilidadComponent } from './componentes/habilidades/nuevahabilidad.component';
import { EditarhabilidadComponent } from './componentes/habilidades/editarhabilidad.component';
import { NuevoproyectoComponent } from './componentes/proyectos/nuevoproyecto.component';
import { EditarproyectoComponent } from './componentes/proyectos/editarproyecto.component';
import { NuevaexperienciaComponent } from './componentes/experiencia/nuevaexperiencia.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia.component';
import { NuevaeducacionComponent } from './componentes/educacion/nuevaeducacion.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion.component';
import { EditaracercaDeComponent } from './componentes/acerca-de/editaracerca-de.component';
import { EditarbannerComponent } from './componentes/banner/editarbanner.component';



const routes: Routes = [

{path:'portfolio', component:MiportfolioComponent},
{path:'login', component:LoginComponent},
{path:'nuevahabilidad', component:NuevahabilidadComponent},
{path:'editarhabilidad/:id', component:EditarhabilidadComponent},
{path:'nuevoproyecto', component:NuevoproyectoComponent},
{path:'editarproyecto/:id', component:EditarproyectoComponent},
{path:'nuevaexperiencia', component:NuevaexperienciaComponent},
{path:'editarexperiencia/:id', component:EditarexperienciaComponent},
{path:'nuevaeducacion', component:NuevaeducacionComponent},
{path:'editareducacion/:id', component:EditareducacionComponent},
{path:'editaracercade/:id', component:EditaracercaDeComponent},
{path:'editarbanner/:id', component:EditarbannerComponent},

{path:'', component:MiportfolioComponent,pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
