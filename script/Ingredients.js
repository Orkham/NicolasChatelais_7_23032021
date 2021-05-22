import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer,displaySearchByInputResults } from './main.js'
import { pushRecipeInArray } from './utils.js'
import {CancelCross} from './CancelCross.js'
import { recipesDisplay } from './recipesDisplayFunction.js'
import { displayRecipesWithNameResults } from './resultsCollectFunction.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';
import { ingredientsDisplay } from './ingredientsDisplay.js'
import { getRecipesFromTags }  from './filterByTags.js'
import { Tag } from './Tag.js'
import { listsUpdate } from './listsUpdate.js';

let searchInput = document.getElementById('formGroupExampleInput');


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
        ingredientToDisplay.dataset.type = "ingredient"
    }

    static ingredientsListener(ingredientsBox){
        
        let listOfIngredientsName = []
        for(let tag of tagsListArray){
            listOfIngredientsName.push(tag.name)
        }
        
        for(let i = 0 ; i < ingredientsBox.childElementCount ; i++){
            
            ingredientsBox.children[i].addEventListener('click',  (e)=>{
                
                let newTag = new Tag(e)
                
                if(!(listOfIngredientsName.includes(newTag.name))){    
                    
                    newTag.displayTag()
                    tagsListArray.push(newTag)
                    let recipesListToDisplay = getRecipesFromTags(tagsListArray)
                    Recipe.displayRecipes(recipesListToDisplay)
                    let ingredientsList = Ingredients.getIngredientsFromRecipes(recipesListToDisplay)
                    
                    listsUpdate(ingredientsList)
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

    
/*
    static getRecipesNamesFromHtmlDisplay(){
        let displayedRecipesNames = []
        for(let i = 0 ; i < recipesBoxContainer.childElementCount ; i++){
            displayedRecipesNames.push((recipesBoxContainer.children[i].dataset.name))
        }
        return displayedRecipesNames
    }
*/
/*
    static transformNamesToRecipes(displayedRecipesNames){
        let recipesArray = []
        for(let displayedRecipeName of displayedRecipesNames){
            recipesArray.push(Recipe.getRecipesByDataName(displayedRecipeName))
        }
        return recipesArray
    }
*/
}


