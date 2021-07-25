import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ResponseCreateUser, ResponseGetUsers } from '../../models/response-users';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = `${environment.API}/users`;
  private _message = new BehaviorSubject<string>(null);

  message$ = this._message.asObservable();

  constructor(private readonly http: HttpClient) { }

  setMessage(msg: string) {
    this._message.next(msg);
    setTimeout(() => {
      this._message.next(null)
    }, 5000);
  }

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
