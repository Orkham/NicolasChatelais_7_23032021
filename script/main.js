import { recipes } from './recipes.js'
import { Recipe } from './Recipe.js'
import { Ingredients } from './Ingredients.js';
import { Appliance } from './Appliance.js';
import { Ustensils } from './Ustensils.js';
import { IngredientsSelectDisplay, AppliancesSelectDisplay, UstensilsSelectDisplay } from './SelectsDisplay.js'
import { clearListDisplay, cleanWord, isInputLongEnough } from './utils.js'
import { listsUpdate } from './listsUpdate.js'
import { ingredientsDisplay } from './ingredientsDisplay.js'
import { appliancesDisplay } from './appliancesDisplay.js'
import { ustensilsDisplay } from './ustensilsDisplay.js'
import { collectResults } from './resultsCollectFunction.js'


/***DECLARATIONS***/
const ingredientsBox = document.getElementById('ingredientsBox');
const appareilsBox = document.getElementById('appareilsBox');
const ustensilesBox = document.getElementById('ustensilesBox');
export const recipesBoxContainer = document.getElementById('recipesBoxContainer');
export const tagsListBox = document.getElementById('tagsList');
export let tagsListArray = []
export let recipesToDisplay = [];

/***Fonctionnalités d'affichage***/
let searchButton = document.getElementById('searchIcon');
let searchInput = document.getElementById('formGroupExampleInput');
let searchByIngredients = document.getElementById('inputIngredients');
let searchByAppareil = document.getElementById('inputAppareil');
let searchByUstensiles = document.getElementById('inputUstensiles')


let ingredientsToDisplay = Ingredients.getIngredientsFromRecipes(recipes);
let appliancesToDisplay = Appliance.getAppliancesFromRecipes(recipes); 
let ustensilsToDisplay = Ustensils.getUstensilsFromRecipes(recipes);


/**
 * Renvoie les recettes correspondantes à la recherche principale par input
 * @returns array des recettes à afficher
 */
export function displaySearchByInputResults(){
    let searchInputLength = searchInput.value.length;
    if (searchInputLength == 0){
        clearListDisplay(recipesBoxContainer)
        initialize()
        return recipes
    }else if(isInputLongEnough(searchInputLength)){
        let searchKeyWord = cleanWord(searchInput.value.toLowerCase().trim());
        recipesToDisplay = [];
        collectResults(recipesToDisplay, recipes, searchKeyWord)
        Recipe.displayRecipes(recipesToDisplay, recipesToDisplay.length)
        ingredientsToDisplay = Ingredients.getIngredientsFromRecipes(recipesToDisplay)
        appliancesToDisplay = Appliance.getAppliancesFromRecipes(recipesToDisplay)
        ustensilsToDisplay =  Ustensils.getUstensilsFromRecipes(recipesToDisplay);
        listsUpdate(ingredientsToDisplay, appliancesToDisplay, ustensilsToDisplay)
        return recipesToDisplay;
    }
}

/**
 * Filtre et affiche les résultats de la recherche par ingrédient
 */
function displaySearchByIngredientsResults(){
    
    let searchByIngredientsLength = searchByIngredients.value.length;
    let searchByIngredientsValue = searchByIngredients.value;

    if(searchByIngredientsLength > 0){
        
        let filteredList = [];
        for(let i = 0 ; i < ingredientsToDisplay.length ; i++){
            if((cleanWord(ingredientsToDisplay[i]).toLowerCase().trim()).includes(cleanWord(searchByIngredientsValue.toLowerCase().trim()))){
                filteredList.push(ingredientsToDisplay[i])
            } 
        }
        clearListDisplay(ingredientsBox);
        if(filteredList.length == 0){
            document.getElementById('noResultIngredientsBox').classList.remove('d-none')
        }else{
            document.getElementById('noResultIngredientsBox').classList.add('d-none')
        }
        for(let j = 0 ; j < filteredList.length ; j++){
            Ingredients.displayIngredient(filteredList[j])
        }
        Ingredients.ingredientsListener(ingredientsBox)
        
    }else if(searchByIngredientsLength === 0){
        ingredientsDisplay(displaySearchByInputResults());
    }
}
/**
 * Filtre et affiche les résultats de la recherche par appareil
 */
