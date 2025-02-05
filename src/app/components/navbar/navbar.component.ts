import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  categories: string[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http
      .get<{ categories: { strCategory: string }[] }>(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      )
      .subscribe((response) => {
        this.categories = response.categories.map((cat) => cat.strCategory);
      });
  }
  navigateTo(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    if (selectedValue) {
      this.router.navigate([selectedValue], {
        relativeTo: this.route,
      });
    }
  }
}
