const searchByIngredients = document.getElementById('inputIngredients');
const searchByAppareil = document.getElementById('inputAppareil');
const searchByUstensiles = document.getElementById('inputUstensiles');

export class IngredientsSelectDisplay {
    
    displayIngredientsList() {
        document.getElementById('ingredientsList').classList.toggle('d-none');
        document.getElementById('ingredientsList').classList.toggle('width-xl');
        searchByIngredients.classList.toggle('width-xl');
        document.getElementById('ingredientsSearchbarContainer').classList.toggle('width-xl');
        document.getElementById('chevron-downIngredients').classList.toggle('d-none');
        document.getElementById('chevron-upIngredients').classList.toggle('d-none');    
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
}