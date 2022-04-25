import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  private intervals = [
    { valor: 60*60*24*365, singular: 'any', plural: 'anys'},
    { valor: 60*60*24*30, singular: 'mes', plural: 'mesos'},
    { valor: 60*60*24, singular: 'dia', plural: 'dies'},
    { valor: 60*60, singular: 'hora', plural: 'hores'},
    { valor: 60, singular: 'minut', plural: 'minuts'},
    { valor: 1, singular: 'segon', plural: 'segons'},
  ]

  transform(value: string | Date): string {
      
    let date: Date = new Date(value);
    let now: Date = new Date();

    let seconds: number = Math.floor((now.getTime() - date.getTime()) / 1000);

    for(let i = 0; i < this.intervals.length; i++) {
      let interval = this.intervals[i];
      if(seconds > interval.valor) {
        let valor: number = Math.floor(seconds / interval.valor);
        return `fa ${valor} ${valor > 1 ? interval.plural : interval.singular}`;
      }
    }

    return 'ara';
  }

}
