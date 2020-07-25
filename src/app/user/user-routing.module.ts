import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TestlazyComponent } from '../testlazy/testlazy/testlazy.component';
import { EdituserprfoileComponent } from './edituserprfoile/edituserprfoile.component';


//http:localhost:4200/user/userdashboard/<id>/<username>/editprofile
const routes: Routes = [{
  path:"user/userdashboard/:id/:username",component:UserdashboardComponent,children:[
    {
      path:"userprofile",component:UserprofileComponent
    },
    {
      path:"testlazy",component:TestlazyComponent
    },
    {
      path:"editprofile",component:EdituserprfoileComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
