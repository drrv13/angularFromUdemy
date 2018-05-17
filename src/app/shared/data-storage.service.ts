import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor( private httpClient: HttpClient,
               private recipeService: RecipeService,
               private authService: AuthService) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer qazxswedc'); пока не работает

    // return this.httpClient.put('https://uprj-e3038.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    // });

    const req = new HttpRequest('PUT', 'https://uprj-e3038.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }
  getRecipes() {
    // const token = this.authService.getToken();
    // this.httpClient.get<Recipe[]>('https://uprj-e3038.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://uprj-e3038.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
