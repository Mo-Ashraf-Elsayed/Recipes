import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-display-data',
  imports: [CardComponent],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss',
})
export class DisplayDataComponent {
  meals: any[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.fetchMeals();
    });
  }

  fetchMeals() {
    if (!this.category) return;

    this.http
      .get<{ meals: any[] }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.category}`
      )
      .subscribe((response) => {
        this.meals = response.meals || [];
      });
  }
}
