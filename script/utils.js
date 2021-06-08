/**
 * Fonction pour afficher les unités de mesure des recettes
 * @param { string } unit unité de mesure dans la recette en base
 * @returns string à afficher dans le HTLM
 */
export function displayUnit(unit){
    if(unit === "grammes"){
        return 'g'
    }else if(unit){
        return unit
    }else{
        return ""
    }
}

/**
 * Transforme un texte pour avoir sa première lettre en majuscule
 * @param { string } text texte à transformer
 * @returns le texte transformé
 */
export function firstLetterUppercase(text){
    let lowerText = text.toLowerCase()
    let cleanText = lowerText.charAt(0).toUpperCase() + lowerText.substring(1)
    return cleanText
}

/**
 * Supprime le contenu d'un affichage HTML
 * @param { HTMLCollection } listToClean contenu de la liste à vider
 */
export function clearListDisplay(listToClean){
    
    while(listToClean.childNodes.length !== 1){
        (listToClean.childNodes[1]).remove()
    }

}

/**
 * Retire les caractères spéciaux d'un terme
 * @param { string } str texte à transformer
 * @returns le string transformé (sans accent)
 */
export function cleanWord(str) {
    const map = {
      'a' : 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
      'e' : 'é|è|ê|ë|É|È|Ê|Ë',
      'i' : 'í|ì|î|ï|Í|Ì|Î|Ï',
      'o' : 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç'
    };
  
    for (let pattern in map) {
      str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    }
  
    return str;
}

/**
 * Fonction intégrant une recette dans un tableau si celle-ci n'y est pas déjà
 * @param { array} newRecipesToDisplayList tableau accueillant les recettes à afficher
 * @param { Object } recipe recette à pusher dans le tableau
 */
export function pushRecipeInArray(newRecipesToDisplayList, recipe){
    if(!newRecipesToDisplayList.includes(recipe)){
        newRecipesToDisplayList.push(recipe)
    }
}

/**
 * Vérification de la longueur d'un input 
 * @param { string } input 
 * @returns true si l'input est assez long
 */
export function isInputLongEnough(input){
    if(input>2){
        return true
    }
}