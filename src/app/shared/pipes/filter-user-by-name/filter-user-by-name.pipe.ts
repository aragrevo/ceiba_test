import { User } from '@feature/users/create-user/shared/models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: User[] = [], query: string = null) {
    if (!query || query.length < 3) return users

    const queryLower = query.toLowerCase();
    return users.filter(user => user.first_name.toLowerCase().includes(queryLower));
  }

}
