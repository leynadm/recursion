export function mergeSort(arrayParam) {
        
    if(arrayParam.length <2){
        return arrayParam
    }

    const middle = Math.floor(arrayParam.length/2)
    const arrayLeft = arrayParam.slice(0,middle)
    const arrayRight = arrayParam.slice(middle)

    return mergeArrays(mergeSort(arrayLeft), mergeSort(arrayRight))

}


export function mergeArrays(arrayLeft,arrayRight){

    const sortedArr = []

    while(arrayLeft.length && arrayRight.length){
        
        if(arrayLeft[0] <= arrayRight[0]) {
            sortedArr.push(arrayLeft.shift())
        } else {
            sortedArr.push(arrayRight.shift())
        }
    } 
    
    return [...sortedArr,...arrayLeft,...arrayRight]

}