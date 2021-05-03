import {recipes} from './recipes.js'
import {Recipe} from './Recipe.js'
import {Ingredients} from './Ingredients.js'
import {Appliance} from './Appliance.js'
import {Ustensils} from './Ustensils.js'

/***DECLARATIONS***/
const ingredientsBox = document.getElementById('ingredientsBox');
const appareilsBox = document.getElementById('appareilsBox');
const ustensilesBox = document.getElementById('ustensilesBox');
export const tagsListBox = document.getElementById('tagsList');

/***Tableau de titre des recettes***/
let recipesTitleArray = [];
for(let i = 0 ; i < recipes.length ; i++){
    recipesTitleArray.push(recipes[i].name)
}


/*** Parcourir les recettes et extraire les ingrédients ***/

let ingredientsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
        let ingredient = new Ingredients;
        ingredient.ingredientToDisplay(recipes[i].ingredients[j].ingredient, ingredientsListToDisplay)
    }
}

/*** Affichage des ingrédients ***/

for(let i = 0 ; i < 30 ; i++){
    Ingredients.displayIngredient(ingredientsListToDisplay[i])
}

/*** Parcourir les recettes et extraire les appareils ***/

let appareilsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    let appareil = new Appliance;
    appareil.applianceToDisplay(recipes[i].appliance, appareilsListToDisplay)
}

/*** Affichage des appareils ***/

for(let appliance of appareilsListToDisplay){
    Appliance.displayAppliance(appliance)
}

/*** Parcourir les recettes et extraire les ustensiles***/

let ustensilesListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    for(let j = 0 ; j < recipes[i].ustensils.length ; j++){
        let ustensil = new Ustensils;
        ustensil.ustensilToDisplay(recipes[i].ustensils[j], ustensilesListToDisplay)
    }
}

/*** Affichage des ustensiles ***/
for(let ustensil of ustensilesListToDisplay){
    Ustensils.displayUstensil(ustensil)
}





/***Ecouteurs dans la liste des ingrédients***/
Ingredients.ingredientsListener(ingredientsBox)
/*
for(let i = 0 ; i < ingredientsBox.childElementCount ; i++){
    
    ingredientsBox.children[i].addEventListener('click', function addTagInTagsList(e){
        console.log(e.target.innerHTML);
        let newDiv = document.createElement("div");
        newDiv.className = "d-inline-block";
        tagsListBox.appendChild(newDiv);
        let ingredientToDisplay = document.createElement("p");
        ingredientToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
        newDiv.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
        let cross = createCancelCross();
        ingredientToDisplay.appendChild(cross);
        cross.addEventListener('click', (e)=>e.target.parentElement.remove())
    })
}
*/
/***Ecouteurs dans la liste des appareils***/
for(let i = 0 ; i < appareilsBox.childElementCount ; i++){
    //console.log(appareilsBox.children[i])
    appareilsBox.children[i].addEventListener('click', function addTagInTagsList(e){
        console.log(e.target.innerHTML);
        let newDiv = document.createElement("div");
        newDiv.className = "d-inline-block";
        tagsListBox.appendChild(newDiv);
        let appareiltToDisplay = document.createElement("p");
        appareiltToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
        newDiv.appendChild(appareiltToDisplay);
        appareiltToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
        let cross = createCancelCross();
        appareiltToDisplay.appendChild(cross);
        cross.addEventListener('click', (e)=>e.target.parentElement.remove())
    })
}
/***Ecouteurs dans la liste des ustensiles***/
for(let i = 0 ; i < ustensilesBox.childElementCount ; i++){
    //console.log(ustensilesBox.children[i])
    ustensilesBox.children[i].addEventListener('click', function addTagInTagsList(e){
        console.log(e.target.innerHTML);
        let newDiv = document.createElement("div");
        newDiv.className = "d-inline-block";
        tagsListBox.appendChild(newDiv);
        let ustensileToDisplay = document.createElement("p");
        ustensileToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
        newDiv.appendChild(ustensileToDisplay);
        ustensileToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
        let cross = createCancelCross();
        ustensileToDisplay.appendChild(cross);
        cross.addEventListener('click', (e)=>e.target.parentElement.remove())
    })
}





