interface FnInterface {
    arg: string;
    result: string;
}

const add = (a: number, b: number) => a + b;
const deduct = (a: number, b: number) => a + b;

const memoize = (fn: Function): any => {

    let arrFn: FnInterface[] = [];
    let newFn: FnInterface = {
        arg: JSON.stringify(fn.arguments),
        result: JSON.stringify(`${fn()}`),
    };
    arrFn.forEach(el => {
        if (arrFn.length == 0) {
            arrFn.push(newFn);
        } else {
            if (el.arg === newFn.arg && el.result == newFn.result) {
                return JSON.parse(newFn.result);
            } else {
                return fn();
            }
        }
    })
}

const memoizedAdd = memoize(add);
const memoizedDeduct = memoize(deduct);

memoizedAdd(1, 2);
memoizedAdd(4, 2);
memoizedAdd(1, 2);

memoizedDeduct(8, 2);
memoizedDeduct(4, 2);
memoizedDeduct(8, 2);