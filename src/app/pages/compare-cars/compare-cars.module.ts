import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareCarsRoutingModule } from './compare-cars-routing.module';
import { CompareCarsComponent } from './compare-cars.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [CompareCarsComponent],
  imports: [
    CommonModule,
    CompareCarsRoutingModule,
    ComponentsModule
  ]
})
export class CompareCarsModule { }
