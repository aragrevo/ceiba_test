import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '@feature/login/shared/services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private readonly emailPattern = /\S+@\S+\.\S+/;

  get EmailField() {
    return this.loginForm.get('email')
  }

  get PasswordField() {
    return this.loginForm.get('password')
  }

  constructor(
    private fb: FormBuilder,
    private readonly loginSvc: LoginService,
    private readonly router: Router,
  ) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onLogin() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    this.loginSvc.login(email, password);
    this.redirectUsers();
    this.loginForm.reset();
  }

  isValidField(field: string): string {
    const validatedField = this.loginForm.get(field);
    return (!validatedField.valid && validatedField.touched) ? 'error' : (validatedField.touched ? 'success' : '')
  }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
