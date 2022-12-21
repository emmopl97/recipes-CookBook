import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { enterLeave } from '../animations';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [enterLeave],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  constructor(private ShoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.ShoppingService.getIngredients();
    this.subscription = this.ShoppingService.newIngredients.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPickedIng(i: number) {
    this.ShoppingService.pickedIngredientId.next(i);
  }
}
