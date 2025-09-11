import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feat1Component } from '../feat1/feat1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Feat1Component }, // '' because 'home' is already in parent route
];
@NgModule({
  declarations: [Feat1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feat1Module {}
