import { Component, Input, SimpleChanges } from '@angular/core';
import { ColumnDefinitionV1 } from '../models/model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent<T extends { id: number }> {
  editMode = false; // toggles table edit mode
  editBuffer: { [id: number]: T} = {};


  toggleEditMode() {
    this.editMode = !this.editMode;
     if (this.editMode) {
    // Deep clone current page rows into buffer
    this.editBuffer = {};
    this.alldata.forEach(row => {
      this.editBuffer[row.id] = { ...row }; // shallow clone is enough if no nested obj
    });
    console.log(this.editBuffer)
  } else {
    this.editBuffer = {};
  }
  }

  @Input() isFrontEndPaginated: boolean = true;

  @Input() alldata: T[] = []; // any type, not just BasicUserDetails
  paginatedData: T[] = [];

  @Input() usersOnParticularPage = 10;
  currentPage: number = 1;
  totalPages: number = 0;

  @Input() columns: ColumnDefinitionV1<T>[] = []; // dynamic columns

  ShelfOpen = false;
  selectedId: number | null = null;

  ngOnInit(): void {
    this.totalPages = this.calculateTotalPages(this.alldata.length);
    this.updateFrontendPage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['alldata']) {
      console.log('alldata changed')
      this.totalPages = this.calculateTotalPages(this.alldata.length);
      this.currentPage = 1;
      this.updateFrontendPage();
    }
  }

  private updateFrontendPage() {
    if (this.totalPages === 0) {
      this.paginatedData = [];
      return;
    }
    const start = (this.currentPage - 1) * this.usersOnParticularPage;
    this.paginatedData = this.alldata.slice(
      start,
      start + this.usersOnParticularPage,
    );
  }

  private calculateTotalPages(total: number): number {
    return total > 0 ? Math.ceil(total / this.usersOnParticularPage) : 0;
  }

  changePage(page: number) {
    this.currentPage = page;
    console.log(this.currentPage)
    this.updateFrontendPage();
    console.log(this.editBuffer)
  }

  onRowClick(id: number) {
    this.ShelfOpen = true;
    this.selectedId = id;
  }

  closeShelf() {
    this.ShelfOpen = false;
    this.selectedId = null;
  }
  cancelEdit() {
    this.editMode = false;
  //   console.log(this.paginatedData)
  //   //this.paginatedData.forEach(row=>)
  //  let data= this.paginatedData.map((row)=>({row:row.id}))
  //  console.log(data)
  //  console.log(this.paginatedData)
   this.editBuffer = {};
  }

  saveEdit() {
    this.alldata = this.alldata.map(item =>
    this.editBuffer[item.id] ? { ...this.editBuffer[item.id] } : item
  );
  this.updateFrontendPage();
  this.editMode = false;
  this.editBuffer = {};
  }
  onvaluechange<K extends keyof T>(event:any,rowid:any,fieldname:K){
    console.log(rowid)
    console.log(fieldname)
    console.log(event)
    console.log(this.editBuffer[rowid][fieldname])
    this.editBuffer[rowid][fieldname]=event
    console.log(this.editBuffer[rowid][fieldname])
  }
}
