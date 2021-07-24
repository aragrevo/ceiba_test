import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { of } from 'rxjs';


interface LoginResponse {
  token?: string
  error?: string
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private baseUrl = environment.API;

  constructor(private http: HttpClient) { }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {

      this.http.post<LoginResponse>(`${this.baseUrl}/login`, { email, password })
        .pipe(
          catchError(err => of(err.error))
        )
        .subscribe(({ token, error }: LoginResponse) => {
          if (token) {
            this.setLocalStorage(token);
            return resolve(token)
          }
          reject(error)
        })
    })



  }

  private setLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

}
