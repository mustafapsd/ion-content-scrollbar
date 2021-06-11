import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonScrollbarDirective } from './ion-scrollbar.directive';



@NgModule({
  declarations: [
    IonScrollbarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IonScrollbarDirective
  ]
})
export class IonContentScrollbarModule { }
