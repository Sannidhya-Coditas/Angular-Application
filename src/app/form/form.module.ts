import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationComponent } from './job-application/job-application.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MultSelectCheckboxComponent } from './mult-select-checkbox/mult-select-checkbox.component';

const routes: Routes = [{ path: '', component: JobApplicationComponent }];

@NgModule({
  declarations: [
    JobApplicationComponent,
    MultiSelectComponent,
    MultSelectCheckboxComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class FormModule {}
