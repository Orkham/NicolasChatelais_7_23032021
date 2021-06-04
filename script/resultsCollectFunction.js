import { cleanWord } from './utils.js'

export function collectResults(recipesSet, input){
    
    let results = new Set()
    recipesSet.forEach(recipe => {
        /*Récupération de la liste des ingrédients pour chaque recette*/
        let ingredientsFromRecipe = new Set()
        for(let ingredient of recipe.ingredients){
            ingredientsFromRecipe.add(cleanWord(ingredient.ingredient))
        }
        let ingredientsFromRecipeArray = Array.from(ingredientsFromRecipe).join(' ').toLocaleLowerCase()

        if(cleanWord(recipe.name).toLowerCase().trim().includes(input) ||
        ingredientsFromRecipeArray.trim().includes(input) ||
        cleanWord(recipe.description).toLowerCase().trim().includes(input)){
            results.add(recipe)
        }
    });
    
    if(results.length == 0){
        document.getElementById('noResultMessageBox').classList.remove('d-none')
    }else{
        document.getElementById('noResultMessageBox').classList.add('d-none')
    }

   return results
}


