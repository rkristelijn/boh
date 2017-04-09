import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
      let ret: string[] = [];
      let days = Math.floor(value/1440);
      if(days>0) ret.push(days==1 ? '1 day':`${days} days`);
      let remainingHours = value % 1440;
      
      let hours = Math.floor(remainingHours/60);
      if(hours>0) ret.push(hours==1 ? '1 hour': `${hours} hours`);
      
      let minutes = value % 60;
      if(minutes>0) ret.push(minutes==1?'1 minute':`${minutes} minutes`);

      return ret.join(',');
  }
}