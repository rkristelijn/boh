import { PipeTransform, Pipe } from '@angular/core';
import { MatsComponent } from '../mats/mats.component';

@Pipe({
    name: 'materialFilter'
})
export class MaterialFilterPipe implements PipeTransform {

    transform(value: MatsComponent[], filterBy: string): MatsComponent[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((material: MatsComponent) =>
            material.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}