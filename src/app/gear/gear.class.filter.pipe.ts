import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'classFilter'
})
export class ClassFilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy : null;
        if (filterBy) {
            return value.filter((gear: any) => {
                if (gear.class.indexOf(filterBy) !== -1) {
                    return true;
                }
            })
        } else {
            return value;
        }
    }
}