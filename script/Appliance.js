import {tagsListBox} from './main.js'
import {CancelCross} from './CancelCross.js'

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
    }
    static appliancesListener(appliancesBox){
        for(let i = 0 ; i < appliancesBox.childElementCount ; i++){
    
            appliancesBox.children[i].addEventListener('click', function addTagInTagsList(e){
                console.log(e.target.innerHTML);
                let newDiv = document.createElement("div");
                newDiv.className = "d-inline-block";
                tagsListBox.appendChild(newDiv);
                let applianceToDisplay = document.createElement("p");
                applianceToDisplay.appendChild(document.createTextNode(e.target.innerHTML));
                newDiv.appendChild(applianceToDisplay);
                applianceToDisplay.className = "resultDisplay text-white rounded pt-1 pb-2 pl-3 pr-3 mr-1";
                
                let cross = CancelCross.createCancelCross();
                applianceToDisplay.appendChild(cross);
                cross.addEventListener('click', (e)=>e.target.parentElement.remove())
                
            })
        }
    }
}