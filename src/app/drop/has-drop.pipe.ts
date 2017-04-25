import { PipeTransform, Pipe } from '@angular/core';
import { DropComponent } from './drop.component';

@Pipe({
    name: 'hasDropFilter'
})
export class HasDropFilterPipe implements PipeTransform {
    transform(value: DropComponent[], filterBy: string): DropComponent[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy) {
            return value.filter((drop: DropComponent) => {
                //recipe.hasLocation(filterBy)) : value;
                for(let item of drop.drops) {
                    // console.log("filtering", item, filterBy);
                    if(item.item.toLocaleLowerCase().indexOf(filterBy) !== -1) {
                        // console.log("found it");
                        return true;
                    }
                    // console.log("didn't found it");
                    // return false;
                }
            })
        } else {
            return value;
        }
    }
}