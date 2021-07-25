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
  message: string = null;
  newUser = this.usersSvc.newName;

  constructor(private usersSvc: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const { data } = await this.usersSvc.getUsers()
      this.users = data
    } catch (error) {
      console.log({ error })
      this.users = [];
    }
  }

  async onDelete(id: number) {
    try {
      await this.usersSvc.deleteUserForIndex(id)
      const userNameDeleted = this.users.find(user => user.id === id).first_name;
      this.setMessage(`The user ${userNameDeleted} was deleted`);
      this.users = this.users.filter(user => user.id !== id);
    } catch (error) {
      console.log({ error })
    }
  }

  private setMessage(message: string) {
    this.message = message
    // setTimeout(() => {
    //   this.message = null;
    // }, 5000);
  }



}
