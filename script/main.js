import {recipes} from './recipes.js'
import {Recipe} from './Recipe.js'


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
        //let isInArray = recipesTitleArray.includes(searchKeyWord);
        let recipesToDisplay = [];
        for(let i = 0 ; i < recipes.length ; i++){
            if((recipes[i].name.toLowerCase()).includes(searchKeyWord)){
                recipesToDisplay.push((recipes[i]))
            } 
        }
        for(let i = 0 ; i < recipes.length ; i++){
            for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
                if (recipes[i].ingredients[j].ingredient.includes(searchKeyWord)){
                    recipesToDisplay.push(recipes[i])
                }
            }
        }
        for(let i = 0 ; i < recipes.length ; i++){
            if(recipes[i].description.includes(searchKeyWord)){
                recipesToDisplay.push(recipes[i])
            }
        }
        console.log(recipesToDisplay);
        cleanDisplayIngredientsList(recipesBoxContainer)
        for(let i = 0 ; i < recipesToDisplay.length ; i++){
            let recipe = new Recipe(recipesToDisplay[i])
            recipe.createRecipeDisplay();
        }

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
searchByAppareil.addEventListener('input', displaySearchByAppareilResults);
searchByUstensiles.addEventListener('input', displaySearchByUstensilesResults);



/***Affichage initial des recettes***/

for(let i = 0 ; i < 6 ; i++){
    let recipeToDisplay = new Recipe(recipes[i])
    recipeToDisplay.createRecipeDisplay()
}


function cleanDisplayIngredientsList(listToClean){
    
    console.log(listToClean)
    
    while(listToClean.childNodes.length !== 1){
        (listToClean.childNodes[1]).remove()
    }

}

let testButton = document.getElementById('test');
testButton.addEventListener('click', ()=>{cleanDisplayIngredientsList(ingredientsBox)})
