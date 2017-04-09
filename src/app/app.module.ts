import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//custom components
import { AppComponent } from './app.component';
import { MatsComponent } from './mats/mats.component';
import { MatsListComponent } from './mats-list/mats-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { LocationsComponent } from './map/location.component';
//pipes
import { RecipeFilterPipe } from './recipes-list/recipes-list.pipe';
import { RecipeIngredientFilterPipe } from './recipes-list/recipes-list.ingredients.pipe';
import { TimePipe } from './recipes-list/time.pipe';
import { MaterialFilterPipe } from './mats-list/mats-list.material.pipe';
import { LocationFilterPipe } from './mats-list/mats-list.location.pipe';
import { HyperlinkPipe } from './mats-list/mats-list.hyperlink.pipe';
import { StringFilterPipe } from '../assets/stringFilter.pipe';
import { OrderBy } from '../assets/order.pipe';

//router
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MatsComponent,
    MatsListComponent,
    RecipeComponent,
    RecipesListComponent,
    IngredientComponent,
    LocationsComponent,
    /*Pipes*/
    RecipeFilterPipe,
    RecipeIngredientFilterPipe,
    TimePipe,
    MaterialFilterPipe,
    LocationFilterPipe,
    HyperlinkPipe,
    /*Generic pipes*/
    StringFilterPipe,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
