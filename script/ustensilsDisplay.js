import { Ustensils } from './Ustensils.js'
import { UstensilsSelectDisplay } from './SelectsDisplay.js'
import { clearListDisplay } from './utils.js'

let searchByUstensils = document.getElementById('inputUstensiles');
let selectUstensilsDisplay = new UstensilsSelectDisplay;
searchByUstensils.addEventListener('click', selectUstensilsDisplay.displayUstensilesList);

/**
 * Affichage des ustensiles en fonction des recettes affichées
 * @param { array } recipesList liste des recettes affichées
 */
 export function ustensilsDisplay(recipesList){
    clearListDisplay(document.getElementById('ustensilesBox'))
    let ustensilsListToDisplay = Ustensils.getUstensilsFromRecipes(recipesList)
    for(let i = 0 ; i < ustensilsListToDisplay.length ; i++){
        Ustensils.displayUstensil(ustensilsListToDisplay[i])
    }
    Ustensils.ustensilsListener(ustensilesBox);
}
