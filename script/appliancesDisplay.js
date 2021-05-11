import {Appliance} from './Appliance.js';
import {recipes} from './recipes.js';
import {AppliancesSelectDisplay} from './SelectsDisplay.js';
import { clearListDisplay } from './utils.js'

/*** Parcourir les recettes et extraire les appareils ***/

let appareilsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    let appareil = new Appliance;
    appareil.applianceToDisplay(recipes[i].appliance, appareilsListToDisplay)
}

/*** Affichage initial des appareils ***/
export function initialAppliancesDisplay(){
    clearListDisplay(document.getElementById('appareilsBox'))
    for(let appliance of appareilsListToDisplay){
        Appliance.displayAppliance(appliance)
    }
    Appliance.appliancesListener(appareilsBox);
}


/*** Ecouteurs dans la liste des appareils ***/


/*****Selects*****/
/*Appareil*/
let searchByAppareil = document.getElementById('inputAppareil');
let selectAppareilsDisplay = new AppliancesSelectDisplay;
searchByAppareil.addEventListener('click', selectAppareilsDisplay.displayAppliancesList);
