import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is siply a test', 'https://imgs.search.brave.com/vzruCuUzfIc0ZK1nT_GooQp3i7iar2UImZo4ohNaN9w/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZXhwbG9yZXZlZy5v/cmcvZmlsZXMvMjAy/MC8wMS9WZWdhbkNy/YWJDYWtlcy04Lmpw/Zw'),
    new Recipe('A test Recipe', 'this is siply a test', 'https://imgs.search.brave.com/vzruCuUzfIc0ZK1nT_GooQp3i7iar2UImZo4ohNaN9w/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZXhwbG9yZXZlZy5v/cmcvZmlsZXMvMjAy/MC8wMS9WZWdhbkNy/YWJDYWtlcy04Lmpw/Zw')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
