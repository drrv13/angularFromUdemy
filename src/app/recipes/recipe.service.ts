import { Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('first recipe',
      'here is the desc of recipe',
      'https://images.lady.mail.ru/5309/',
      [
        new Ingredient('хуй', 1),
        new Ingredient('пизда', 2),
      ]),
    new Recipe('second recipe',
      'here is the desc of recipe',
      'https://images.lady.mail.ru/5309/',
    [
      new Ingredient('конятина', 1),
      new Ingredient('залупа', 2)
    ]),
    new Recipe('third recipe',
      'here is the desc of recipe',
      'https://images.lady.mail.ru/5309/',
      [
        new Ingredient('гуси', 6),
        new Ingredient('вареники', 2),
      ]),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
