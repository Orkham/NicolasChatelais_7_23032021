import { recipes } from './recipes.js'
import { Recipe } from './Recipe.js'
import { Ingredients } from './Ingredients.js';
import { Appliance } from './Appliance.js';
import { Ustensils } from './Ustensils.js';
import { IngredientsSelectDisplay, AppliancesSelectDisplay, UstensilsSelectDisplay } from './SelectsDisplay.js'


/***DECLARATIONS***/
const ingredientsBox = document.getElementById('ingredientsBox');
const appareilsBox = document.getElementById('appareilsBox');
const ustensilesBox = document.getElementById('ustensilesBox');
let recipesBoxContainer = document.getElementById('recipesBoxContainer');
export const tagsListBox = document.getElementById('tagsList');


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

function displaySearchByInputResults(){
    let searchInputLength = searchInput.value.length;
    
    if(isInputLongEnough(searchInputLength)){
        
        let searchKeyWord = searchInput.value.toLowerCase();

        let recipesToDisplay = [];
        let ingredientsToDisplay = [];
        let appliancesToDisplay = [];
        let ustensilsToDisplay = [];

        for(let i = 0 ; i < recipes.length ; i++){
            if((recipes[i].name.toLowerCase()).includes(searchKeyWord)){
                if(!(recipesToDisplay.includes(recipes[i]))){
                    recipesToDisplay.push(recipes[i])
                }
            } 
        }
        for(let i = 0 ; i < recipes.length ; i++){
            for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
                if ((recipes[i].ingredients[j].ingredient.toLowerCase()).includes(searchKeyWord)){
                    if(!(recipesToDisplay.includes(recipes[i]))){
                        recipesToDisplay.push(recipes[i])
                    }
                }
            }
        }
        for(let i = 0 ; i < recipes.length ; i++){
            if((recipes[i].description.toLowerCase()).includes(searchKeyWord)){
                if(!(recipesToDisplay.includes(recipes[i]))){
                        recipesToDisplay.push(recipes[i])
                    }
            }
        }
        console.log(recipesToDisplay);
        clearListDisplay(recipesBoxContainer)

        for(let i = 0 ; i < recipesToDisplay.length ; i++){
            let recipe = new Recipe(recipesToDisplay[i])
            recipe.createRecipeDisplay();
            
            for(let ingredient of recipe.ingredients){
                if(!(ingredientsToDisplay.includes(ingredient.ingredient))){
                    ingredientsToDisplay.push(ingredient.ingredient)
                }
            };

            for(let ustensil of recipe.ustensils){
                if(!(ustensilsToDisplay.includes(ustensil))){
                    ustensilsToDisplay.push(ustensil)
                }
            }
        }
        
        for(let recipe of recipesToDisplay){
            if(!(appliancesToDisplay.includes(recipe.appliance))){
                appliancesToDisplay.push(recipe.appliance)
            }
        }

        
        

        /* Mise à jour de la liste des ingrédients*/
        clearListDisplay(ingredientsBox);
        for(let i = 0 ; i < ingredientsToDisplay.length ; i++){
            Ingredients.displayIngredient(ingredientsToDisplay[i])
        }
        Ingredients.ingredientsListener(ingredientsBox)

        /* Mise à jour de la liste des appareils*/
        clearListDisplay(appareilsBox);
        for(let i = 0 ; i < appliancesToDisplay.length ; i++){
            Appliance.displayAppliance(appliancesToDisplay[i])
        }
        Appliance.appliancesListener(appareilsBox);


        /* Mise à jour de la liste des ustensiles*/
        clearListDisplay(ustensilesBox);
        for(let i = 0 ; i < ustensilsToDisplay.length ; i++){
            Ustensils.displayUstensil(ustensilsToDisplay[i])
        }
        Ustensils.ustensilsListener(ustensilesBox);
    }
    
}

function displaySearchByIngredientsResults(){
    
    let searchByIngredientsLength = searchByIngredients.value.length;
    
    let searchByIngredientsValue = searchByIngredients.value;

    if(isInputLongEnough(searchByIngredientsLength)){
        console.log(searchByIngredientsValue)
    }
    
}

function displaySearchByAppareilResults(){
    
    let searchByAppareilLength = searchByAppareil.value.length;
    
    let searchByAppareilValue = searchByAppareil.value;
    
    
    if(isInputLongEnough(searchByAppareilLength)){
        console.log(searchByAppareilValue)
    }
    
}

function displaySearchByUstensilesResults(){
    
    let searchByUstensilesLength = searchByUstensiles.value.length;
    
    let searchByUstensilesValue = searchByUstensiles.value;

    if(isInputLongEnough(searchByUstensilesLength)){
        console.log(searchByUstensilesValue)
    }
}


searchInput.addEventListener('input', displaySearchByInputResults);
searchByIngredients.addEventListener('input', displaySearchByIngredientsResults);
searchByIngredients.addEventListener('click', IngredientsSelectDisplay.displayCatchphrase);

searchByAppareil.addEventListener('input', displaySearchByAppareilResults);
searchByAppareil.addEventListener('click', AppliancesSelectDisplay.displayCatchphrase)

searchByUstensiles.addEventListener('input', displaySearchByUstensilesResults);
searchByUstensiles.addEventListener('click', UstensilsSelectDisplay.displayCatchphrase)

/***Affichage initial des recettes***/
window.addEventListener('DOMContentLoaded', Recipe.recipesDisplay(recipes, 6))



function clearListDisplay(listToClean){
    
    while(listToClean.childNodes.length !== 1){
        (listToClean.childNodes[1]).remove()
    }

}

let test = document.getElementById('test');
test.addEventListener('click', searchByTagslist)

let tagsList = document.getElementById('tagsList');
function searchByTagslist(){
    let tagsListArray = []
    console.log(tagsList)
}
