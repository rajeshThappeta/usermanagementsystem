import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ListofusersComponent } from './listofusers/listofusers.component';

const routes: Routes = [
  {path:"admin/admindashboard/:username",component:AdmindashboardComponent,children:[
    {path:"admin/adminprofile",component:AdminprofileComponent},
    {path:"admin/listofusers",component:ListofusersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
