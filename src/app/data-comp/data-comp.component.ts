import { Component, Input, SimpleChanges } from '@angular/core';
import { UserService } from '../services/UserService';
import {
  AllUsersListResponse,
  ColumnDefinition,
  BasicUserDetails,
  UserDetails,
  PaginatedUserResponse,
} from '../constants/types';

@Component({
  selector: 'app-data-comp',
  templateUrl: './data-comp.component.html',
  styleUrls: ['./data-comp.component.css'],
})
export class DataCompComponent {
  @Input() isFrontEndPaginated: boolean = true;
  alldata: BasicUserDetails[] = [];
  paginatedData: BasicUserDetails[] = [];
  usersOnParticularPage = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  //#region columnames
  columns: ColumnDefinition[] = [
    { displayname: 'ID', fieldname: 'id' },
    { displayname: 'Name', fieldname: 'name' },
    { displayname: 'Address', fieldname: 'address' },
    { displayname: 'Date of Birth', fieldname: 'dob' },
  ];
  //#endregion
  ShelfOpen = false;
  selectedUserId: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // if (this.isFrontEndPaginated) {
    //   this.userService.getUsers().subscribe({
    //     next: (res: any) => {
    //       this.alldata = res.data;
    //       this.totalPages =
    //         res.totalUsers > 0
    //           ? Math.ceil(res.totalUsers / this.usersOnParticularPage)
    //           : 0;
    //       if (this.totalPages === 0) {
    //         this.paginatedData = [];
    //       } else if (this.currentPage === 1) {
    //         const start = (this.currentPage - 1) * this.usersOnParticularPage;
    //         this.paginatedData = this.alldata.slice(
    //           start,
    //           start + this.usersOnParticularPage,
    //         );
    //       }
    //     },
    //     error: (err) => {
    //       console.error('Error fetching users:', err);
    //     },
    //   });
    // } else {
    //   this.userService.getSpecificUsers(1, 10).subscribe((data: any) => {
    //     this.paginatedData = data.data;
    //     this.totalPages = Math.ceil(
    //       data.totalUsers / this.usersOnParticularPage,
    //     );
    //   });
    // }
    this.loadData();
  }
  ngOnChanges(changes: SimpleChanges) {
    // if (changes['isFrontEndPaginated']) {
    //   console.log(
    //     'was:',
    //     changes['isFrontEndPaginated'].previousValue,
    //     'now:',
    //     changes['isFrontEndPaginated'].currentValue,
    //   );
    //   if (changes['isFrontEndPaginated'].currentValue === false) {
    //     console.log('false');
    //     this.userService.getSpecificUsers(1, 10).subscribe((data: any) => {
    //       this.paginatedData = data.data;
    //       this.totalPages = Math.ceil(
    //         data.totalUsers / this.usersOnParticularPage,
    //       );
    //     });
    //   }
    // }
    if (
      changes['isFrontEndPaginated'] &&
      !changes['isFrontEndPaginated'].firstChange
    ) {
      this.currentPage = 1; // reset page when switching mode
      this.loadData();
    }
  }
  private loadData() {
    if (this.isFrontEndPaginated) {
      this.loadFrontendData();
    } else {
      this.loadBackendData(1);
    }
  }
  private loadFrontendData() {
    this.userService.getAllUsers().subscribe({
      next: (res: AllUsersListResponse) => {
        console.log(res);
        this.alldata = res.data || [];
        this.totalPages = this.calculateTotalPages(res.totalUsers);
        this.updateFrontendPage();
      },
      error: (err) => console.error('Error fetching users:', err),
    });
  }
  private loadBackendData(page: number) {
    this.userService
      .getPaginatedUsers(page, this.usersOnParticularPage)
      .subscribe({
        next: (res: PaginatedUserResponse | null) => {
          console.log(res);
          if (res) {
            this.paginatedData = res.data || [];
            this.totalPages = this.calculateTotalPages(res.totalUsers);
          }
        },
        error: (err) => console.error('Error fetching users:', err),
      });
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
  private calculateTotalPages(totalUsers: number): number {
    return totalUsers > 0
      ? Math.ceil(totalUsers / this.usersOnParticularPage)
      : 0;
  }
  changePage(page: number) {
    this.currentPage = page;
    if (this.isFrontEndPaginated) {
      this.updateFrontendPage();
    } else {
      this.loadBackendData(page);
    }
  }
  // changePage(pagecurrent: number) {
  //   this.currentPage = pagecurrent;
  //   const start = (this.currentPage - 1) * this.usersOnParticularPage;
  //   if (this.isFrontEndPaginated) {
  //     this.paginatedData = this.alldata.slice(
  //       start,
  //       start + this.usersOnParticularPage,
  //     );
  //   } else {
  //     this.userService
  //       .getSpecificUsers(pagecurrent, 10)
  //       .subscribe((data: any) => {
  //         console.log(data);
  //         this.paginatedData = data.data;
  //       });
  //   }
  // }
  onRowClick(id: number) {
    this.ShelfOpen = true;
    this.selectedUserId = id;
  }
  closeShelf() {
    this.ShelfOpen = false;
    this.selectedUserId = null;
  }
  onUserUpdated(updatedUser: UserDetails) {
    console.log('onupdateuser', updatedUser);
    let index = this.paginatedData.findIndex((u) => u.id === updatedUser.id);
    if (index !== -1) {
      //this.paginatedData[index] = updatedUser; // IMPORTANT WRONG WAY
      this.paginatedData[index] = {
        id: updatedUser.id,
        name: updatedUser.name,
        address: updatedUser.address,
        dob: updatedUser.dob,
      };
    }
    index = this.alldata.findIndex((u) => u.id === updatedUser.id);
    if (index !== -1) {
      this.alldata[index] = {
        id: updatedUser.id,
        name: updatedUser.name,
        address: updatedUser.address,
        dob: updatedUser.dob,
      };
    }
  }
}
