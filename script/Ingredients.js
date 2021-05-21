import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer,displaySearchByInputResults } from './main.js'
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
                    //console.log(ingredientsList)
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

    

    static getRecipesFromIngredientsTag(tagsListArray){
        let searchInputLength = searchInput.value.length

        

        if(tagsListArray.length > 0 && searchInputLength > 0){
            let newRecipesToDisplayList = []
            
        /*Récupérer les recettes sur lesquelles triées*/

            /*Récupérer les noms dans les data du html*/

            let displayedRecipesNames = Ingredients.getRecipesNamesFromHtmlDisplay()
            //console.log(displayedRecipesNames)
            /*Transformer les noms en objets recette*/
            
            let displayedRecipes = Ingredients.transformNamesToRecipes(displayedRecipesNames)
            
            //console.log(displayedRecipes)
            
            /*Boucler sur les ingrédients des recettes*/
            for(let i = 0 ; i < displayedRecipes.length ; i++){
                for(let j = 0 ; j < displayedRecipes[i].ingredients.length ; j++){
                    /*Filtrer par dernier tag ajouté à la liste*/
                    if(tagsListArray[tagsListArray.length-1] == displayedRecipes[i].ingredients[j].ingredient){
                        Ingredients.pushRecipeInArray(newRecipesToDisplayList,displayedRecipes[i])   
                    }

                }
            }

            Recipe.displayRecipes(newRecipesToDisplayList, newRecipesToDisplayList.length)
            ingredientsDisplay(newRecipesToDisplayList)

            
        }else if(searchInputLength == 0 && tagsListArray.length > 0){
            let newRecipesToDisplayList = []
            
            /*Récupérer les noms dans les data du html*/

            let displayedRecipesNames = Ingredients.getRecipesNamesFromHtmlDisplay()
            
            /*Transformer les noms en objets recette*/
            
            let displayedRecipes = Ingredients.transformNamesToRecipes(displayedRecipesNames)

            for(let i = 0 ; i < recipes.length ; i++){
                for(let j = 0 ; j < recipes[i].ingredients.length ; j++){
                    /*Filtrer par dernier tag ajouté à la liste*/
                    if(tagsListArray[tagsListArray.length-1] == recipes[i].ingredients[j].ingredient){
                        Ingredients.pushRecipeInArray(newRecipesToDisplayList,recipes[i])   
                    }

                }
            }
            
            Recipe.displayRecipes(newRecipesToDisplayList, newRecipesToDisplayList.length)
            ingredientsDisplay(newRecipesToDisplayList)
        }else if(searchInputLength == 0 && tagsListArray.length == 0){
            console.log('raz')
        }
    }

    static pushRecipeInArray(newRecipesToDisplayList, recipe){
        if(!newRecipesToDisplayList.includes(recipe)){
            newRecipesToDisplayList.push(recipe)
        }
    }

    static getRecipesNamesFromHtmlDisplay(){
        let displayedRecipesNames = []
        for(let i = 0 ; i < recipesBoxContainer.childElementCount ; i++){
            displayedRecipesNames.push((recipesBoxContainer.children[i].dataset.name))
        }
        return displayedRecipesNames
    }

    static transformNamesToRecipes(displayedRecipesNames){
        let recipesArray = []
        for(let displayedRecipeName of displayedRecipesNames){
            recipesArray.push(Recipe.getRecipesByDataName(displayedRecipeName))
        }
        return recipesArray
    }
}


