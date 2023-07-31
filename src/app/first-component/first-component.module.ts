import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FirstComponentComponent
  ],
  exports: [
    FirstComponentComponent
  ]
})
export class FirstComponentModule { }