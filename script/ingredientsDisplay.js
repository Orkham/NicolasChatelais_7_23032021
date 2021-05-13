import {Ingredients} from './Ingredients.js'
import {recipes} from './recipes.js'
import {IngredientsSelectDisplay} from './SelectsDisplay.js'
import { clearListDisplay } from './utils.js'


/*** Affichage initial des ingrédients ***/
export function ingredientsDisplay(recipesList){
    clearListDisplay(document.getElementById('ingredientsBox'))

    let ingredientsListToDisplay = Ingredients.getIngredientsFromRecipes(recipesList)

    for(let i = 0 ; i < ingredientsListToDisplay.length ; i++){
        Ingredients.displayIngredient(ingredientsListToDisplay[i])
    }
    Ingredients.ingredientsListener(ingredientsBox);
}

/*****Selects*****/
/*Ingredients*/
let searchByIngredients = document.getElementById('inputIngredients');
let selectIngredientsDisplay = new IngredientsSelectDisplay;
searchByIngredients.addEventListener('click', selectIngredientsDisplay.displayIngredientsList);