import { recipesToDisplay, tagsListBox, tagsListArray, recipesBoxContainer,displaySearchByInputResults } from './main.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';


export function getRecipesFromTags(tagsListArray){
    
    let searchInput = document.getElementById('formGroupExampleInput');
    let searchInputLength = searchInput.value.length
    let recipesFromSearch = displaySearchByInputResults()

    if(tagsListArray.length > 0){
        
        let newRecipesToDisplayList = []
        let temp = []
        if(searchInputLength === 0){
            recipesFromSearch = recipes
        }
        
        for(let i = 0 ; i < tagsListArray.length ; i++){
            
            if(i == 0){
                //console.log('init')
                switch(tagsListArray[i].type){
                    case 'ingredient':
                        for(let recipe of recipesFromSearch){
                            filterByTag(tagsListArray[i], recipe, newRecipesToDisplayList)
                        }
                        break;
                    case 'appliance':
                        for(let recipe of recipesFromSearch){
                            filterByTag(tagsListArray[i], recipe, newRecipesToDisplayList)
                        }
                        break
                    case 'ustensil':
                        console.log('coucou ustensile')
                }
                    
            }else if(i > 0){
                temp = []
                console.log(newRecipesToDisplayList)
                for(let recipe of newRecipesToDisplayList){
                    //console.log(recipe)
                    filterByTag(tagsListArray[i], recipe, temp)
                }
                //console.log(temp)
                //console.log(newRecipesToDisplayList)
                newRecipesToDisplayList = temp
                console.log(newRecipesToDisplayList)
            }
        }
      
        
        return newRecipesToDisplayList

    }else if(searchInputLength > 0 && tagsListArray.length == 0){
        return recipesFromSearch
    }else if (searchInputLength == 0 && tagsListArray.length == 0){
        recipesFromSearch = recipes        
        return recipesFromSearch
    }
    
}


function filterByTag(tag, recipe, newRecipesToDisplayList){
    //console.log(tag.type)
    switch(tag.type){
        case 'ingredient':
            let ingredientsList = Recipe.getIngredientsFromRecipe(recipe)
            //console.log('test')
            if(ingredientsList.includes(tag.name)){
                newRecipesToDisplayList.push(recipe)
            }
            return newRecipesToDisplayList
        case 'appliance':
            //console.log('filtre par appareil')
            let appliance = Recipe.getApplianceFromRecipe(recipe)
            if(appliance == tag.name){
                newRecipesToDisplayList.push(recipe)
            }
            break;
        case 'ustensil':
            console.log('filtre par ustensile')
            break;
    }
    
}

