import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
  recipesUpdated = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      `Stromboli`,
      `A delicious folded pizza filled up with mushrooms, fetta cheese and tomatoes`,
      `https://www.sanpellegrinofruitbeverages.com/mx/sites/g/files/xknfdk901/files/2019-07/Italian_Stromboli_post.jpg`,
      [new Ingredient(`Mushrooms`, 20), new Ingredient(`pomodoro`, 4)]
    ),
    new Recipe(
      `Ahi Tuna`,
      `A bowl with lettuce, cherry tomatoes and fresh tuna slices`,
      `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190226-seared-tuna-435-1552085484.jpg`,
      [new Ingredient(`Tuna`, 1), new Ingredient(`olives`, 6)]
    ),
  ];

  //private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesUpdated.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  updateRecipe(i: number, newRecipe: Recipe) {
    this.recipes[i] = newRecipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }
}
