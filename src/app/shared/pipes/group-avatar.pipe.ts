import { Pipe, PipeTransform } from '@angular/core';
import { GroupDTO } from 'src/app/group/models/group.dto';
import { Md5 } from 'ts-md5/dist/md5';

@Pipe({
  name: 'groupAvatar'
})
export class GroupAvatarPipe implements PipeTransform {

  transform(value: GroupDTO, size?: number): string {

    if(!value || !value.name) {
      return '';
    }

    const md5 = new Md5();
    const hash = md5.appendStr(value.name).end();

    if (!size) {
      size = 100;
    }

    return `https://source.boringavatars.com/bauhaus/${size}/${hash}?square=true`;
  }

}
