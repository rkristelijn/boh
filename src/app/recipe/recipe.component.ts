import { Component, OnInit } from '@angular/core';

import {IngredientComponent} from '../ingredient/ingredient.component';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  ingredients: IngredientComponent[];
  name:string;
  time:number; //in seconds
  description:string;
  constructor(name: string) { 
    this.name = name;
    this.ingredients = [];
  }

  addIngredient(ingredient: IngredientComponent) {
    this.ingredients.push(ingredient);
  }

  addIngredientString(ingredient: string, amount:number) {
    this.ingredients.push(new IngredientComponent(ingredient, amount));
  }

  setTime(time: number) { 
    this.time = time;
  }
  setDescription(desciption:string) {
    this.description = desciption;
  }
  ngOnInit() {
  }
  hasIngredient(search: string):boolean {
    for (let ingredient of this.ingredients) {
      if(ingredient.material.name.toLocaleLowerCase().indexOf(search) !== -1) return true;
    }
    return false;
  }
}
