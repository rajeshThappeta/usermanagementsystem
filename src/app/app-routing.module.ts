import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"testlazy",loadChildren:()=>import ('../app/testlazy/testlazy.module').then(m=>m.TestlazyModule)},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
