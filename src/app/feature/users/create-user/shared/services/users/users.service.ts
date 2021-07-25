import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@feature/users/create-user/shared/models/user';
/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = environment.API;

  constructor(private readonly http: HttpClient) { }


  getUsers() {
    return this.http.get<any>(`${this.baseUrl}/users`)
      // .pipe(
      //   map((response: any) => response.data as User[]),
      //   tap(data => {
      //     console.log(data)
      //   })
      // )
      .toPromise()
  }

  createUser() {

  }

  deleteUserForIndex(index: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.baseUrl}/users/${index}`)
        .subscribe(() => {
          resolve(true)
        }, error => {
          debugger
          reject(error.message)
        })
    })
  }
}
