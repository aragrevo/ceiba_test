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

  private baseUrl = `${environment.API}/login`;

  constructor(private http: HttpClient) { }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(email: string, password: string): Promise<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, { email, password })
      .toPromise()
  }

}
