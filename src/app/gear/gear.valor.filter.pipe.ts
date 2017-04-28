import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'valorFilter'
})
export class ValorFilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return value.filter((gear: any) => {
                
                if (!gear.cost.type) {
                    console.log(gear, filterBy);
                    return false;
                }
                if (gear.cost.type.toLocaleLowerCase().indexOf(filterBy) !== -1) {
                    return true;
                }
            })
        } else {
            return value;
        }
    }
}