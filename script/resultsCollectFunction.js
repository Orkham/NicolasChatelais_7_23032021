import { cleanWord } from './utils.js'


/**
 * algorithme de recherche principal. Regroupement des trois fonctions de recherches (par nom, par ingrédients et terme présent dans la description)
 * @param { array } recipesToDisplay tableau recevant les résultats à afficher
 * @param { array } recipesArray tableau de recettes sur lequel on effectue la recherche
 * @param { string } search input de l'utilisateur
 */
export function collectResults(recipesToDisplay, recipesArray, search){
    displayRecipesWithNameResults(recipesToDisplay, recipesArray, search)
    displayRecipesWithIngredientResults(recipesToDisplay, recipesArray, search)
    displayRecipesWithDescriptionResults(recipesToDisplay, recipesArray, search)
    /* Affichage d'un message d'erreur en cas d'absence de résultats*/
    if(recipesToDisplay.length == 0){
        document.getElementById('noResultMessageBox').classList.remove('d-none')
    }else{
        document.getElementById('noResultMessageBox').classList.add('d-none')
    }
}

/**
 * algorithme de recherche dans les noms des recettes
 * @param { array } recipesToDisplay tableau recevant les résultats à afficher
 * @param { array } recipesArray tableau de recettes sur lequel on effectue la recherche
 * @param { string } search input de l'utilisateur
 */
function displayRecipesWithNameResults(recipesToDisplay, recipesArray, search){
    let recipesArrayLength = recipesArray.length;
    let i = 0;
    for( ; i < recipesArrayLength ; i++){
        let cleanName = cleanWord(recipesArray[i].name.toLowerCase().trim())
        if(cleanName.includes(search)){
            if(!(recipesToDisplay.includes(recipesArray[i]))){
                recipesToDisplay.push(recipesArray[i])
            }
        }
    }
}

/**
 * algorithme de recherche dans la liste des ingrédients
 * @param { array } recipesToDisplay tableau recevant les résultats à afficher
 * @param { array } recipesArray tableau de recettes sur lequel on effectue la recherche
 * @param { string } search input de l'utilisateur
 */
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

/**
 * algorithme de recherche dans la description des recettes
 * @param { array } recipesToDisplay tableau recevant les résultats à afficher
 * @param { array } recipesArray tableau de recettes sur lequel on effectue la recherche
 * @param { string } search input de l'utilisateur
 */
function displayRecipesWithDescriptionResults(recipesToDisplay, recipesArray, search){
    for(let i = 0 ; i < recipesArray.length ; i++){
        if(cleanWord(recipesArray[i].description.toLowerCase().trim()).includes(search)){
            if(!(recipesToDisplay.includes(recipesArray[i]))){
                recipesToDisplay.push(recipesArray[i])
            }
        }
    }
}