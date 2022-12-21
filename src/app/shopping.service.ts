import { Ingredient } from './shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService {
  newIngredients = new Subject<Ingredient[]>();
  pickedIngredientId = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient(`olives`, 10),
    new Ingredient(`marinara sauce`, 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  updateIngredient(i: number, newIngredient: Ingredient) {
    this.ingredients[i] = newIngredient;
    this.newIngredients.next(this.ingredients.slice());
  }

  addIngredient(...ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.newIngredients.next(this.ingredients.slice());
  }

  getIngredient(i: number) {
    return this.ingredients[i];
  }

  deleteIngredient(i: number) {
    this.ingredients.splice(i, 1);
    this.newIngredients.next(this.ingredients.slice());
  }
}
