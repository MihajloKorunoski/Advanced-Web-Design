function squareDigits(num){
    let numbers = num.toString().split("");
    numbers = numbers.map(number => Math.pow(parseInt(number), 2));
    return Number(numbers.join(""));
}

console.log(squareDigits(505));