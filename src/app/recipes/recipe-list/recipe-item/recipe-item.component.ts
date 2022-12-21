import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() eachRecipe: Recipe;
  @Input() index: number;

  constructor(private route: Router, private currentPath: ActivatedRoute) {}

  ngOnInit() {}

  onSelect() {
    this.route.navigate([this.index], { relativeTo: this.currentPath });
  }
}
