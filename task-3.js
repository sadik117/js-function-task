function make_avg(array){
    let sum = 0;
    for (number of array){
         sum = sum + number;
    }
    const count = array.length;
    const avg = sum / count;
    return avg;
}


const array = [2, 7, 12, 17, 24, 36];
const avg = make_avg(array)
console.log(avg)