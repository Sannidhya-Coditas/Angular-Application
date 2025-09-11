import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/product/product/product.component';
const routes: Routes = [
  { path: '', component: CartComponent }, // '' because 'home' is already in parent route
];
@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartModule {}
