import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeToDisplay: Recipe;
  id: number;

  constructor(
    private ShoppinngService: ShoppingService,
    private RecipesService: RecipesService,
    private currentPath: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentPath.params.subscribe((params) => {
      this.id = +params[`id`];
      this.recipeToDisplay = this.RecipesService.getRecipe(this.id);
    });
  }

  toShoppingList() {
    this.ShoppinngService.addIngredient(...this.recipeToDisplay.ingredients);
  }

  editRecipe() {
    this.router.navigate([`edit`], { relativeTo: this.currentPath });
  }

  onDelete() {
    this.RecipesService.deleteRecipe(this.id);
    this.router.navigate([`/recipes`]);
  }
}
