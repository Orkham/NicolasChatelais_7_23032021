import { clearListDisplay } from './utils.js'
import { Ingredients } from './Ingredients.js';
import { Appliance } from './Appliance.js';
import { Ustensils } from './Ustensils.js';

/**
 * Mise à jour des selects 
 * @param { array } ingredientsToDisplay 
 * @param { array } appliancesToDisplay 
 * @param { array } ustensilsToDisplay
 */
export function listsUpdate(ingredientsToDisplay,appliancesToDisplay/*,ustensilsToDisplay*/){
    ingredientsListUpdate(ingredientsToDisplay)
    appliancesListUpdate(appliancesToDisplay)
    //ustensilsListUpdate(ustensilsToDisplay)
}
/**
 * Mise à jour du select Ingredient et pose des écouteurs
 * @param { array } ingredientsToDisplay liste des ingrédients à afficher
 */
function ingredientsListUpdate(ingredientsToDisplay){
    clearListDisplay(ingredientsBox);
    for(let i = 0 ; i < ingredientsToDisplay.length ; i++){
        Ingredients.displayIngredient(ingredientsToDisplay[i])
    }
    Ingredients.ingredientsListener(ingredientsBox)

}

/**
 * Mise à jour du select appareil et pose des écouteurs
 * @param { array } appliancesToDisplay liste des appareils à afficher
 */
function appliancesListUpdate(appliancesToDisplay){
    clearListDisplay(appareilsBox);
    for(let i = 0 ; i < appliancesToDisplay.length ; i++){
        Appliance.displayAppliance(appliancesToDisplay[i])
    }
    Appliance.appliancesListener(appareilsBox);
}

/**
 * Mise à jour du select Ustensiles et pose des écouteurs
 * @param { array } ustensilsToDisplay liste des ustensiles à afficher
 */
function ustensilsListUpdate(ustensilsToDisplay){
    clearListDisplay(ustensilesBox);
    for(let i = 0 ; i < ustensilsToDisplay.length ; i++){
        Ustensils.displayUstensil(ustensilsToDisplay[i])
    }
    Ustensils.ustensilsListener(ustensilesBox);
}

