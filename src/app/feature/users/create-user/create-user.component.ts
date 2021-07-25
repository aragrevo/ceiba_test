import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  message = '';

  get NameField() {
    return this.userForm.get('name')
  }

  get JobField() {
    return this.userForm.get('job')
  }

  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private usersSvc: UsersService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]]
    })
  }

  isValidField(field: string): string {
    const validatedField = this.userForm.get(field);
    return (!validatedField.valid && validatedField.touched) ? 'error' : (validatedField.touched ? 'success' : '')
  }

  async onCreate() {
    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) return;

    const { name, job } = this.userForm.value;
    try {
      await this.usersSvc.createUser(name, job);
      this.usersSvc.setMessage(`The user ${name} was create`);
      this.redirectToListUsers();
      this.userForm.reset();
    } catch (error) {
      this.message = error
    }
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
