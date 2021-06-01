import { recipes } from './recipes.js';
import { displayUnit } from './utils.js'
import { clearListDisplay } from './utils.js'

export class Recipe {
    constructor(recipe){
        this.name = recipe.name;
        this.time = recipe.time;
        this.ingredients = recipe.ingredients;
        this.description = recipe.description;
        this.appliance = recipe.appliance;
        this.ustensils = recipe.ustensils;

        this.createRecipeDisplay = function(){
            let newCard = document.createElement("div");
            newCard.className = "card mb-5";
            newCard.dataset.name = this.name;
            newCard.innerHTML = '<svg class="bd-placeholder-img card-img-top" width="100%" height="178" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#C7BEBE"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>';

            let newCardBody = document.createElement("div");
            newCardBody.className = "card-body description pb-5"
            newCard.appendChild(newCardBody)

            let newRecipeTitle = document.createElement("div");
            newRecipeTitle.className = "recipesTitle d-flex justify-content-between pr-0 align-items-center mb-3"
            newCardBody.appendChild(newRecipeTitle);

            let newCardTitle = document.createElement("h2");
            newCardTitle.className = "card-title  mb-0";
            newCardTitle.appendChild(document.createTextNode(this.name))
            newRecipeTitle.appendChild(newCardTitle);

            let newTimingDiv = document.createElement("div");
            newTimingDiv.className = "timing d-flex align-items-center  mb-0";
            newRecipeTitle.appendChild(newTimingDiv);

            let newClockIcon = document.createElement("i");
            newClockIcon.className = "far fa-clock pr-1 d-flex align-items-center mb-0"
            newTimingDiv.appendChild(newClockIcon)
            let newTimingDuration = document.createElement("p");
            newTimingDuration.className = "d-flex align-items-center mb-0 timing__duration";
            newTimingDuration.appendChild(document.createTextNode(this.time + " min"))
            newTimingDiv.appendChild(newTimingDuration);

            let flexDiv = document.createElement("div");
            flexDiv.className = "d-flex p-0";
            newCardBody.appendChild(flexDiv)

            let newUl = document.createElement("ul");
            newUl.className = "list-group pr-3 w-50";
            flexDiv.appendChild(newUl);

            for(let j = 0 ; j < this.ingredients.length ; j++){
                let newLi = document.createElement("li");
                newLi.className = "list-group-item ingredient d-flex p-0";
                newUl.appendChild(newLi);
            

            /***Boucle pour les ingrédients ***/
            
                let newIngredient = document.createElement("p");
                newIngredient.className = "mb-0 font-weight-bold"
                newIngredient.appendChild(document.createTextNode(this.ingredients[j].ingredient))
                newLi.appendChild(newIngredient);

                let newQuantity = document.createElement("p");
                newQuantity.className = "mb-0 pl-1";
                
                if(this.ingredients[j].quantity){
                    newQuantity.appendChild(document.createTextNode(" : " + this.ingredients[j].quantity + " " + displayUnit(this.ingredients[j].unit)))
                }
                
                newLi.appendChild(newQuantity);
            }

            let newInstructions = document.createElement("p");
            newInstructions.className = "instructions w-50"
            
            let textDescription = this.description.substring(0,2000)
            newInstructions.appendChild(document.createTextNode(textDescription))
            
            flexDiv.appendChild(newInstructions);
            
            

            recipesBoxContainer.appendChild(newCard)

            
        }

        this.getIngredients = function(){
            let  recipeIngredientsList = []
            for(let ingredientsList of this.ingredients){
                recipeIngredientsList.push(ingredientsList.ingredient)
            }
            return recipeIngredientsList;
        }

    }
    
    static displayRecipes(recipesArray){
        clearListDisplay(recipesBoxContainer)
        let numberToDisplay = 6;
        if(recipesArray.length <= 12){
            numberToDisplay = recipesArray.length
        }
        
        for(let i = 0 ; i < numberToDisplay ; i++){
            let recipeToDisplay = new Recipe(recipesArray[i])
            recipeToDisplay.createRecipeDisplay()
        }
    }

    static getRecipesByDataName(name){
        for(let recipe of recipes){
            if(name == recipe.name){
                return recipe
            }
        }
    }

    static getIngredientsFromRecipe(recipe){
        let  recipeIngredientsList = []
        
        for(let ingredient of recipe.ingredients){
            recipeIngredientsList.push(ingredient.ingredient)
        }
        return recipeIngredientsList;
    }

    static getApplianceFromRecipe(recipe){
        return recipe.appliance
    }

    static getUstensilsFromRecipe(recipe){
        let recipeUstensilsList = []

        for(let ustensil of recipe.ustensils){
            recipeUstensilsList.push(ustensil)
        }
        return recipeUstensilsList
    }
}
