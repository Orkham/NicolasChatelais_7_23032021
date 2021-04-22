import {recipes} from './recipes.js'

/*
fetch('recipes.json')
.then(function(response){
    return response.json();
})
.then (response=>console.log(response))
*/


/*** Parcourir les recettes et extraire les ingrédients ***/

let ingredientsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    
    for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
        
        if(!ingredientsListToDisplay.includes(recipes[i].ingredients[j].ingredient)){
            ingredientsListToDisplay.push(recipes[i].ingredients[j].ingredient)
        }
        
    }
    
}
//console.log(ingredientsListToDisplay)

/*** Affichage des ingrédients ***/
let ingredientsBox = document.getElementById('ingredientsBox')
function displayIngredient(){
    for(let i = 0 ; i < 30/*ingredientsListToDisplay.length*/ ; i ++){
        let ingredientToDisplay = document.createElement("li");
        ingredientToDisplay.appendChild(document.createTextNode(ingredientsListToDisplay[i]));
        ingredientsBox.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "col-4 ingredientInSearchResult";
    }
    
}
displayIngredient();
/***Ecouteurs dans la liste des ingrédients ***/
const tagsListBox = document.getElementById('tagsList')
for(let i = 0 ; i < ingredientsBox.childElementCount ; i++){
    //console.log(ingredientsBox.children[i])
    ingredientsBox.children[i].addEventListener('click', function addTagInTagsList(e){
        console.log(e.target.innerHTML);
        let newDiv = document.createElement("div");
        newDiv.className = "d-inline-block";
        tagsListBox.appendChild(newDiv);
        let ingredientToDisplay = document.createElement("p");
        ingredientToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
        newDiv.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3";
        let cross = createCancelCross();
        ingredientToDisplay.appendChild(cross);
        cross.addEventListener('click', (e)=>e.target.parentElement.remove())
    })
}
/*****Cancel Cross *****/
let crossArray = document.getElementsByClassName('cancelCross');

/*
function removeSearchResult(resultToRemove){
    resultToRemove.remove();
}
*/

for(let cross of crossArray){
    cross.addEventListener('click', (e)=>e.target.parentElement.remove())
}

function createCancelCross(){
    let cross = document.createElement("i");
    cross.className = "far fa-times-circle pl-2 cancelCross";
    return cross;
}

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

/*****Selects*****/
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

/***Affichage des recettes***/

console.log(recipes)
let recipesBoxContainer = document.getElementById('recipesBoxContainer')


function createRecipeDisplay(){
    let newCard = document.createElement("div");
    newCard.className = "card mb-5";
    newCard.innerHTML = '<svg class="bd-placeholder-img card-img-top" width="100%" height="178" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#C7BEBE"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>';

    let newCardBody = document.createElement("div");
    newCardBody.className = "card-body description pb-5"
    newCard.appendChild(newCardBody)

    let newRecipeTitle = document.createElement("div");
    newRecipeTitle.className = "recipesTitle d-flex justify-content-between pr-0 align-items-center mb-3"
    newCardBody.appendChild(newRecipeTitle);

    let newCardTitle = document.createElement("h2");
    newCardTitle.className = "card-title  mb-0";
    /**/
    newCardTitle.appendChild(document.createTextNode("Lait de Coco"))
    /**/
    newRecipeTitle.appendChild(newCardTitle);

    let newTimingDiv = document.createElement("div");
    newTimingDiv.className = "timing d-flex align-items-center  mb-0";
    newRecipeTitle.appendChild(newTimingDiv);

    let newClockIcon = document.createElement("i");
    newClockIcon.className = "far fa-clock pr-1 d-flex align-items-center mb-0"
    newTimingDiv.appendChild(newClockIcon)
    let newTimingDuration = document.createElement("p");
    newTimingDuration.className = "d-flex align-items-center mb-0 timing__duration";
    /**/
    newTimingDuration.appendChild(document.createTextNode("10 min"))
    /**/
    newTimingDiv.appendChild(newTimingDuration);

    let flexDiv = document.createElement("div");
    flexDiv.className = "d-flex p-0";
    newCardBody.appendChild(flexDiv)

    let newUl = document.createElement("ul");
    newUl.className = "list-group pr-3 w-50";
    flexDiv.appendChild(newUl);

    let newLi = document.createElement("li");
    newLi.className = "list-group-item ingredient d-flex p-0";
    newUl.appendChild(newLi);
    

    /***Boucle pour les ingrédients ***/

    let newIngredient = document.createElement("p");
    newIngredient.className = "mb-0 font-weight-bold"
    /**/
    newIngredient.appendChild(document.createTextNode("Lait de coco:"))
    /**/
    newLi.appendChild(newIngredient);

    let newQuantity = document.createElement("p");
    newQuantity.className = "mb-0 pl-1";
    /**/
    newQuantity.appendChild(document.createTextNode("400ml"))
    /**/
    newLi.appendChild(newQuantity);

/******************************/

    let newInstructions = document.createElement("p");
    newInstructions.className = "instructions w-50"
    /**/
    newInstructions.appendChild(document.createTextNode("Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée."))
    /**/
    flexDiv.appendChild(newInstructions);



    recipesBoxContainer.appendChild(newCard)
}
createRecipeDisplay()