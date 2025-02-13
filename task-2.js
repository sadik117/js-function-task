function number(num){
    if (num % 2 !== 0){
        const result = num * 2;
        return result;
    }
    else {
        const result = num / 2;
        return result;
    } 
}


const outcome = number(9);
console.log(outcome);
