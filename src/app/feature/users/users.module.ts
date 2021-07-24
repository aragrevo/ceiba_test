import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from '@feature/users/list-users/list-users.component';


@NgModule({
    declarations: [HomeUserComponent, NavBarComponent, ListUsersComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        HttpClientModule
    ]
})
export class UsersModule {
}
