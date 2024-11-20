function highAndLow(numbers){
    let numberArray = numbers.split(' ').map(number => Number(number))
    return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
}


console.log(highAndLow("1 2 3 4 5"));