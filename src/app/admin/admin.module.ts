import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { SearchPipe } from '../search.pipe';


@NgModule({
  declarations: [AdmindashboardComponent, AdminprofileComponent, ListofusersComponent,SearchPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
