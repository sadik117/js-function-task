function odd_even(integer){
    if (integer % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}

const outcome = odd_even(7);
console.log(outcome);