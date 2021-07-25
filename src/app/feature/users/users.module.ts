import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from '@feature/users/list-users/list-users.component';


@NgModule({
    declarations: [HomeUserComponent, NavBarComponent, ListUsersComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ],
    providers: [
        FilterUserByNamePipe
    ]
})
export class UsersModule {
}