/*****Cancel Cross *****/
/*
let crossArray = document.getElementsByClassName('cancelCross');

for(let cross of crossArray){
    cross.addEventListener('click', (e)=>e.target.parentElement.remove())
}
*/
/*
function createCancelCross(){
    let cross = document.createElement("i");
    cross.className = "far fa-times-circle pl-2 cancelCross";
    cross.addEventListener('click', (e)=>e.target.parentElement.remove())
    return cross;
}
*/
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
        //console.log(searchKeyWord);
        //let isInArray = recipesTitleArray.includes(searchKeyWord);
        //console.log(isInArray);
        let recipesToDisplay = [];

        for(let i = 0 ; i < recipesTitleArray.length ; i++){

            if((recipesTitleArray[i].toLowerCase()).includes(searchKeyWord)){
                
                recipesToDisplay.push((recipesTitleArray[i]))
                
            }   

        }
        console.log(recipesToDisplay);
        
        let recipesToDisplay2 = [];
        recipesTitleArray.filter(function(recipe){
            
            if(recipe.toLowerCase().includes(searchKeyWord.toLowerCase())){
                console.log(recipe)
                recipesToDisplay2.push(recipe)
            }
        });
             
        console.log(recipesToDisplay2);
          
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

/*****Selects*****/
/*Ingredients*/
let ingredientsList = document.getElementById('ingredientsList');
let ingredientsSearchbarContainer = document.getElementById('ingredientsSearchbarContainer');
let chevrondownIngredients = document.getElementById('chevron-downIngredients');
let chevronupIngredients = document.getElementById('chevron-upIngredients');

searchByIngredients.addEventListener('click', displayIngredientsList);

function displayIngredientsList(){
    ingredientsList.classList.toggle('d-none');
    ingredientsList.classList.toggle('width-xl');
    searchByIngredients.classList.toggle('width-xl');
    ingredientsSearchbarContainer.classList.toggle('width-xl');
    chevrondownIngredients.classList.toggle('d-none');
    chevronupIngredients.classList.toggle('d-none');
}
/*Appareil*/
let appareilsList = document.getElementById('appareilsList');
let appareilsSearchbarContainer = document.getElementById('appareilsSearchbarContainer');
let chevrondownAppareils = document.getElementById('chevron-downAppareil');
let chevronupAppareils = document.getElementById('chevron-upAppareil');

searchByAppareil.addEventListener('click', displayAppareilsList);

function displayAppareilsList(){
    appareilsList.classList.toggle('d-none');
    appareilsList.classList.toggle('width-xl');
    searchByAppareil.classList.toggle('width-xl');
    appareilsSearchbarContainer.classList.toggle('width-xl');
    chevrondownAppareils.classList.toggle('d-none');
    chevronupAppareils.classList.toggle('d-none');
}
/*Ustensiles*/
let ustensilesList = document.getElementById('ustensilesList');
let ustensilesSearchbarContainer = document.getElementById('ustensilesSearchbarContainer');
let chevrondownUstensiles = document.getElementById('chevron-downUstensiles');
let chevronupUstensiles = document.getElementById('chevron-upUstensiles');

searchByUstensiles.addEventListener('click', displayUstensilesList);

function displayUstensilesList(){
    ustensilesList.classList.toggle('d-none');
    ustensilesList.classList.toggle('width-xl');
    searchByUstensiles.classList.toggle('width-xl');
    ustensilesSearchbarContainer.classList.toggle('width-xl');
    chevrondownUstensiles.classList.toggle('d-none');
    chevronupUstensiles.classList.toggle('d-none');
}





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