

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
}