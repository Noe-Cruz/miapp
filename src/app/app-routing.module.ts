import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingComponent } from './pages/sing/sing.component';
import { TareaspComponent } from './pages/tareasp/tareasp.component';
import { authGuard } from './auth.guard';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SingComponent},
  { path: 'proyectos', component: ProyectsComponent},
  { path: 'about', component: DashbordComponent, canActivate: [authGuard]},
  { path: 'tareas', component: TareaspComponent, canActivate: [authGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
