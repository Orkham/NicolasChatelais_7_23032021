import { Recipe } from './Recipe.js';
import { clearListDisplay } from './utils.js'

export function recipesDisplay(recipesBoxContainer, recipesToDisplay,ingredientsToDisplay,appliancesToDisplay,ustensilsToDisplay){
    clearListDisplay(recipesBoxContainer);
/*
    ingredientsToDisplay = []
    appliancesToDisplay = []
    ustensilsToDisplay = []
*/
    for (let i = 0 ; i < recipesToDisplay.length ; i ++){
        let recipe = new Recipe(recipesToDisplay[i]);
        recipe.createRecipeDisplay();

        for(let ingredient of recipe.ingredients){
            if(!(ingredientsToDisplay.includes(ingredient.ingredient))){
                ingredientsToDisplay.push(ingredient.ingredient)
            }
        };

        for(let ustensil of recipe.ustensils){
            if(!(ustensilsToDisplay.includes(ustensil))){
                ustensilsToDisplay.push(ustensil)
            }
        }
    }
    
    for(let recipe of recipesToDisplay){
        if(!(appliancesToDisplay.includes(recipe.appliance))){
            appliancesToDisplay.push(recipe.appliance)
        }
    }
    
}