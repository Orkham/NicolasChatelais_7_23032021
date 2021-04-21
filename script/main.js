/*
fetch('recipes.json')
.then(function(response){
    return response.json();
})
.then (response=>console.log(response))
*/

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
        console.log(searchInput.value)
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

/********************************************/
let ingredientsList = document.getElementById('ingredientsList');
let ingredientsSearchbarContainer = document.getElementById('ingredientsSearchbarContainer');

searchByIngredients.addEventListener('click', displayIngredientsList);

function displayIngredientsList(){
    ingredientsList.classList.toggle('d-none');
    ingredientsList.classList.toggle('width-xl');
    searchByIngredients.classList.toggle('width-xl');
    ingredientsSearchbarContainer.classList.toggle('width-xl');
}