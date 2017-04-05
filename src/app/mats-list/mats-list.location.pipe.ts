import { PipeTransform, Pipe } from '@angular/core';
import { MatsComponent } from '../mats/mats.component';

@Pipe({
    name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {
    transform(value: MatsComponent[], filterBy: string): MatsComponent[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((recipe: MatsComponent) =>
            recipe.hasLocation(filterBy)) : value;
    }
}