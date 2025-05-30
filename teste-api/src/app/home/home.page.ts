import { Component } from '@angular/core';
import { MealService } from '../services/meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  meals: any[] = [];
  searchName: string = '';

  constructor(
    private mealService: MealService,
    private router: Router
  ) {}

  irParaMeal(id: string) {
    this.router.navigate(['/meal-detail', id]);
  }

  onSearch() {
    const name = this.searchName.trim();
    if (name.length > 0) {
      this.mealService.getMealByName(name).subscribe((response: any) => {
        this.meals = response.meals || [];
      });
    } else {
      this.meals = [];
    }
  }
}
