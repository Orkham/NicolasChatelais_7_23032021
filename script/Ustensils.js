import { tagsListArray } from './main.js'
import { Recipe } from './Recipe.js';
import { getRecipesFromTags }  from './filterByTags.js'
import { Tag } from './Tag.js'
import { listsUpdate } from './listsUpdate.js';
import { Appliance } from './Appliance.js'
import { Ingredients } from './Ingredients.js'
import { firstLetterUppercase } from './utils.js'

/**
 * Class pour gérer les ustensiles (affichage, éccouteurs et méthodes)
 */
export class Ustensils {
    constructor(){
        this.ustensilToDisplay = function (ustensil, ustensilsList){
            if(!ustensilsList.includes(ustensil)){
                ustensilsList.push(ustensil)
            }
        };
    }
    /**
     * Affichage d'un ustensile dans la select box
     * @param { Ustensil }  instance de la class Ustensil 
     */
    static displayUstensil(ustensil){
        let ustensilToDisplay = document.createElement("li");
        ustensilToDisplay.appendChild(document.createTextNode((firstLetterUppercase(ustensil))));
        ustensilesBox.appendChild(ustensilToDisplay);
        ustensilToDisplay.className = "col-4";
        ustensilToDisplay.dataset.type = "ustensil"
    }
    /**
     * Pose des écouteurs sur chaque ustensile de la select box
     * @param { HTMLElement } ustensilsBox ul contenant les différents ustensiles
     */
    static ustensilsListener(ustensilesBox){
        let listOfUstensilsName = []
        for(let tag of tagsListArray){
            listOfUstensilsName.push(tag.name)
        }

        for(let i = 0 ; i < ustensilesBox.childElementCount ; i++){
            ustensilesBox.children[i].addEventListener('click', (e)=>{
                let newTag = new Tag(e)
                if(!(listOfUstensilsName.includes(newTag.name))){
                    newTag.displayTag()
                    tagsListArray.push(newTag)
                    let recipesListToDisplay = getRecipesFromTags(tagsListArray)
                    Recipe.displayRecipes(recipesListToDisplay)
                    let ingredientsList = Ingredients.getIngredientsFromRecipes(recipesListToDisplay)
                    let aplliancesList = Appliance.getAppliancesFromRecipes(recipesListToDisplay)
                    let ustensilsList = Ustensils.getUstensilsFromRecipes(recipesListToDisplay)
                    listsUpdate(ingredientsList, aplliancesList, ustensilsList)
                    document.getElementById('inputUstensiles').value = ""
                }
            })
        }
    }
    /**
     * méthode pour lister et renvoyer les ustensiles à afficher dans la select box
     * @param { set } recipesList tableau des recettes affichées
     * @returns array des ustensiles à afficher
     */
     static getUstensilsFromRecipes(recipesList){
        let ustensilsListToDisplay = [];
        for(let recipe of recipesList){
            for(let j = 0 ; j < recipe.ustensils.length ; j++){
                let ustensil = new Ustensils;
                ustensil.ustensilToDisplay(recipe.ustensils[j], ustensilsListToDisplay)
            }
        }
        return ustensilsListToDisplay;
    }

}