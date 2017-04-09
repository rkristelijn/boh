import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SortComponent } from '../shared/sort-component';

import { RecipeComponent } from '../recipe/recipe.component';
import { TimePipe } from '../../assets/time.pipe';
import { OrderBy } from '../../assets/order.pipe';

import { DataService } from '../data.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent extends SortComponent implements OnInit {
  sort: string = 'name';
  private staticValues: any[];
  recipes: RecipeComponent[];
  listFilter: string;
  ingredientFilter: string;

  /** Empty constructor with dependancy injection
   * @param data 
   * @param activatedRoute 
   */
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) {
    super();
   }

  /** Load data and catch ?search=
   */
  ngOnInit() {
    this.data.getRecipes().subscribe(res => {
      this.loadValues(res);
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.listFilter = params['search'];
    });
  }

  /** Adds recipies to the array
   * @param recipe 
   */
  addRecipe(recipe: RecipeComponent) {
    this.recipes.push(recipe);
  }

  /** Loads the recipie values and ingredients
   * @param values 
   */
  loadValues(values: any) {
    this.recipes = [];
    for (let recipeDesc of values) {
      //create a recipe to work with
      let recipe = new RecipeComponent(recipeDesc.name);
      recipe.setDescription(recipeDesc.name);
      recipe.setTime(recipeDesc.time);

      for (let ingredient of recipeDesc.ingredients) {
        recipe.addIngredientString(ingredient.name, ingredient.amount);
      }
      //add the recipe
      this.recipes.push(recipe);
    }
  }
}
