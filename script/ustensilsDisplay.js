import {recipes} from './recipes.js'
import {Ustensils} from './Ustensils.js'
import {UstensilsSelectDisplay} from './SelectsDisplay.js'
import {firstLetterUppercase} from './utils.js'
import { clearListDisplay } from './utils.js'

/*** Parcourir les recettes et extraire les ustensiles***/

let ustensilesListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    for(let j = 0 ; j < recipes[i].ustensils.length ; j++){
        let ustensil = new Ustensils;
        ustensil.ustensilToDisplay(recipes[i].ustensils[j], ustensilesListToDisplay)
    }
}

/*** Affichage initial des ustensiles ***/
export function initialUstensilsDisplay() {
    clearListDisplay(document.getElementById('ustensilesBox'))
    for(let ustensil of ustensilesListToDisplay){
        Ustensils.displayUstensil(ustensil)
    }
    Ustensils.ustensilsListener(ustensilesBox);
}



/*****Selects*****/

/*Ustensiles*/
let selectUstensilsDisplay = new UstensilsSelectDisplay;
let searchByUstensiles = document.getElementById('inputUstensiles')
searchByUstensiles.addEventListener('click', selectUstensilsDisplay.displayUstensilesList);
