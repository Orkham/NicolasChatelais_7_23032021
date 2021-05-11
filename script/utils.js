
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
