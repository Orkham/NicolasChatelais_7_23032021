import { Recipe } from './Recipe.js';
import { clearListDisplay } from './utils.js'

export function recipesDisplay(recipesBoxContainer, recipesToDisplay){
    clearListDisplay(recipesBoxContainer);
    Recipe.displayRecipes(recipesToDisplay, recipesToDisplay.length)
}