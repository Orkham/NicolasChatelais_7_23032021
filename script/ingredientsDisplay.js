import {Ingredients} from './Ingredients.js'
import {IngredientsSelectDisplay} from './SelectsDisplay.js'
import { clearListDisplay } from './utils.js'

let searchByIngredients = document.getElementById('inputIngredients');
let selectIngredientsDisplay = new IngredientsSelectDisplay;
searchByIngredients.addEventListener('click', selectIngredientsDisplay.displayIngredientsList);

/**
 * Affichage des ingrédients en fonction des recettes affichées
 * @param { array } recipesList liste des recettes affichées
 */
export function ingredientsDisplay(recipesList){
    clearListDisplay(document.getElementById('ingredientsBox'))
    let ingredientsListToDisplay = Ingredients.getIngredientsFromRecipes(recipesList)
    for(let i = 0 ; i < ingredientsListToDisplay.length ; i++){
        Ingredients.displayIngredient(ingredientsListToDisplay[i])
    }
    Ingredients.ingredientsListener(ingredientsBox);
}

