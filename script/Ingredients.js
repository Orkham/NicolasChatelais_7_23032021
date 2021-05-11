import {recipesToDisplay, tagsListBox} from './main.js'
import {CancelCross} from './CancelCross.js'
import {tagsListArray} from './main.js'
import {Recipe} from './Recipe.js'

import { Appliance } from './Appliance.js';
import { Ustensils } from './Ustensils.js';
import { recipes } from './recipes.js'

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
                    console.log(tagsListArray)
                    console.log(recipesToDisplay)


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
}

function clearListDisplay(listToClean){
    
    while(listToClean.childNodes.length !== 1){
        (listToClean.childNodes[1]).remove()
    }

}
