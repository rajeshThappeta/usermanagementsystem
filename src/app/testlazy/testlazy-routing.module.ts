import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestlazyComponent } from './testlazy/testlazy.component';

const routes: Routes = [
  {path:'',component:TestlazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestlazyRoutingModule { }
