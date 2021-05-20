import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer,displaySearchByInputResults } from './main.js'
import { CancelCross } from './CancelCross.js'
import { recipesDisplay } from './recipesDisplayFunction.js'
import { displayRecipesWithNameResults } from './resultsCollectFunction.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';
import { ingredientsDisplay } from './ingredientsDisplay.js'



export function getRecipesFromTags(tagsListArray){
    
    let searchInput = document.getElementById('formGroupExampleInput');
    let searchInputLength = searchInput.value.length
    let recipesFromSearch = displaySearchByInputResults()

    console.log(recipesFromSearch)
    if(searchInputLength > 0 && tagsListArray.length > 0){
        
        let newRecipesToDisplayList = []
        
        for(let i = 0 ; i < recipesFromSearch.length ; i++){
            for(let j = 0 ; j < recipesFromSearch[i].ingredients.length ; j++){
                for(let tag of tagsListArray){
                    switch(tag.type){
                        case 'ingredient':
                            
                            if(recipesFromSearch[i].ingredients[j].ingredient == tag.name){
                                console.log('coucou')
                                pushRecipeInArray(newRecipesToDisplayList, recipesFromSearch[i])
                            }
                    }
                }
            }
            
        }
        console.log(newRecipesToDisplayList)
        return newRecipesToDisplayList
    }else if((searchInputLength > 0 && tagsListArray.length == 0) || 
            (searchInputLength == 0 && tagsListArray.length == 0)){
        return recipesFromSearch
    }

}

function pushRecipeInArray(newRecipesToDisplayList, recipe){
    if(!newRecipesToDisplayList.includes(recipe)){
        newRecipesToDisplayList.push(recipe)
    }
}
