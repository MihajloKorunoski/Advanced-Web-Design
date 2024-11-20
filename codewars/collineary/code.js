function collinearity( x1,y1, x2,y2 ) {
    let k = 0;
    if(x2 !== 0){
        Math.floor(k = x1/x2);
        return (x1 === k*x2) && (y1 === k * y2);
    }
    if(y2 !== 0){
        Math.floor(k = y1/y2);
        return (x1 === k*x2) && (y1 === k *y2);
    }
    return true;
}

const testCases = [
    { x1: 2, y1: 4, x2: 1, y2: 2 }, // Expected: true
    { x1: 3, y1: 5, x2: 1, y2: 2 }, // Expected: false
    { x1: 0, y1: 2, x2: 0, y2: 4 }, // Expected: true
    { x1: 4, y1: 0, x2: 2, y2: 0 }, // Expected: true
    { x1: 0, y1: 0, x2: 0, y2: 0 }, // Expected: true
    { x1: 3, y1: 0, x2: 1, y2: 0 }, // Expected: true
    { x1: 3, y1: 0, x2: 1, y2: 2 }  // Expected: false
];

// Run tests and print results
testCases.forEach(({ x1, y1, x2, y2 }, index) => {
    const result = collinearity(x1, y1, x2, y2);
    console.log(`Test ${index + 1}: collinearity(${x1}, ${y1}, ${x2}, ${y2}) => ${result}`);
});
