function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean)
    }
    if (obj !== null & typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) =>{
            const value = compactObject(obj[key]);
            if(Boolean(value)){
                acc[key] = value;
            }
            return acc;
        },{});
    }
    return obj;
}

// Test cases
console.log(compactObject([null, 0, false, 1]));
// Output: [1]

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// Output: [5, [], [16]]

console.log(compactObject({a: null, b: 0, c: false, d: 1, e: {f: null, g: 2, h: 0}}));
// Output: { d: 1, e: { g: 2 } }
