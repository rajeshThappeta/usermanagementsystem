import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

const routes: Routes = [
  {path:"admin/admindashboard/:username",component:AdmindashboardComponent,children:[
    {path:"admin/adminprofile",component:AdminprofileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
