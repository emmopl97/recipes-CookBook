import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../recipes.service';
import { enterLeave } from '../../animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [enterLeave],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(
    private RecipesService: RecipesService,
    private router: Router,
    private currentPath: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.RecipesService.recipesUpdated.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.RecipesService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate([`new`], { relativeTo: this.currentPath });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
