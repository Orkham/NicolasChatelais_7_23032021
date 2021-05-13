import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer } from './main.js'
import {CancelCross} from './CancelCross.js'
import { recipesDisplay } from './recipesDisplayFunction.js'
import { displayRecipesWithIngredientResults } from './resultsCollectFunction.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';
import { ingredientsDisplay } from './ingredientsDisplay.js'

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
                
                if(!(tagsListArray.includes(e.target.innerHTML))){
                    let newDiv = document.createElement("div");
                    newDiv.className = "d-inline-block";
                    tagsListBox.appendChild(newDiv);
                    let ingredientToDisplay = document.createElement("p");
                    ingredientToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
                    newDiv.appendChild(ingredientToDisplay);
                    ingredientToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
                    
                    tagsListArray.push(e.target.innerHTML)
                    //console.log(tagsListArray)
                    //console.log(recipesToDisplay)
                    Ingredients.getRecipesFromIngredientsTag()
                    
                    let cross = CancelCross.createCancelCross();
                    ingredientToDisplay.appendChild(cross);
                    cross.addEventListener('click', (e)=>{
                        e.target.parentElement.parentElement.remove()
                        let indexToDelete = tagsListArray.indexOf(e.target.previousSibling.data)
                        tagsListArray.splice(indexToDelete, 1)
                        console.log(tagsListArray)
                        
                    })

                }
            })
        }
    }

    static getIngredientsFromRecipes(recipesList){
        let ingredientsListToDisplay = [];
        for(let i = 0 ; i < recipesList.length ; i++){
            for(let j = 0 ; j < recipesList[i].ingredients.length ; j++){
                let ingredient = new Ingredients;
                ingredient.ingredientToDisplay(recipesList[i].ingredients[j].ingredient, ingredientsListToDisplay)
            }
        }
        return ingredientsListToDisplay;
    }

    static getRecipesFromIngredientsTag(){
        console.log(recipesToDisplay)
        let ingredientsListOfDisplayingRecipes = Ingredients.getIngredientsFromRecipes(recipesToDisplay)
        console.log(ingredientsListOfDisplayingRecipes)
        //console.log(tagsListArray)
        let newRecipesToDisplayList = []
        
        for(let i = 0 ; i < recipesToDisplay.length ; i++){

            for(let j = 0 ; j < recipesToDisplay[i].ingredients.length ; j++){
                
                for(let tag of tagsListArray){
                    
                    if(recipesToDisplay[i].ingredients[j].ingredient == tag){
                        
                        if(!newRecipesToDisplayList.includes(recipesToDisplay[i])){
                            newRecipesToDisplayList.push(recipesToDisplay[i])
                        }
                    }
                }
            }
        }
        console.log(newRecipesToDisplayList)
        
        Recipe.displayRecipes(newRecipesToDisplayList, newRecipesToDisplayList.length)
        ingredientsDisplay(newRecipesToDisplayList)

    }
}


