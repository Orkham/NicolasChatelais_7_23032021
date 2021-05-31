import { displaySearchByInputResults } from './main.js'
import { recipes } from './recipes.js';
import { Recipe } from './Recipe.js';

/**
 * fonction filtrant les recettes par rapport aux tags sélectionnés
 * @param { array } tagsListArray liste des tags sélectionnés
 * @returns array des recettes à afficher
 */
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
                for(let recipe of newRecipesToDisplayList){
                    filterByTag(tagsListArray[i], recipe, temp)
                }
                newRecipesToDisplayList = temp
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

/**
 * 
 * @param { Tag } tag objet de class Tag
 * @param { Recipe } recipe objet de class Recipe
 * @param { array } newRecipesToDisplayList tableau recevant les recettes filtrées
 * @returns array des recettes filtrées
 */
function filterByTag(tag, recipe, newRecipesToDisplayList){
    switch(tag.type){
        case 'ingredient':
            let ingredientsList = Recipe.getIngredientsFromRecipe(recipe)
            if(ingredientsList.includes(tag.name)){
                newRecipesToDisplayList.push(recipe)
            }
            return newRecipesToDisplayList
        case 'appliance':
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

