import {Appliance} from './Appliance.js';
import {recipes} from './recipes.js';
import {AppliancesSelectDisplay} from './SelectsDisplay.js';
import { clearListDisplay } from './utils.js'

/*** Affichage des appareils ***/
export function appliancesDisplay(recipesList){
    clearListDisplay(document.getElementById('appareilsBox'))

    let appliancesListToDisplay = Appliance.getAppliancesFromRecipes(recipesList)

    for(let i = 0 ; i < appliancesListToDisplay.length ; i++){
        Appliance.displayAppliance(appliancesListToDisplay[i])
    }
    Appliance.appliancesListener(appareilsBox)
}


/*****Selects*****/
/*Appareil*/
let searchByAppareil = document.getElementById('inputAppareil');
let selectAppareilsDisplay = new AppliancesSelectDisplay;
searchByAppareil.addEventListener('click', selectAppareilsDisplay.displayAppliancesList);
