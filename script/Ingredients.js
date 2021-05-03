import {tagsListBox} from './main.js'
import {CancelCross} from './CancelCross.js'

export class Ingredients {
    constructor(){
        this.ingredientToDisplay = function (ingredient, ingredientsList){
            if(!ingredientsList.includes(ingredient)){
                ingredientsList.push(ingredient)
            }
        };
    }
    
    static displayIngredient(ingredient){
        let ingredientToDisplay = document.createElement("li");
        ingredientToDisplay.appendChild(document.createTextNode(ingredient));
        ingredientsBox.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "col-4";
    }

    static ingredientsListener(ingredientsBox){
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
                
                let cross = CancelCross.createCancelCross();
                ingredientToDisplay.appendChild(cross);
                cross.addEventListener('click', (e)=>e.target.parentElement.remove())
                
            })
        }
    }
}







/*
for(let i = 0 ; i < recipes.length ; i++){
    let recipe = new Recipe(recipes[i]);
    let ingredient = new Ingredients;
    console.log(recipe.getIngredients())
    ingredient.ingredientToDisplay(recipe.getIngredients()[0].ingredient,ingredientsListToDisplay)
}
*/
