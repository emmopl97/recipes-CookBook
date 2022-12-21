import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  /*@ViewChild(`nameInput`) nameInput: ElementRef;
  @ViewChild(`amountInput`) amountInput: ElementRef;*/
  @ViewChild(`f`) theForm: NgForm;
  newIngredient: Ingredient;
  theSubscription: Subscription;
  editMode = false;
  index: number;
  editedIngr: Ingredient;

  constructor(private ShoppingService: ShoppingService) {}

  ngOnInit() {
    this.theSubscription = this.ShoppingService.pickedIngredientId.subscribe(
      (i: number) => {
        this.index = i;
        this.editMode = true;
        this.editedIngr = this.ShoppingService.getIngredient(i);
        this.theForm.setValue({
          name: this.editedIngr.name,
          amount: this.editedIngr.amount,
        });
      }
    );
  }

  onClear() {
    this.theForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.ShoppingService.deleteIngredient(this.index);
    this.theForm.reset();
    this.editMode = false;
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.theForm.value.name,
      this.theForm.value.amount
    );
    if (this.editMode) {
      this.ShoppingService.updateIngredient(this.index, newIngredient);
    } else {
      this.ShoppingService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  ngOnDestroy() {
    this.theSubscription.unsubscribe();
  }

  /*addIngredients() {
    this.newIngredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    };//for this I needed to use #nameInput and #amountInput in the HTML input values 
  }*/
}
