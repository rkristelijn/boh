import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MatsListComponent } from './mats-list/mats-list.component';
import { LocationsComponent } from './map/location.component';

const appRoutes: Routes = [
  {
    path: 'recipes',
    component : RecipesListComponent
  },
  {
    path: 'materials',
    component : MatsListComponent
  },
  {
    path: 'locations',
    component : LocationsComponent
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
