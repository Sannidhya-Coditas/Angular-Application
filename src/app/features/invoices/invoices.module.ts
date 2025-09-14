import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices/invoices.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Route[]=[{path:'',component:InvoicesComponent}]
@NgModule({
  declarations: [InvoicesComponent],
  imports: [CommonModule,RouterModule.forChild(routes),SharedModule],
})
export class InvoicesModule {}
