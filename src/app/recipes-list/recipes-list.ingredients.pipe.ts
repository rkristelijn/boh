import {  PipeTransform, Pipe } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';
import {} from '../ingredient/ingredient.component';

@Pipe({
    name: 'recipeIngredientsFilter'
})
export class RecipeIngredientFilterPipe implements PipeTransform {

    transform(value: RecipeComponent[], filterBy: string): RecipeComponent[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((recipe: RecipeComponent) =>
            // recipe.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
            recipe.hasIngredient(filterBy)) : value;
    }
}