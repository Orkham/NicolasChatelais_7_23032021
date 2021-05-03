

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
        ustensilToDisplay.appendChild(document.createTextNode(ustensil));
        ustensilesBox.appendChild(ustensilToDisplay);
        ustensilToDisplay.className = "col-4";
    }
}