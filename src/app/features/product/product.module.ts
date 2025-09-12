import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class ProductModule {}
