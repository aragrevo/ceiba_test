import { Component, OnInit } from '@angular/core';

import { UsersService } from '@feature/users/create-user/shared/services/users/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  users$ = this.usersSvc.users;

  constructor(private usersSvc: UsersService) { }

  ngOnInit() { }

  async onDelete(id: number) {
    console.log(id)
    try {
      await this.usersSvc.deleteUserForIndex(id)
    } catch (error) {
      debugger
    }
  }



}
