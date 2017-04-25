import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'dropFilter'
})
export class DropFilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return value.filter((drop: any) => {
                if (drop.item.toLocaleLowerCase().indexOf(filterBy) !== -1) {
                    return true;
                }
            })
        } else {
            return value;
        }
    }
}