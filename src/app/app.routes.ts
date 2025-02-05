import { Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { categoriesRoutes } from './components/categories.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: categoriesRoutes,
  },
  { path: '**', component: NotFoundComponent },
];
