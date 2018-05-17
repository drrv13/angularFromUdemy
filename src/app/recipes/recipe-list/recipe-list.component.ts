import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute) { }


  ngOnInit() {
        this.subscription = this.recipeService.recipesChanged
          .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
      // тут сделал маленькую поправку что бы не было вообще локальной базы и при старте она была пустой
      this.recipes = this.recipeService.getRecipes();
    }

  // ngOnInit() {
  //   // this.dataStorageService.getRecipes();
  //   if (this.recipeService.getRecipes()) {
  //     this.subscription = this.recipeService.recipesChanged.subscribe(
  //       (recipes: Recipe[]) => {
  //         this.recipes = recipes;
  //       }
  //     );
  //     // тут сделал маленькую поправку что бы не было вообще локальной базы и при старте она была пустой
  //       для задействования поменять иниты местами и почистить в сервисе массив
  //     this.recipes = this.recipeService.getRecipes();
  //   }
  ngOnDestroy() {
    // this.recipeService.recipesChanged.unsubscribe();
    this.subscription.unsubscribe();
  }
  onNewRecipe() {
    // this.subscription.unsubscribe();
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
