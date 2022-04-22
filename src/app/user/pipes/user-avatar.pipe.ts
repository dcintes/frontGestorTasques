import { Pipe, PipeTransform } from '@angular/core';
import { MemberDTO } from 'src/app/member/models/member.dto';
import { Md5 } from 'ts-md5/dist/md5';
import { UserDTO } from '../models/user.dto';



@Pipe({
  name: 'userAvatar'
})
export class UserAvatarPipe implements PipeTransform {

  transform(value: UserDTO | MemberDTO, size?: number): string {

    if(!value || !value.name) {
      return '';
    }

    const md5 = new Md5();
    const hash = md5.appendStr(value.name).end();

    let params = '';

    if (size) {
      params = `size=${size}`;
    }

    if (params) {
      params = '?' + params;
    }

    return `https://avatars.dicebear.com/api/bottts/${hash}.svg${params}`;
  }

}
