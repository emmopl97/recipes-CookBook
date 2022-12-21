import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes/recipe.model';
import { dataStorageService } from './shared/dataStorage.service';

@Injectable({ providedIn: `root` })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: dataStorageService,
    private recipesService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
