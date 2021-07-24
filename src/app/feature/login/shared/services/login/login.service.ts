import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(user: string, password: string) {
    const accessToken = btoa(`${user} - ${password}`);
    this.setLocalStorage(accessToken);
  }

  private setLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }
}
