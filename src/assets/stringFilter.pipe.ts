import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {
    /**
     * This filters based on string on an array.
     * @param value 
     * @param filterBy - create a component-level property and us this to filter
     * @param index - pass some literal that indicates the key to filter on
     */
    transform(value: any[], filterBy: string, index: string): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return value.filter((loc: any) => loc[index].toLocaleLowerCase().indexOf(filterBy) !== -1);
        } else {
            return value;
        }
    }
}