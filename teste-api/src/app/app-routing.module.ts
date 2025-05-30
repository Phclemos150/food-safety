import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'meal-detail/:id',
    loadChildren: () => import('./pages/meal-detail/meal-detail.module').then(m => m.MealDetailPageModule)
  },
  {
    path: 'meal',
    loadChildren: () => import('./pages/meal-detail/meal-detail.module').then(m => m.MealDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
