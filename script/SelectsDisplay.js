//import { Ingredients } from "./Ingredients";

let searchByIngredients = document.getElementById('inputIngredients');
let searchByAppareil = document.getElementById('inputAppareil');
let searchByUstensiles = document.getElementById('inputUstensiles');

export class IngredientsSelectDisplay {
    
    displayIngredientsList() {
        document.getElementById('ingredientsList').classList.toggle('d-none');
        document.getElementById('ingredientsList').classList.toggle('width-xl');
        searchByIngredients.classList.toggle('width-xl');
        document.getElementById('ingredientsSearchbarContainer').classList.toggle('width-xl');
        document.getElementById('chevron-downIngredients').classList.toggle('d-none');
        document.getElementById('chevron-upIngredients').classList.toggle('d-none');
        
    }

    static displayCatchphrase() {
        
        if((searchByIngredients.classList.contains("width-xl"))){
            searchByIngredients.placeholder = 'Rechcercher un ingrédient'
        }else{
            searchByIngredients.placeholder = 'Ingrédients'
        }
    }

    static focusLost(){
        document.getElementById('ingredientsSearchbarContainer').classList.remove('width-xl');
        document.getElementById('inputIngredients').classList.remove('width-xl');
        document.getElementById('ingredientsList').classList.remove('width-xl');
        document.getElementById('ingredientsList').classList.add('d-none');
        document.getElementById('chevron-downIngredients').classList.remove('d-none');
        document.getElementById('chevron-upIngredients').classList.add('d-none');
        IngredientsSelectDisplay.displayCatchphrase()
    }
    
}

export class AppliancesSelectDisplay {
    
    displayAppliancesList() {
        document.getElementById('appareilsList').classList.toggle('d-none');
        document.getElementById('appareilsList').classList.toggle('width-xl');
        searchByAppareil.classList.toggle('width-xl');
        document.getElementById('appareilsSearchbarContainer').classList.toggle('width-xl');
        document.getElementById('chevron-downAppareil').classList.toggle('d-none');
        document.getElementById('chevron-upAppareil').classList.toggle('d-none');    
    }

    static displayCatchphrase() {
        if((searchByAppareil.classList.contains("width-xl"))){
            searchByAppareil.placeholder = 'Rechcercher un appareil'
        }else{
            searchByAppareil.placeholder = 'Appareil'
        }
    }
}

export class UstensilsSelectDisplay {
    
    displayUstensilesList() {
        document.getElementById('ustensilesList').classList.toggle('d-none');
        document.getElementById('ustensilesList').classList.toggle('width-xl');
        searchByUstensiles.classList.toggle('width-xl');
        document.getElementById('ustensilesSearchbarContainer').classList.toggle('width-xl');
        document.getElementById('chevron-downUstensiles').classList.toggle('d-none');
        document.getElementById('chevron-upUstensiles').classList.toggle('d-none');    
    }

    static displayCatchphrase(){
        if((searchByUstensiles.classList.contains('width-xl'))){
            searchByUstensiles.placeholder = 'Rechercher un ustensile'
        }else{
            searchByUstensiles.placeholder = 'Ustensiles'
        }
    }


}