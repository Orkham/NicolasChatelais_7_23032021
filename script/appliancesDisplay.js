import {Appliance} from './Appliance.js';
import {AppliancesSelectDisplay} from './SelectsDisplay.js';
import { clearListDisplay } from './utils.js'

let searchByAppareil = document.getElementById('inputAppareil');
let selectAppareilsDisplay = new AppliancesSelectDisplay;
searchByAppareil.addEventListener('click', selectAppareilsDisplay.displayAppliancesList);

/**
 * Affichage des appareils en fonction des recettes affichées
 * @param { array } recipesList liste des recettes affichées
 */
export function appliancesDisplay(recipesList){
    clearListDisplay(document.getElementById('appareilsBox'))

    let appliancesListToDisplay = Appliance.getAppliancesFromRecipes(recipesList)

    for(let i = 0 ; i < appliancesListToDisplay.length ; i++){
        Appliance.displayAppliance(appliancesListToDisplay[i])
    }
    Appliance.appliancesListener(appareilsBox)
}
