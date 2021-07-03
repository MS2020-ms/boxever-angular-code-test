import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareCarsComponent } from '../compare-cars/compare-cars.component';

const routes: Routes = [{ path: '', component: CompareCarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareCarsRoutingModule { }
