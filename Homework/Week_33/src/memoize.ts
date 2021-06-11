
const add = (a: number, b: number) => a + b;
const deduct = (a: number, b: number) => a - b;
const getStr = (str: string) => 'Hello ' + str;

const memoize = (fn: Function) => {

    const cache: typeof fn.arguments = {};

    return (...args: typeof fn.arguments) => {
        const stringifiesdArgs = JSON.stringify(args);
        const result = cache[stringifiesdArgs] || fn(...args);

        cache[stringifiesdArgs] = result;

        console.log(cache);

        return result;
    }
}

const memoizedAdd = memoize(add);
const memoizedDeduct = memoize(deduct);
const memoizedGetStr = memoize(getStr);

console.time();
console.log(memoizedAdd(1, 2));
console.timeEnd();
console.time();
console.log(memoizedAdd(1, 2));
console.timeEnd();

console.time();
console.log(memoizedDeduct(8, 2));
console.timeEnd();
console.time();
console.log(memoizedDeduct(8, 2));
console.timeEnd();

console.time();
console.log(memoizedGetStr('Oleg'));
console.timeEnd();
console.time();
console.log(memoizedGetStr('Oleg'));
console.timeEnd();