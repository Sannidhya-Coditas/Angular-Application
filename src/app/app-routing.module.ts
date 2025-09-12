import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/shared/login/login.component';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./features/invoices/invoices.module').then(
        (m) => m.InvoicesModule,
      ),
  },
  {
    path: 'jobapplication',
    loadChildren: () =>
      import('./features/form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
