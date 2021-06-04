import { tagsListArray } from './main.js'
import { Recipe } from './Recipe.js';
import { getRecipesFromTags }  from './filterByTags.js'
import { Tag } from './Tag.js'
import { listsUpdate } from './listsUpdate.js';
import { Ingredients } from './Ingredients.js'
import { Ustensils } from './Ustensils.js'

let searchInput = document.getElementById('formGroupExampleInput');

export class Appliance {
    constructor(){
        this.applianceToDisplay = function (appliance, appliancesList){
            if(!appliancesList.includes(appliance)){
                appliancesList.push(appliance)
            }
        };
    }
    static displayAppliance(appliance){
        let applianceToDisplay = document.createElement("li");
        applianceToDisplay.appendChild(document.createTextNode(appliance));
        appareilsBox.appendChild(applianceToDisplay);
        applianceToDisplay.className = "col-4";
        applianceToDisplay.dataset.type = "appliance"
    }

    static appliancesListener(appliancesBox){

        let listOfAppliancesName = []
        for(let tag of tagsListArray){
            listOfAppliancesName.push(tag.name)
        }

        for(let i = 0 ; i < appliancesBox.childElementCount ; i++){
    
            appliancesBox.children[i].addEventListener('click',  (e)=>{

                let newTag = new Tag(e)

                if(!(listOfAppliancesName.includes(newTag.name))){
                    newTag.displayTag()
                    tagsListArray.push(newTag)
                    let recipesListToDisplay = getRecipesFromTags(tagsListArray)
                    Recipe.displayRecipes(recipesListToDisplay)
                    let ingredientsList = Ingredients.getIngredientsFromRecipes(recipesListToDisplay)
                    let appliancesList = Appliance.getAppliancesFromRecipes(recipesListToDisplay)
                    let ustensilsList = Ustensils.getUstensilsFromRecipes(recipesListToDisplay)
                    listsUpdate(ingredientsList, appliancesList, ustensilsList)
                    document.getElementById('inputAppareil').value = ""
                }
            })
        }
    }

    static getAppliancesFromRecipes(recipesList){
        let appliancesListToDisplay = []
        for(let recipe of recipesList){
            let appliance = new Appliance;
            appliance.applianceToDisplay(recipe.appliance, appliancesListToDisplay)
        }
        return appliancesListToDisplay;
    }

}