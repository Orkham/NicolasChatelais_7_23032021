
export function displayUnit(unit){
    if(unit === "grammes"){
        return 'g'
    }else if(unit){
        return unit
    }else{
        return ""
    }
}

export function firstLetterUppercase(text){
    let lowerText = text.toLowerCase()
    let cleanText = lowerText.charAt(0).toUpperCase() + lowerText.substring(1)
    return cleanText
}

export function clearListDisplay(listToClean){
    
    while(listToClean.childNodes.length !== 1){
        (listToClean.childNodes[1]).remove()
    }

}

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

export function pushRecipeInArray(newRecipesToDisplayList, recipe){
    if(!newRecipesToDisplayList.includes(recipe)){
        newRecipesToDisplayList.push(recipe)
    }
}