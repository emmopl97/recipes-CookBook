import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}

  ngOnInit() {}
}
