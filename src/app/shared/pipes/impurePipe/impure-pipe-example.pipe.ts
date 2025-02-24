import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipeExample',
  standalone: true,
  pure: false
})
export class ImpurePipeExamplePipe implements PipeTransform {

  transform(users : any[], searchTerm : string)  {
    if(!users || !searchTerm)
    {
      return users;
    }

    searchTerm = searchTerm.toLowerCase();
    return users.filter(user => user.toLowerCase().includes(searchTerm));
  }

}
