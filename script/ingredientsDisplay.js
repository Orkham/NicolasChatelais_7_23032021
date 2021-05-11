import {Ingredients} from './Ingredients.js'
import {recipes} from './recipes.js'
import {IngredientsSelectDisplay} from './SelectsDisplay.js'

/*** Parcourir les recettes et extraire les ingrédients ***/

let ingredientsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
        let ingredient = new Ingredients;
        ingredient.ingredientToDisplay(recipes[i].ingredients[j].ingredient, ingredientsListToDisplay)
    }
}

/*** Affichage initial des ingrédients ***/
export function initialIngredientsDisplay(){
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