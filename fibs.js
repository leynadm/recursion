function fibs(number){

    // initialize the array starting with 0 
    let fibnoacciArr = [0]

    // cover the cases with invalid input for a proper return
    if (number < 1 || isNaN(number)) return "You need to add a number higher than 0";

    // set up the base case
    if (number === 1) return fibnoacciArr


    for (let index = 1; index < number; index++) {
        
        if(index === 1 || index === 2){

            fibnoacciArr.push(1)

        } else {

            fibnoacciArr.push(fibnoacciArr[index-2] + fibnoacciArr[index-1]);

        }                
        
        return fibnoacciArr
    }

}

export default fibs