function displaySearchByAppareilResults(){
    
    let searchByAppareilLength = searchByAppareil.value.length;
    let searchByAppareilValue = searchByAppareil.value;
    
    if(searchByAppareilLength > 0){

        let filteredList = []
        for(let i = 0 ; i < appliancesToDisplay.length ; i++){
            if((cleanWord(appliancesToDisplay[i]).toLowerCase().trim()).includes(cleanWord(searchByAppareilValue.toLowerCase().trim()))){
                filteredList.push(appliancesToDisplay[i])
            } 
        }
        clearListDisplay(appareilsBox);
        if(filteredList.length == 0){
            document.getElementById('noResultAppareilsBox').classList.remove('d-none')
        }else{
            document.getElementById('noResultAppareilsBox').classList.add('d-none')
        }
        for(let j = 0 ; j < filteredList.length ; j++){
            Appliance.displayAppliance(filteredList[j])
        }
        Appliance.appliancesListener(appareilsBox)
    }else if(searchByAppareilLength === 0){
        appliancesDisplay(displaySearchByInputResults())
    }
    
    
}
/**
 * Filtre et affiche les résultats de la recherche par ustensiles
 */
function displaySearchByUstensilesResults(){
    
    let searchByUstensilesLength = searchByUstensiles.value.length;
    let searchByUstensilesValue = searchByUstensiles.value;
    
    if(searchByUstensilesLength > 0){

        let filteredList = []
        for(let i = 0 ; i < ustensilsToDisplay.length ; i++){
            if((cleanWord(ustensilsToDisplay[i]).toLowerCase().trim()).includes(cleanWord(searchByUstensilesValue.toLowerCase().trim()))){
                filteredList.push(ustensilsToDisplay[i])
            } 
        }
        clearListDisplay(ustensilesBox);
        if(filteredList.length == 0){
            document.getElementById('noResultUstensilsBox').classList.remove('d-none')
        }else{
            document.getElementById('noResultUstensilsBox').classList.add('d-none')
        }
        for(let j = 0 ; j < filteredList.length ; j++){
            Ustensils.displayUstensil(filteredList[j])
        }
        Ustensils.ustensilsListener(ustensilesBox)
    }else if(searchByUstensilesLength === 0){
        ustensilsDisplay(displaySearchByInputResults())
    }
}


searchInput.addEventListener('input', displaySearchByInputResults);
searchByIngredients.addEventListener('input', displaySearchByIngredientsResults);
searchByIngredients.addEventListener('click', IngredientsSelectDisplay.displayCatchphrase);
searchByIngredients.addEventListener('click', AppliancesSelectDisplay.focusLost);
searchByIngredients.addEventListener('click', UstensilsSelectDisplay.focusLost);

searchByAppareil.addEventListener('input', displaySearchByAppareilResults);
searchByAppareil.addEventListener('click', AppliancesSelectDisplay.displayCatchphrase)
searchByAppareil.addEventListener('click', IngredientsSelectDisplay.focusLost)
searchByAppareil.addEventListener('click', UstensilsSelectDisplay.focusLost)

searchByUstensiles.addEventListener('input', displaySearchByUstensilesResults);
searchByUstensiles.addEventListener('click', UstensilsSelectDisplay.displayCatchphrase)
searchByUstensiles.addEventListener('click', IngredientsSelectDisplay.focusLost)
searchByUstensiles.addEventListener('click', AppliancesSelectDisplay.focusLost)

window.addEventListener('click', IngredientsSelectDisplay.focusLost)
window.addEventListener('click', AppliancesSelectDisplay.focusLost)
window.addEventListener('click', UstensilsSelectDisplay.focusLost)

/**
 * Affichage initial des recettes
 */
function initialize(){
    searchInput.value = ""
    let recipesToDisplay = Recipe.displayRecipes(recipes, 6);
    listsUpdate(Ingredients.getIngredientsFromRecipes(recipes), Appliance.getAppliancesFromRecipes(recipes), Ustensils.getUstensilsFromRecipes(recipes))
}
window.addEventListener('DOMContentLoaded', initialize)
