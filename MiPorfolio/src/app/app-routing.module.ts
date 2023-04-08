import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiportfolioComponent } from './componentes/miportfolio/miportfolio.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
{path:'portfolio', component:MiportfolioComponent},
{path:'login', component:LoginComponent},
{path:'', component:MiportfolioComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
