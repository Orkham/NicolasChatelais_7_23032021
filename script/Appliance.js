import { tagsListArray } from './main.js'
import { Recipe } from './Recipe.js';
import { getRecipesFromTags }  from './filterByTags.js'
import { Tag } from './Tag.js'
import { listsUpdate } from './listsUpdate.js';
import { Ingredients } from './Ingredients.js'
import { Ustensils } from './Ustensils.js'

let searchInput = document.getElementById('formGroupExampleInput');
/**
 * Class pour gérant les appareils (affichage, écouteurs et méthodes)
 */
export class Appliance {
    constructor(){
        this.applianceToDisplay = function (appliance, appliancesList){
            if(!appliancesList.includes(appliance)){
                appliancesList.push(appliance)
            }
        };
    }
    /**
     * Affichage d'un appareil dans la select box
     */
    static displayAppliance(appliance){
        let applianceToDisplay = document.createElement("li");
        applianceToDisplay.appendChild(document.createTextNode(appliance));
        appareilsBox.appendChild(applianceToDisplay);
        applianceToDisplay.className = "col-4";
        applianceToDisplay.dataset.type = "appliance"
    }
    /**
     * Pose des écouteurs sur chaque appareil de la select box
     * @param { HTMLElement } appliancesBox ul contenant les différents ingrédients
     */
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
    /**
     * méthode pour lister et renvoyer les appareils à afficher dans la select box
     * @param { array } recipesList tableau des recettes affichées
     * @returns array des appareils à afficher
     */
    static getAppliancesFromRecipes(recipesList){
        let appliancesListToDisplay = []
        for(let i = 0 ; i < recipesList.length ; i++){
            let appliance = new Appliance;
            appliance.applianceToDisplay(recipesList[i].appliance, appliancesListToDisplay)
        }
        return appliancesListToDisplay;
    }

}