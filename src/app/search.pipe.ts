import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any[],searchTerm: string,test:any): any[] {
    console.log("test is ",test);
    if(!users||!searchTerm){
      return users;
    }
    else
    {
      return users.filter(userObj=>userObj[test].toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
  }

}
