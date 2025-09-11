import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'feat1',
    loadChildren: () =>
      import('./Feat1/feat1/feat1.module').then((m) => m.Feat1Module),
  },
  {
    path: 'feat2',
    loadChildren: () =>
      import('./Feat2/feat2/feat2.module').then((m) => m.Feat2Module),
  },
  {
    path: 'jobapplication',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
