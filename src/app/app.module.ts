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
import { RaidListComponent } from './raids/raid-list.component';
import { GearListComponent } from './gear/gear.component';
import { DropComponent } from './drop/drop.component'; 
import { Schedule } from './schedule/schedule'; 
import { Enemies } from './enemies/enemies';

//shared components
import { CollapsiblePanelComponent } from './shared/collapsible-panel';
//pipes
import { RecipeFilterPipe } from './recipes-list/recipes-list.pipe';
import { RecipeIngredientFilterPipe } from './recipes-list/recipes-list.ingredients.pipe';
import { TimePipe } from '../assets/time.pipe';
import { MaterialFilterPipe } from './mats-list/mats-list.material.pipe';
import { LocationFilterPipe } from './mats-list/mats-list.location.pipe';
import { HyperlinkPipe } from './mats-list/mats-list.hyperlink.pipe';
import { StringFilterPipe } from '../assets/stringFilter.pipe';
import { OrderBy } from '../assets/order.pipe';
import { HasDropFilterPipe } from './drop/has-drop.pipe';
import { DropFilterPipe } from './drop/drop.pipe';
import { ClassFilterPipe } from './gear/gear.class.filter.pipe';
import { ValorFilterPipe } from './gear/gear.valor.filter.pipe';

//router
import { routing } from './app.routing';

//data
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MatsComponent,
    MatsListComponent,
    RecipeComponent,
    RecipesListComponent,
    IngredientComponent,
    LocationsComponent,
    RaidListComponent,
    GearListComponent,
    DropComponent,
    Schedule,
    Enemies,
    /*shared components*/
    CollapsiblePanelComponent,
    /*Pipes*/
    RecipeFilterPipe,
    RecipeIngredientFilterPipe,
    TimePipe,
    MaterialFilterPipe,
    LocationFilterPipe,
    HyperlinkPipe,
    HasDropFilterPipe,
    DropFilterPipe,
    ClassFilterPipe,
    ValorFilterPipe,
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
