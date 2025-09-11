import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import {
  AllUsersListResponse,
  PaginatedUserResponse,
  UserDetails,
} from '../constants/types';
import { ApiEndpoints } from '../constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cache = new Map<number, PaginatedUserResponse>();
  private userCache = new Map<number, UserDetails>();

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<AllUsersListResponse> {
    return this.http.get<AllUsersListResponse>(ApiEndpoints.getAllUsers);
  }
  getPaginatedUsers(
    page: number,
    limit: number,
  ): Observable<PaginatedUserResponse | null> {
    if (this.cache.has(page)) {
      const cachedUser = this.cache.get(page);
      if (cachedUser) {
        return of(cachedUser);
      }
      return of(null);
    } else {
      return this.http
        .get<PaginatedUserResponse>(ApiEndpoints.getPaginatedUsers(page, limit))
        .pipe(
          tap((response: PaginatedUserResponse) => {
            // save in cache
            console.log(response);
            console.log('after response');
            this.cache.set(page, response);
          }),
        );
    }
  }
  // Get user details by ID with caching
  getUserDetailsbyID(userId: number): Observable<UserDetails | null> {
    if (this.userCache.has(userId)) {
      const cachedUser = this.userCache.get(userId);
      if (cachedUser) {
        return of(cachedUser);
      }
      return of(null);
    } else {
      return this.http
        .get<UserDetails>(ApiEndpoints.getUserDetails(userId))
        .pipe(
          tap((user) => {
            this.userCache.set(userId, user);
          }),
        );
    }
  }
  updateUserDetails(user: UserDetails): Observable<UserDetails> {
    return this.http
      .put<UserDetails>(ApiEndpoints.editUserDetails(user.id), user)
      .pipe(
        tap((updatedUser) => {
          // update cache
          this.userCache.set(updatedUser.id, updatedUser);
        }),
      );
  }
}
