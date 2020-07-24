import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestlazyRoutingModule } from './testlazy-routing.module';
import { TestlazyComponent } from './testlazy/testlazy.component';


@NgModule({
  declarations: [TestlazyComponent],
  imports: [
    CommonModule,
    TestlazyRoutingModule
  ]
})
export class TestlazyModule { }
