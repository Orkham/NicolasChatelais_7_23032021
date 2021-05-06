import {tagsListBox} from './main.js'
import {CancelCross} from './CancelCross.js'
import {firstLetterUppercase} from './utils.js'

export class Ustensils {
    constructor(){
        this.ustensilToDisplay = function (ustensil, ustensilsList){
            if(!ustensilsList.includes(ustensil)){
                ustensilsList.push(ustensil)
            }
        };
    }
    static displayUstensil(ustensil){
        let ustensilToDisplay = document.createElement("li");
        ustensilToDisplay.appendChild(document.createTextNode(firstLetterUppercase(ustensil)));
        ustensilesBox.appendChild(ustensilToDisplay);
        ustensilToDisplay.className = "col-4";
    }
    static ustensilsListener(ustensilesBox){
        for(let i = 0 ; i < ustensilesBox.childElementCount ; i++){
    
            ustensilesBox.children[i].addEventListener('click', function addTagInTagsList(e){
                //console.log(e.target.innerHTML);
                let newDiv = document.createElement("div");
                newDiv.className = "d-inline-block";
                tagsListBox.appendChild(newDiv);
                let ustensilToDisplay = document.createElement("p");
                ustensilToDisplay.appendChild(document.createTextNode(firstLetterUppercase(e.target.innerHTML)));
                
                newDiv.appendChild(ustensilToDisplay);
                ustensilToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
                
                let cross = CancelCross.createCancelCross();
                ustensilToDisplay.appendChild(cross);
                cross.addEventListener('click', (e)=>e.target.parentElement.parentElement.remove())
                
            })
        }
    }
}