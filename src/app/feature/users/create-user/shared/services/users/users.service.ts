import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { ResponseCreateUser, ResponseGetUsers } from '../../models/response-users';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = `${environment.API}/users`;
  newName: string = null;

  constructor(private readonly http: HttpClient) { }


  getUsers() {
    return this.http.get<ResponseGetUsers>(`${this.baseUrl}`)
      .toPromise()
  }

  createUser(name: string, job: string) {
    return this.http.post<ResponseCreateUser>(`${this.baseUrl}`, { name, job })
      .toPromise()
  }

  deleteUserForIndex(index: number) {
    return this.http.delete(`${this.baseUrl}/${index}`)
      .toPromise()
  }
}
