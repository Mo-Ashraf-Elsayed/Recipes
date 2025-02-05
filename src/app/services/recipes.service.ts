import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  http = inject(HttpClient);

  getAllRecipes(): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
  }
}
