import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burrito', '7 Layer Burrito', 'https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/ed/3a/fc/ed3afc1a-78f7-2550-78fd-8b9eac77e434/source/552x414bb.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
