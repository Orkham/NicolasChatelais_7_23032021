import { cleanWord } from './utils.js'

export function collectResults(recipesToDisplay, recipesArray, search){
    displayRecipesWithNameResults(recipesToDisplay, recipesArray, search)
    displayRecipesWithIngredientResults(recipesToDisplay, recipesArray, search)
    displayRecipesWithDescriptionResults(recipesToDisplay, recipesArray, search)
}


function displayRecipesWithNameResults(recipesToDisplay, recipesArray, search){
    for(let i = 0 ; i < recipesArray.length ; i++){
        if(cleanWord(recipesArray[i].name.toLowerCase().trim()).includes(search)){
            if(!(recipesToDisplay.includes(recipesArray[i]))){
                recipesToDisplay.push(recipesArray[i])
            }
        }
    }
}

function displayRecipesWithIngredientResults(recipesToDisplay, recipesArray, search){
    for(let i = 0 ; i < recipesArray.length ; i++){
        for(let j = 0 ; j < recipesArray[i].ingredients.length ; j++){
            if ((cleanWord(recipesArray[i].ingredients[j].ingredient.toLowerCase().trim())).includes(search)){
                if(!(recipesToDisplay.includes(recipesArray[i]))){
                    recipesToDisplay.push(recipesArray[i])
                }
            }
        }
    }
}

function displayRecipesWithDescriptionResults(recipesToDisplay, recipesArray, search){
    for(let i = 0 ; i < recipesArray.length ; i++){
        if(cleanWord(recipesArray[i].description.toLowerCase().trim()).includes(search)){
            if(!(recipesToDisplay.includes(recipesArray[i]))){
                recipesToDisplay.push(recipesArray[i])
            }
        }
    }
}