import { User } from '@feature/users/create-user/shared/models/user';
import { Component, OnInit } from '@angular/core';

import { UsersService } from '@feature/users/create-user/shared/services/users/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  valueSearch = '';

  constructor(private usersSvc: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    const { data } = await this.usersSvc.getUsers()
    this.users = data
  }

  async onDelete(id: number) {
    console.log(id)
    try {
      await this.usersSvc.deleteUserForIndex(id)
      // this.getUsers();
    } catch (error) {
      debugger
    }
  }



}
