import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-all-meals',
  imports: [CardComponent],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss',
})
export class AllMealsComponent {
  allRecapies: any;
  recipesService = inject(RecipesService);
  getAllReacipes() {
    this.recipesService.getAllRecipes().subscribe({
      next: (res) => {
        this.allRecapies = res.meals;
      },
    });
  }
  ngOnInit() {
    this.getAllReacipes();
  }
}
