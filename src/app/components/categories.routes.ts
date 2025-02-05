import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { AllMealsComponent } from './all-meals/all-meals.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const categoriesRoutes: Routes = [
  { path: '', redirectTo: 'All', pathMatch: 'full' },
  { path: 'All', component: AllMealsComponent },
  { path: ':category', component: DisplayDataComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(categoriesRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
