import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MatsListComponent } from './mats-list/mats-list.component';
import { LocationsComponent } from './map/location.component';
import { RaidListComponent } from './raids/raid-list.component';
import { GearListComponent } from './gear/gear.component';
import { DropComponent } from "app/drop/drop.component";

const appRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesListComponent
  },
  {
    path: 'materials',
    component: MatsListComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'raids',
    component: RaidListComponent
  },
  {
    path: 'gear',
    component: GearListComponent
  },
  {
    path: 'drops',
    component: DropComponent
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
