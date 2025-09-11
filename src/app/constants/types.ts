export interface AllUsersListResponse {
  totalUsers: number;
  data: BasicUserDetails[];
}
export interface BasicUserDetails {
  id: number;
  name: string;
  address: string;
  dob: string; // keep as string since API returns ISO date
}
export interface ColumnDefinition {
  displayname: string;
  fieldname: keyof BasicUserDetails; // restricts to only keys of User (id | name | address | dob)
}
export interface UserDetails extends BasicUserDetails {
  organizationName: string;
  designation: string;
  skills: string[];
}
export interface PaginatedUserResponse {
  data: UserDetails[];
  page: number;
  limit: number;
  totalPages: number;
  totalUsers: number;
}
