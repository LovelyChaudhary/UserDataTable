import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeResolver } from './home/home.resolver';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path :'login',component: LoginComponent},
  {path :'register',component: RegisterComponent},
  {path :'home',component: HomeComponent,  canActivate: [AuthGuardService] ,
  resolve:{resolveData :HomeResolver}},
  {path :'**',redirectTo:'register',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[HomeResolver]
})
export class AppRoutingModule { }
