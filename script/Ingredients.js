import { tagsListArray } from './main.js'
import { Recipe } from './Recipe.js';
import { getRecipesFromTags }  from './filterByTags.js'
import { Tag } from './Tag.js'
import { listsUpdate } from './listsUpdate.js';
import { Appliance } from './Appliance.js'
import { clearListDisplay } from './utils.js'

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
                    let aplliancesList = Appliance.getAppliancesFromRecipes(recipesListToDisplay)
                    listsUpdate(ingredientsList,aplliancesList)
                    let target = document.getElementById('inputIngredients')
                    console.log(target)
                    document.getElementById('inputIngredients').value = ""
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

}


