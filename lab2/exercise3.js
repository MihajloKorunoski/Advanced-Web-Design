function sort_by_num_calls(funcList) {
    function numCalls(func) {
        let count = 0;
        while (typeof func === 'function') {
            func = func();
            count++;
        }
        return count;
    }

    return funcList.sort((a, b) => numCalls(a) - numCalls(b));
}

const f1 = () => "hello";
const f2 = () => () => "AWD";
const f3 = () => () => () => "user";

console.log(sort_by_num_calls([f2, f3, f1]));