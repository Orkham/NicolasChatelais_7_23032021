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
import { initialUstensilsDisplay } from './ustensilsDisplay.js'
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
let appliancesToDisplay = Appliance.getAppliancesFromRecipes(recipes); /**/
//let ustensilsToDisplay = Ustensils.getUstensilsFromRecipes(recipes); /**/


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
        //ustensilsToDisplay =  Ustensils.getUstensilsFromRecipes(recipesToDisplay);
        listsUpdate(ingredientsToDisplay,appliancesToDisplay/*,ustensilsToDisplay*/)
        return recipesToDisplay;
    }
}

/**
 * Filtre et affiche les résultats de la recherche par ingrédient
 */
function displaySearchByIngredientsResults(){
    
    let searchByIngredientsLength = searchByIngredients.value.length;
    let searchByIngredientsValue = searchByIngredients.value;

    if(searchByIngredientsLength > 0/* && searchInput.value.length > 0*/){
        
        let filteredList = [];
        for(let i = 0 ; i < ingredientsToDisplay.length ; i++){
            if((cleanWord(ingredientsToDisplay[i]).toLowerCase().trim()).includes(cleanWord(searchByIngredientsValue.toLowerCase().trim()))){
                clearListDisplay(ingredientsBox);
                filteredList.push(ingredientsToDisplay[i])
            } 
        }
        for(let j = 0 ; j < filteredList.length ; j++){
            Ingredients.displayIngredient(filteredList[j])
        }
        Ingredients.ingredientsListener(ingredientsBox)
        
    }else if(searchByIngredientsLength === 0){
        ingredientsDisplay(displaySearchByInputResults());
    }/*else if(searchByIngredientsLength > 0 && searchInput.value.length == 0){
        let filteredList = [];
        let initialIngredientsToDisplay = Ingredients.getIngredientsFromRecipes(recipes);
        for(let i = 0 ; i < initialIngredientsToDisplay.length ; i++){
            if((cleanWord(initialIngredientsToDisplay[i]).toLowerCase().trim()).includes(cleanWord(searchByIngredientsValue.toLowerCase().trim()))){
                clearListDisplay(ingredientsBox);
                filteredList.push(initialIngredientsToDisplay[i])
            }
        }
        for(let j = 0 ; j < filteredList.length ; j++){
            Ingredients.displayIngredient(filteredList[j])
        }
        Ingredients.ingredientsListener(ingredientsBox)
    }*/
}
/**
 * Filtre et affiche les résultats de la recherche par appareil
 */
function displaySearchByAppareilResults(){
    
    let searchByAppareilLength = searchByAppareil.value.length;
    let searchByAppareilValue = searchByAppareil.value;
    
    /* Implémenter même méthode que pour les ingrédients */
    if(isInputLongEnough(searchByAppareilLength)){
        console.log(searchByAppareilValue)
    }
    
}
/**
 * Filtre et affiche les résultats de la recherche par ustensiles
 */
function displaySearchByUstensilesResults(){
    
    let searchByUstensilesLength = searchByUstensiles.value.length;
    let searchByUstensilesValue = searchByUstensiles.value;
    /* Implémenter même méthode que pour les ingrédients */
    if(isInputLongEnough(searchByUstensilesLength)){
        console.log(searchByUstensilesValue)
    }
}


searchInput.addEventListener('input', displaySearchByInputResults);
searchByIngredients.addEventListener('input', displaySearchByIngredientsResults);
searchByIngredients.addEventListener('click', IngredientsSelectDisplay.displayCatchphrase);
searchByIngredients.onblur = IngredientsSelectDisplay.focusLost

searchByAppareil.addEventListener('input', displaySearchByAppareilResults);
searchByAppareil.addEventListener('click', AppliancesSelectDisplay.displayCatchphrase)
searchByAppareil.onblur = AppliancesSelectDisplay.focusLost

searchByUstensiles.addEventListener('input', displaySearchByUstensilesResults);
searchByUstensiles.addEventListener('click', UstensilsSelectDisplay.displayCatchphrase)
searchByUstensiles.onblur = UstensilsSelectDisplay.focusLost 


/**
 * Affichage initial des recettes
 */
function initialize(){
    searchInput.value = ""
    //ajouter clean des recherches par appareils et par ustensiles
    let recipesToDisplay = Recipe.displayRecipes(recipes, 6);
    ingredientsDisplay(recipes);
    appliancesDisplay(recipes);
    initialUstensilsDisplay();/*changer en ustensilsDisplay(recipes)*/
}
window.addEventListener('DOMContentLoaded', initialize)
