import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer,displaySearchByInputResults } from './main.js'
import { CancelCross } from './CancelCross.js'
import { recipesDisplay } from './recipesDisplayFunction.js'
import { displayRecipesWithNameResults } from './resultsCollectFunction.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';
import { ingredientsDisplay } from './ingredientsDisplay.js'
import { clearListDisplay, cleanWord } from './utils.js'


export function getRecipesFromTags(tagsListArray){
    
    let searchInput = document.getElementById('formGroupExampleInput');
    let searchInputLength = searchInput.value.length
    let recipesFromSearch = displaySearchByInputResults()

    if(/*searchInputLength > 0 &&*/ tagsListArray.length > 0){
        
        let newRecipesToDisplayList = []
        if(searchInputLength === 0){
            recipesFromSearch = recipes
        }
        
        for(let i = 0 ; i < tagsListArray.length ; i++){
            
            if(i == 0){
                switch(tagsListArray[i].type){
                    case 'ingredient':
                        for(let recipe of recipesFromSearch){
                            filterByIngredientTag(tagsListArray[i], recipe, newRecipesToDisplayList)
                        }
                        break;
                    case 'appliance':
                        console.log('coucou appareil')
                        break
                    case 'ustensil':
                        console.log('coucou ustensile')
                }
                    
            }else if(i > 0){
                let temp = []
                for(let recipe of newRecipesToDisplayList){
                    filterByIngredientTag(tagsListArray[i], recipe, temp)
                }
                newRecipesToDisplayList = temp
            }
        }
      
        
        return newRecipesToDisplayList

    }else if((searchInputLength > 0 && tagsListArray.length == 0) || 
            (searchInputLength == 0 && tagsListArray.length == 0)){
        recipesFromSearch = recipes        
        return recipesFromSearch
    }
    
}


function filterByIngredientTag(tag, recipe, newRecipesToDisplayList){
    console.log(tag.type)
    switch(tag.type){
        case 'ingredient':
            let ingredientsList = Recipe.getIngredientsFromRecipe(recipe)
            if(ingredientsList.includes(tag.name)){
                newRecipesToDisplayList.push(recipe)
            }
            return newRecipesToDisplayList
        case 'appliance':
            console.log('filtre par appareil')
            break;
        case 'ustensil':
            console.log('filtre par ustensile')
            break;
    }
    
}

