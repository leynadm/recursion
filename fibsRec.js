function fibsRec(number){
            
    if(typeof number != 'number') return "You need to add a number"
    
    if(number === 0) return [0]

    if(number === 1) return [0,1]

    const arr = fibsRec(number-1);

    arr.push(arr[number-1]+arr[number-2]);
    
    return arr;
}

export default fibsRec