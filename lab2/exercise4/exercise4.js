const compose = function(functions) {
    return function(x){
        return functions.reduceRight((acc,fn) => fn(acc), x);
    }
}
const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn1(4));