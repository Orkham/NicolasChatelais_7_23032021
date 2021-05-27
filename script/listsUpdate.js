import { clearListDisplay } from './utils.js'
import { Ingredients } from './Ingredients.js';
import { Appliance } from './Appliance.js';
import { Ustensils } from './Ustensils.js';

export function listsUpdate(ingredientsToDisplay,appliancesToDisplay/*,ustensilsToDisplay*/){
    ingredientsListUpdate(ingredientsToDisplay)
    appliancesListUpdate(appliancesToDisplay)
    //ustensilsListUpdate(ustensilsToDisplay)
}

function ingredientsListUpdate(ingredientsToDisplay){
    clearListDisplay(ingredientsBox);
    for(let i = 0 ; i < ingredientsToDisplay.length ; i++){
        Ingredients.displayIngredient(ingredientsToDisplay[i])
    }
    Ingredients.ingredientsListener(ingredientsBox)

}

function appliancesListUpdate(appliancesToDisplay){
    clearListDisplay(appareilsBox);
    
    for(let i = 0 ; i < appliancesToDisplay.length ; i++){
        Appliance.displayAppliance(appliancesToDisplay[i])
    }
    Appliance.appliancesListener(appareilsBox);
}
/*
function ustensilsListUpdate(ustensilsToDisplay){
    clearListDisplay(ustensilesBox);
    for(let i = 0 ; i < ustensilsToDisplay.length ; i++){
        Ustensils.displayUstensil(ustensilsToDisplay[i])
    }
    Ustensils.ustensilsListener(ustensilesBox);
}
*/
