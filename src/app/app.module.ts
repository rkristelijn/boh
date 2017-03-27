import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatsComponent } from './mats/mats.component';
import { MatsListComponent } from './mats-list/mats-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeFilterPipe } from './recipes-list/recipes-list.pipe';
import { RecipeIngredientFilterPipe } from './recipes-list/recipes-list.ingredients.pipe';
import { TimePipe } from './recipes-list/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MatsComponent,
    MatsListComponent,
    RecipeComponent,
    RecipesListComponent,
    IngredientComponent,
    RecipeFilterPipe,
    RecipeIngredientFilterPipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
