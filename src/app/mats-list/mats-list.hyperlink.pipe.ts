import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hyperlink'})
export class HyperlinkPipe implements PipeTransform {
  transform(value: string): string {
    let split:string[] = value.split(":");
    let type = split[0];
    let search = split[1];

    // switch( type ) {
    //   case "Event":
    //     return `${type}:${search}`;
    //   case "Dungeon":
    //     return `Dungeon: <a href="/locations/?search=${search}">${search}</a>`;
    //   case "Quest":

    // }
    return value;
  }
}