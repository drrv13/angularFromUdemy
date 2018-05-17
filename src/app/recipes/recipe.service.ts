import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';


export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
   private recipes: Recipe[] = [
    new Recipe('first recipe',
      'here is the desc of recipe',
      'https://images.lady.mail.ru/5309/',
      [
        new Ingredient('lorem', 1),
        new Ingredient('ipsum', 2),
      ]),
    new Recipe('second recipe',
      'here is the desc of recipe',
      'https://images.lady.mail.ru/5309/',
    [
      new Ingredient('ашалай', 1),
      new Ingredient('машалай', 2)
    ]),
    new Recipe('third recipe',
      'here is the desc of recipe',
      'https://images.lady.mail.ru/5309/',
      [
        new Ingredient('машалай', 6),
        new Ingredient('ашалай', 2),
      ]),
  ];
  constructor() {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
