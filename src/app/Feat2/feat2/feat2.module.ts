import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feat2Component } from '../feat2/feat2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Feat2Component }, // '' because 'home' is already in parent route
];
@NgModule({
  declarations: [Feat2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feat2Module {}
