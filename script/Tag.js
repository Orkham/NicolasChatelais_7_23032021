import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer,displaySearchByInputResults } from './main.js'
import {CancelCross} from './CancelCross.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';
import { getRecipesFromTags }  from './filterByTags.js'

export class Tag {
    constructor(e){
        this.name = e.target.innerHTML;
        this.type = e.target.dataset.type
    }
    displayTag(){
        let newDiv = document.createElement("div");
        newDiv.className = "d-inline-block";
        tagsListBox.appendChild(newDiv);
        let ingredientToDisplay = document.createElement("p");
        ingredientToDisplay.appendChild(document.createTextNode(this.name));
        newDiv.appendChild(ingredientToDisplay);
        ingredientToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";

        let cross = CancelCross.createCancelCross();
        ingredientToDisplay.appendChild(cross);

        cross.addEventListener('click', (e)=>{
            e.target.parentElement.parentElement.remove()
            
            let indexToDelete = tagsListArray.indexOf(getTagObjectByName(e.target.previousSibling.data, tagsListArray))
            
            tagsListArray.splice(indexToDelete, 1)
            
            displaySearchByInputResults()
            
            Recipe.displayRecipes(getRecipesFromTags(tagsListArray))
        })
    }
    
}

function getTagObjectByName(name, tagList){
    for(let i = 0  ; i < tagList.length ; i++){
        if(tagList[i].name == name){
            return tagList[i]
        }
    }
}