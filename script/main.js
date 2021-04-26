import {recipes} from './recipes.js'
import {DisplayRecipes} from './DisplayRecipes.js'

//console.log(recipes)

/***Tableau de titre des recettes***/
let recipesTitleArray = [];
for(let i = 0 ; i < recipes.length ; i++){
    
    recipesTitleArray.push(recipes[i].name)
}


/*** Parcourir les recettes et extraire les ingrédients ***/

let ingredientsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    
    for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
        
        if(!ingredientsListToDisplay.includes(recipes[i].ingredients[j].ingredient)){
            ingredientsListToDisplay.push(recipes[i].ingredients[j].ingredient)
        }
        
    }
    
}

/*** Affichage des ingrédients ***/
let ingredientsBox = document.getElementById('ingredientsBox')
function displayIngredient(){
    for(let i = 0 ; i < 30/*ingredientsListToDisplay.length*/ ; i ++){
        let ingredientToDisplay = document.createElement("li");
        ingredientToDisplay.appendChild(document.createTextNode(ingredientsListToDisplay[i]));
        ingredientsBox.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "col-4";
    }
    
}
displayIngredient();

/*** Parcourir les recettes et extraire les appareils ***/

let appareilsListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    
    if(!appareilsListToDisplay.includes(recipes[i].appliance)){
        appareilsListToDisplay.push(recipes[i].appliance)
    }
    
}

/*** Affichage des appareils ***/
let appareilsBox = document.getElementById('appareilsBox')
function displayAppareils(){
    for(let i = 0 ; i < appareilsListToDisplay.length ; i ++){
        let appareilToDisplay = document.createElement("li");
        appareilToDisplay.appendChild(document.createTextNode(appareilsListToDisplay[i]));
        appareilsBox.appendChild(appareilToDisplay);
        appareilToDisplay.className = "col-4";
    }
    
}
displayAppareils();

/*** Parcourir les recettes et extraire les ustensiles***/

let ustensilesListToDisplay = [];

for(let i = 0 ; i < recipes.length ; i++){
    
    for(let j = 0 ; j < recipes[i].ustensils.length ; j++){
        
        if(!ustensilesListToDisplay.includes(recipes[i].ustensils[j])){
            ustensilesListToDisplay.push(recipes[i].ustensils[j])
        }
        
    }
    
}

/*** Affichage des ustensiles ***/
let ustensilesBox = document.getElementById('ustensilesBox')
function displayUstensile(){
    for(let i = 0 ; i < ustensilesListToDisplay.length ; i ++){
        let ustensileToDisplay = document.createElement("li");
        ustensileToDisplay.appendChild(document.createTextNode(ustensilesListToDisplay[i]));
        ustensilesBox.appendChild(ustensileToDisplay);
        ustensileToDisplay.className = "col-4";
    }
    
}
displayUstensile();


const tagsListBox = document.getElementById('tagsList')

/***Ecouteurs dans la liste des ingrédients***/
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
        ingredientToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
        let cross = createCancelCross();
        ingredientToDisplay.appendChild(cross);
        cross.addEventListener('click', (e)=>e.target.parentElement.remove())
    })
}
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
let crossArray = document.getElementsByClassName('cancelCross');

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
        
        let searchKeyWord = searchInput.value.toLowerCase();
        //console.log(searchKeyWord);
        let isInArray = recipesTitleArray.includes(searchKeyWord);
        //console.log(isInArray);
        
        for(let i = 0 ; i < recipesTitleArray.length ; i++){

            if((recipesTitleArray[i].toLowerCase()).includes(searchKeyWord)){
                console.log(recipesTitleArray[i]);
                console.log(recipes[i].name);
                
            }   

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





/***Affichage des recettes***/

let recipesBoxContainer = document.getElementById('recipesBoxContainer')

//function createRecipeDisplay(){
    //console.log(recipes)
    for(let i = 0 ; i < 6 ; i++){
        let recipeToDisplay = new DisplayRecipes
        recipeToDisplay.createRecipeDisplay(recipes[i])
    }
/*        
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
        newCardTitle.appendChild(document.createTextNode(recipes[i].name))
        newRecipeTitle.appendChild(newCardTitle);

        let newTimingDiv = document.createElement("div");
        newTimingDiv.className = "timing d-flex align-items-center  mb-0";
        newRecipeTitle.appendChild(newTimingDiv);

        let newClockIcon = document.createElement("i");
        newClockIcon.className = "far fa-clock pr-1 d-flex align-items-center mb-0"
        newTimingDiv.appendChild(newClockIcon)
        let newTimingDuration = document.createElement("p");
        newTimingDuration.className = "d-flex align-items-center mb-0 timing__duration";
        newTimingDuration.appendChild(document.createTextNode(recipes[i].time + " min"))
        newTimingDiv.appendChild(newTimingDuration);

        let flexDiv = document.createElement("div");
        flexDiv.className = "d-flex p-0";
        newCardBody.appendChild(flexDiv)

        let newUl = document.createElement("ul");
        newUl.className = "list-group pr-3 w-50";
        flexDiv.appendChild(newUl);

        for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
            let newLi = document.createElement("li");
            newLi.className = "list-group-item ingredient d-flex p-0";
            newUl.appendChild(newLi);
        

        /***Boucle pour les ingrédients ***/
/*        
            let newIngredient = document.createElement("p");
            newIngredient.className = "mb-0 font-weight-bold"
            newIngredient.appendChild(document.createTextNode(recipes[i].ingredients[j].ingredient))
            newLi.appendChild(newIngredient);

            let newQuantity = document.createElement("p");
            newQuantity.className = "mb-0 pl-1";
            
            if(recipes[i].ingredients[j].quantity){
                newQuantity.appendChild(document.createTextNode(" : " + recipes[i].ingredients[j].quantity + " " + displayUnit(recipes[i].ingredients[j].unit)))
            }
            
            newLi.appendChild(newQuantity);
        }

        let newInstructions = document.createElement("p");
        newInstructions.className = "instructions w-50"
        
        let textDescription = recipes[i].description.substring(0,2000)
        newInstructions.appendChild(document.createTextNode(textDescription))
        
        flexDiv.appendChild(newInstructions);
        
        //console.log(newInstructions.textContent.substring(0,100))



        recipesBoxContainer.appendChild(newCard)
    }
}
createRecipeDisplay()
*/

