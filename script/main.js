import {recipes} from './recipes.js'
import {Recipe} from './Recipe.js'


/***DECLARATIONS***/
const ingredientsBox = document.getElementById('ingredientsBox');
const appareilsBox = document.getElementById('appareilsBox');
const ustensilesBox = document.getElementById('ustensilesBox');
export const tagsListBox = document.getElementById('tagsList');

/***Tableau des titres des recettes***/
let recipesTitleArray = [];
for(let i = 0 ; i < recipes.length ; i++){
    recipesTitleArray.push(recipes[i].name)
}
/*** Tableau des listes des ingrédients des recettes ***/


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
        let isInArray = recipesTitleArray.includes(searchKeyWord);
        let recipesToDisplay = [];
        for(let i = 0 ; i < recipesTitleArray.length ; i++){
            if((recipesTitleArray[i].toLowerCase()).includes(searchKeyWord)){
                recipesToDisplay.push((recipesTitleArray[i]))
            } 
        }
        for(let i = 0 ; i < recipes.length ; i++){
            for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
                if (recipes[i].ingredients[j].ingredient.includes(searchKeyWord)){
                    recipesToDisplay.push(recipes[i].name)
                }
            }
        }
        for(let i = 0 ; i < recipes.length ; i++){
            if(recipes[i].description.includes(searchKeyWord)){
                recipesToDisplay.push(recipes[i].name)
            }
        }
        console.log(recipesToDisplay);
        let recipesArrayToDisplay = []
        for(let i = 0 ; i < recipesToDisplay.length ; i++){
            recipesArrayToDisplay.push(Recipe.getRecipeByName(recipesToDisplay[i], recipes));
            
        }
        console.log(recipesArrayToDisplay)
        for(let i = 0 ; i < recipesArrayToDisplay.length ; i++){
            let recipe = new Recipe(recipesArrayToDisplay[i])
            recipe.createRecipeDisplay();
        }
        /*
        let recipesToDisplay2 = [];
        recipesTitleArray.filter(function(recipe){
            
            if(recipe.toLowerCase().includes(searchKeyWord.toLowerCase())){
                console.log(recipe)
                recipesToDisplay2.push(recipe)
            }
        });
             
        console.log(recipesToDisplay2);
          */
    }
    
}
//console.log(Recipe.getRecipeByName('Coco', recipes))

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

let recipesBoxContainer = document.getElementById('recipesBoxContainer')

for(let i = 0 ; i < 6 ; i++){
    let recipeToDisplay = new Recipe(recipes[i])
    recipeToDisplay.createRecipeDisplay()
}


function cleanDisplayIngredientsList(listToClean){
    /*rajouter tableau vide de la liste*/
    while(listToClean.children.length > 0){
        listToClean.removeChild(listToClean.children[0])
    }
}
//cleanDisplayIngredientsList(ingredientsBox);

//Ingredients.displayIngredient("coucou"); 