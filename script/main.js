import { recipes } from './recipes.js'
import { Recipe } from './Recipe.js'
import { Ingredients } from './Ingredients.js';
import { Appliance } from './Appliance.js';
import { Ustensils } from './Ustensils.js';
import { IngredientsSelectDisplay, AppliancesSelectDisplay, UstensilsSelectDisplay } from './SelectsDisplay.js'
import { clearListDisplay, cleanWord } from './utils.js'
import { listsUpdate } from './listsUpdate.js'
import { ingredientsDisplay } from './ingredientsDisplay.js'
import { appliancesDisplay } from './appliancesDisplay.js'
import { initialUstensilsDisplay } from './ustensilsDisplay.js'
import { collectResults } from './resultsCollectFunction.js'
import { recipesDisplay } from './recipesDisplayFunction.js'
import { getRecipesFromTags }  from './filterByTags.js'


/***DECLARATIONS***/
const ingredientsBox = document.getElementById('ingredientsBox');
const appareilsBox = document.getElementById('appareilsBox');
const ustensilesBox = document.getElementById('ustensilesBox');
export const recipesBoxContainer = document.getElementById('recipesBoxContainer');
export const tagsListBox = document.getElementById('tagsList');
export let tagsListArray = []


/***Fonctionnalités d'affichage***/
let searchButton = document.getElementById('searchIcon');
let searchInput = document.getElementById('formGroupExampleInput');
let searchByIngredients = document.getElementById('inputIngredients');
let searchByAppareil = document.getElementById('inputAppareil');
let searchByUstensiles = document.getElementById('inputUstensiles')


function isInputLongEnough(input){
    if(input>2){
        return true
    }
}

let ingredientsToDisplay = Ingredients.getIngredientsFromRecipes(recipes);
let appliancesToDisplay = Appliance.getAppliancesFromRecipes(recipes); /**/
//let ustensilsToDisplay = Ustensils.getUstensilsFromRecipes(recipes); /**/

export let recipesToDisplay = [];

export function displaySearchByInputResults(){

    let searchInputLength = searchInput.value.length;

    if (searchInputLength == 0){
        clearListDisplay(recipesBoxContainer)
        initialize()

    }else if(isInputLongEnough(searchInputLength)){
        
        let searchKeyWord = cleanWord(searchInput.value.toLowerCase().trim());
        
        //ingredientsToDisplay = [];
        //appliancesToDisplay = [];
        //ustensilsToDisplay = [];
        
        recipesToDisplay = [];
        collectResults(recipesToDisplay, recipes, searchKeyWord)
        Recipe.displayRecipes(recipesToDisplay, recipesToDisplay.length)
        ingredientsToDisplay = Ingredients.getIngredientsFromRecipes(recipesToDisplay)

        appliancesToDisplay = Appliance.getAppliancesFromRecipes(recipesToDisplay) //
        //ustensilsToDisplay =  Ustensils.getUstensilsFromRecipes(recipesToDisplay);//

        listsUpdate(ingredientsToDisplay,appliancesToDisplay/*,ustensilsToDisplay*/)
        return recipesToDisplay;
    }
}


function displaySearchByIngredientsResults(){
    
    let searchByIngredientsLength = searchByIngredients.value.length;
    
    let searchByIngredientsValue = searchByIngredients.value;

    if(searchByIngredientsLength > 0 && searchInput.value.length > 0){
        
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
        ingredientsDisplay(recipes);
    }else if(searchByIngredientsLength > 0 && searchInput.value.length == 0){
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
    }
    
}

function displaySearchByAppareilResults(){
    
    let searchByAppareilLength = searchByAppareil.value.length;
    
    let searchByAppareilValue = searchByAppareil.value;
    
    /* Implémenter même méthode que pour les ingrédients */
    if(isInputLongEnough(searchByAppareilLength)){
        console.log(searchByAppareilValue)
    }
    
}

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
//searchByIngredients.onblur = IngredientsSelectDisplay.focusLost

searchByAppareil.addEventListener('input', displaySearchByAppareilResults);
searchByAppareil.addEventListener('click', AppliancesSelectDisplay.displayCatchphrase)
//searchByAppareil.onblur = AppliancesSelectDisplay.focusLost //

searchByUstensiles.addEventListener('input', displaySearchByUstensilesResults);
searchByUstensiles.addEventListener('click', UstensilsSelectDisplay.displayCatchphrase)
//searchByUstensiles = UstensilsSelectDisplay.focusLost //

/***Affichage initial des recettes***/
function initialize(){
    Recipe.displayRecipes(recipes, 6);
    ingredientsDisplay(recipes);
    appliancesDisplay(recipes);
    initialUstensilsDisplay();/*changer en ustensilsDisplay(recipes)*/
    
}
window.addEventListener('DOMContentLoaded', initialize)

/*
let test = document.getElementById('test');
test.addEventListener('click', displayTagsList)


function displayTagsList(){
    console.log(tagsListArray)
    console.log(recipesToDisplay)
}
*/
