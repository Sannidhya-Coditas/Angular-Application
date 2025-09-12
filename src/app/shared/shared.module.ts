import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { CellEditorComponent } from './cell-editor/cell-editor.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DataTableComponent,
    CellEditorComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [DataTableComponent, HeaderComponent],
})
export class SharedModule {}
