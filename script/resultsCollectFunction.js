import { cleanWord } from './utils.js'

export function collectResults(recipesSet, input){
    
    let results = new Set()
    recipesSet.forEach(recipe => {
        let ingredientsFromRecipe = new Set()
        for(let ingredient of recipe.ingredients){
            ingredientsFromRecipe.add(cleanWord(ingredient.ingredient))
        }
        console.log(ingredientsFromRecipe)
        if(cleanWord(recipe.name).toLowerCase().trim().includes(input) /*||
        cleanWord(recipe.ingredients).toLowerCase().trim().includes(input)*/ ||
        cleanWord(recipe.description).toLowerCase().trim().includes(input)){
            //console.log('trouvé')
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


