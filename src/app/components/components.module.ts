import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DropdownComponent, Error404Component],
  exports: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
