import { tagsListArray } from './main.js'
import { Recipe } from './Recipe.js';
import { getRecipesFromTags }  from './filterByTags.js'
import { Tag } from './Tag.js'
import { listsUpdate } from './listsUpdate.js';
import { Appliance } from './Appliance.js'
import { Ustensils } from './Ustensils.js'

let searchInput = document.getElementById('formGroupExampleInput');
/**
 * Class pour gérer les ingrédients (affichage, écouteurs et méthodes)
 */
export class Ingredients {
    constructor(){
        this.ingredientToDisplay = function (ingredient, ingredientsList){
            if(!ingredientsList.includes(ingredient)){
                ingredientsList.push(ingredient)
            }
        };
    }
    /**
     * Affichage d'un ingrédient dans la select box
     */
    static displayIngredient(ingredient){
        let ingredientToDisplay = document.createElement("li");
        ingredientToDisplay.appendChild(document.createTextNode(ingredient));
        ingredientsBox.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "col-4";
        ingredientToDisplay.dataset.type = "ingredient"
    }
    /**
     * Pose des écouteurs sur chaque ingrédients de la select box
     * @param { HTMLElement } ingredientsBox ul contenant les différents ingrédients
     */
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
                    let appliancesList = Appliance.getAppliancesFromRecipes(recipesListToDisplay)
                    let ustensilsList = Ustensils.getUstensilsFromRecipes(recipesListToDisplay)
                    listsUpdate(ingredientsList, appliancesList, ustensilsList)
                    document.getElementById('inputIngredients').value = ""
                }
            })
        }
    }
    /**
     * méthode pour lister et renvoyer les ingrédients à afficher dans la select box
     * @param { Set } recipesList set des recettes affichées
     * @returns array des ingrédients à afficher
     */
    static getIngredientsFromRecipes(recipesList){
        console.log(recipesList)
        let ingredientsListToDisplay = [];
        for(let recipe of recipesList){
            for(let j = 0 ; j < recipe.ingredients.length ; j++){
                let ingredient = new Ingredients;
                ingredient.ingredientToDisplay(recipe.ingredients[j].ingredient, ingredientsListToDisplay)
            }
        }
        return ingredientsListToDisplay;
    }

}


