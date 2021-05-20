import {tagsListArray, tagsListBox, recipesBoxContainer, displaySearchByInputResults} from './main.js'
import {CancelCross} from './CancelCross.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';
import { appliancesDisplay } from './appliancesDisplay.js'
import { Ingredients } from './Ingredients.js'
import { ingredientsDisplay } from './ingredientsDisplay.js'
import { getRecipesFromTags }  from './filterByTags.js'

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

        for(let i = 0 ; i < appliancesBox.childElementCount ; i++){
    
            appliancesBox.children[i].addEventListener('click',  (e)=>{
                
                if(!(tagsListArray.includes(e.target.innerHTML))){

                    let newDiv = document.createElement("div");
                    newDiv.className = "d-inline-block";
                    tagsListBox.appendChild(newDiv);
                    let applianceToDisplay = document.createElement("p");
                    applianceToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
                    newDiv.appendChild(applianceToDisplay);
                    applianceToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
                    

                    tagsListArray.push(e.target.innerHTML)

                    //Appliance.getRecipesFromAppliancesTag(tagsListArray)
                    getRecipesFromTags(tagsListArray)

                    let cross = CancelCross.createCancelCross();
                    applianceToDisplay.appendChild(cross);
                    cross.addEventListener('click', (e)=>{
                        e.target.parentElement.parentElement.remove()
                        let indexToDelete = tagsListArray.indexOf(e.target.previousSibling.data)
                        tagsListArray.splice(indexToDelete, 1)
                        displaySearchByInputResults()
                        Appliance.getRecipesFromAppliancesTag(tagsListArray)
                    })
                }
            })
        }
    }
    static getAppliancesFromRecipes(recipesList){
        let appliancesListToDisplay = []
        for(let i = 0 ; i < recipesList.length ; i++){
            let appliance = new Appliance;
            appliance.applianceToDisplay(recipesList[i].appliance, appliancesListToDisplay)
        }
        
        return appliancesListToDisplay;
    }

    static getRecipesFromAppliancesTag(tagsListArray){
        let searchInputLength = searchInput.value.length

        if(tagsListArray.length > 0 && searchInputLength > 0){
            let newRecipesToDisplayList = []

            /*Récupérer les noms dans les data du html*/

            let displayedRecipesNames = Ingredients.getRecipesNamesFromHtmlDisplay()
            
            /*Transformer les noms en objets recette*/
            
            let displayedRecipes = Ingredients.transformNamesToRecipes(displayedRecipesNames)
            
            /*Boucler sur les appareils des recettes*/
            for(let i = 0 ; i < displayedRecipes.length ; i++){
                
                /*Filtrer par dernier tag ajouté à la liste*/
                if(tagsListArray[tagsListArray.length-1] == displayedRecipes[i].appliance){
                    Ingredients.pushRecipeInArray(newRecipesToDisplayList,displayedRecipes[i])   
                }

            }
            Recipe.displayRecipes(newRecipesToDisplayList, newRecipesToDisplayList.length)
            appliancesDisplay(newRecipesToDisplayList)

            ingredientsDisplay(newRecipesToDisplayList)

        }else if(searchInputLength == 0 && tagsListArray.length > 0){
            let newRecipesToDisplayList = []
            
            /*Récupérer les noms dans les data du html*/

            let displayedRecipesNames = Ingredients.getRecipesNamesFromHtmlDisplay()
            
            /*Transformer les noms en objets recette*/
            
            let displayedRecipes = Ingredients.transformNamesToRecipes(displayedRecipesNames)
            
            for(let i = 0 ; i < recipes.length ; i++){
                
                /*Filtrer par dernier tag ajouté à la liste*/
                if(tagsListArray[tagsListArray.length-1] == recipes[i].appliance){
                    Ingredients.pushRecipeInArray(newRecipesToDisplayList,recipes[i])   
                }
                Recipe.displayRecipes(newRecipesToDisplayList, newRecipesToDisplayList.length)
                appliancesDisplay(newRecipesToDisplayList)
                
            }
            
            ingredientsDisplay(newRecipesToDisplayList)
            

        }else if(searchInputLength == 0 && tagsListArray.length > 0){
            let newRecipesToDisplayList = []
            
            /*Récupérer les noms dans les data du html*/

            let displayedRecipesNames = Ingredients.getRecipesNamesFromHtmlDisplay()
            
            /*Transformer les noms en objets recette*/
            
            let displayedRecipes = Ingredients.transformNamesToRecipes(displayedRecipesNames)

            for(let i = 0 ; i < recipes.length ; i++){
                
                    /*Filtrer par dernier tag ajouté à la liste*/
                    if(tagsListArray[tagsListArray.length-1] == recipes[i].appliance){
                        Ingredients.pushRecipeInArray(newRecipesToDisplayList,recipes[i])   
                    }

            }
            
            Recipe.displayRecipes(newRecipesToDisplayList, newRecipesToDisplayList.length)
            appliancesDisplay(newRecipesToDisplayList)

            ingredientsDisplay(newRecipesToDisplayList)

        }else if(searchInputLength == 0 && tagsListArray.length == 0){
            console.log('raz')
        }
    }
}