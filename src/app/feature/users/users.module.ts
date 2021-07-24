import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';


@NgModule({
    declarations: [HomeUserComponent, NavBarComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
    ]
})
export class UsersModule {
}
